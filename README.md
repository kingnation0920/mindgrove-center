# 사람과성장 코칭심리상담센터 (Mindgrove) 웹사이트

`https://mindgrove.kr` 사이트를 기존 비주얼 디자인(레이아웃, 폰트, 컬러, 이미지) 및 42개 블로그 칼럼과 SEO 메타데이터를 100% 보존하여 **Next.js 15 + Tailwind CSS**로 마이그레이션한 프로젝트입니다.

## 주요 특징
- **디자인 1:1 복원**: 메인 슬로건, 소개, 5대 전문 프로그램, 오시는 길, 반응형 헤더/푸터 완벽 일치
- **42개 블로그 칼럼 전수 탑재**: 기존 작성된 42개 전문 칼럼의 본문, 이미지, 인용 논문 링크를 SSG(정적 생성)로 즉시 로딩
- **SEO & 메타데이터 보존**: 네이버 서치어드바이저 및 구글 서치콘솔 소유권 태그, Schema.org 로컬 비즈니스 스키마, `sitemap.xml`, `robots.txt` 자동 생성
- **URL 호환 리디렉션**: 기존 클릭엔 게시판 주소(`/boards/:id/view`) 접속 시 신규 주소(`/blog/:id`)로 영구 301 리디렉션 처리

## 로컬 실행
```bash
npm run dev
# 브라우저에서 http://localhost:3000 접속
```

## 프로덕션 빌드 검증
```bash
npm run build
npm run start
```

## GitHub & Vercel 배포 방법
1. **GitHub 저장소 생성 및 푸시**:
   ```bash
   git init
   git add .
   git commit -m "feat: migrate mindgrove website to Next.js 15"
   git branch -M main
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```
2. **Vercel 배포**:
   - [vercel.com](https://vercel.com) 로그인 -> `Add New Project` -> 생성한 GitHub 저장소 선택 -> `Deploy` 클릭 (1분 내 배포 완료)
3. **도메인 연결**:
   - Vercel Project Settings -> `Domains` -> `mindgrove.kr` 추가
   - 도메인 DNS에 Vercel 레코드(CNAME/A) 등록
