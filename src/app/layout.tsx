import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: '사람과 성장 코칭심리상담센터',
  description: '서울 강남역 인근 프라이빗 심리상담센터. 심리검사, 개인 심리상담, 부부상담, 커플상담, 여성 창업자 멘탈 코칭, CEO 번아웃 상담, 성장코칭, 기업심리 EAP, 비즈니스 컨설팅 제공.',
  authors: [{ name: '사람과 성장 코칭심리상담센터' }],
  metadataBase: new URL('https://mindgrove.kr'),
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/images/file_1967099491.png',
    shortcut: '/images/file_1967099491.png',
  },
  openGraph: {
    title: '사람과 성장 코칭심리상담센터',
    description: '서울 강남역 인근 프라이빗 심리상담센터. 심리검사, 개인 심리상담, 부부상담, 커플상담, 여성 창업자 멘탈 코칭, CEO 번아웃 상담, 성장코칭, 기업심리 EAP, 비즈니스 컨설팅 제공.',
    url: 'https://mindgrove.kr',
    siteName: '사람과 성장 코칭심리상담센터',
    images: [
      {
        url: '/images/file_809332737.png',
        width: 1200,
        height: 630,
        alt: '사람과성장 코칭심리상담센터',
      },
    ],
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '사람과 성장 코칭심리상담센터',
    description: '사람과 성장 코칭심리상담센터',
    images: ['/images/file_809332737.png'],
  },
  verification: {
    google: 'x4ypx1lDTZrr8uYV0VfOiIeZpJZzbQYNnQwrlAZiaoo',
    other: {
      'naver-site-verification': '791f42106466b5fc217438865f12035eed00762a',
    },
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Psychologist',
  'name': '사람과성장 코칭심리상담센터',
  'alternateName': '사람과 성장 코칭심리상담센터 강남서초본원',
  '@id': 'https://mindgrove.kr',
  'url': 'https://mindgrove.kr',
  'image': 'https://mindgrove.kr/images/file_809332737.png',
  'description': '서울 강남역 인근 프라이빗 심리상담센터. 심리검사, 개인 심리상담, 부부상담, 커플상담, 여성 창업자 멘탈 코칭, CEO 번아웃 상담, 성장코칭, 기업심리 EAP, 비즈니스 컨설팅 제공.',
  'address': {
    '@type': 'PostalAddress',
    'streetAddress': '강남대로 320 황화빌딩 10층 1001, 1002호',
    'addressLocality': '강남구',
    'addressRegion': '서울특별시',
    'postalCode': '06000',
    'addressCountry': 'KR'
  },
  'geo': {
    '@type': 'GeoCoordinates',
    'latitude': '37.4979',
    'longitude': '127.0280'
  },
  'telephone': '+82-2-566-8291',
  'email': 'sgcenter0123@gmail.com',
  'openingHoursSpecification': {
    '@type': 'OpeningHoursSpecification',
    'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    'opens': '09:00',
    'closes': '22:00'
  },
  'priceRange': '₩₩₩',
  'currenciesAccepted': 'KRW',
  'paymentAccepted': '현금, 계좌이체, 카드',
  'areaServed': ['강남구', '서초구', '송파구', '역삼동', '선릉', '교대', '양재', '논현'],
  'founder': {
    '@type': 'Person',
    'name': '김민경'
  },
  'legalName': '사람과성장 코칭심리상담센터',
  'taxID': '112-20-23060'
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-white text-gray-800 antialiased selection:bg-brand-orange selection:text-white">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
