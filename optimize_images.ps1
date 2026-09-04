Add-Type -AssemblyName System.Drawing

$imgDir = Join-Path $PSScriptRoot "public\images"
$files = Get-ChildItem -Path $imgDir -File

$jpegCodec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.FormatDescription -eq "JPEG" }
$encoderParams = New-Object System.Drawing.Imaging.EncoderParameters(1)
$encoderParams.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter([System.Drawing.Imaging.Encoder]::Quality, [long]82)

$count = 0
$savedBytes = 0

foreach ($file in $files) {
    if ($file.Length -gt 300KB) {
        $tempPath = $file.FullName + ".tmp"
        try {
            $srcImage = [System.Drawing.Image]::FromFile($file.FullName)
            
            $width = $srcImage.Width
            $height = $srcImage.Height
            $maxWidth = 1400

            if ($width -gt $maxWidth) {
                $newWidth = $maxWidth
                $newHeight = [int]($height * ($maxWidth / $width))
            } else {
                $newWidth = $width
                $newHeight = $height
            }

            $bitmap = New-Object System.Drawing.Bitmap($newWidth, $newHeight)
            $graphics = [System.Drawing.Graphics]::FromImage($bitmap)
            $graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
            $graphics.DrawImage($srcImage, 0, 0, $newWidth, $newHeight)
            
            # Save compressed
            $bitmap.Save($tempPath, $jpegCodec, $encoderParams)

            $graphics.Dispose()
            $bitmap.Dispose()
            $srcImage.Dispose()

            $newLen = (Get-Item $tempPath).Length
            if ($newLen -lt $file.Length) {
                $savedBytes += ($file.Length - $newLen)
                Move-Item -Path $tempPath -Destination $file.FullName -Force
                $count++
            } else {
                Remove-Item -Path $tempPath -Force
            }
        } catch {
            if (Test-Path $tempPath) { Remove-Item -Path $tempPath -Force }
            # ignore errors for unsupported formats
        }
    }
}

$savedMB = [math]::Round($savedBytes / 1MB, 2)
Write-Output "Optimized $count images. Saved: $savedMB MB!"
