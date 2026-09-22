import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '센터소개 | 사람과성장 코칭심리상담센터',
  description: '사람과성장 코칭심리상담센터 소개. 프라이빗한 공간에서 공인된 전문가와 함께하는 심리상담.',
  alternates: {
    canonical: '/about',
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
