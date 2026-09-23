import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Metadata } from 'next';
import { Calendar, User, Eye, ArrowLeft, ArrowRight, Share2, Phone } from 'lucide-react';
import postsData from '@/data/posts.json';

interface PostPageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return postsData.map((post) => ({
    id: post.id.toString(),
  }));
}

function cleanSnippet(html: string): string {
  return html
    .replace(/<[^>]+>/g, ' ')
    .replace(/&amp;quot;/g, '"')
    .replace(/&quot;/g, '"')
    .replace(/&amp;#39;/g, "'")
    .replace(/&#39;/g, "'")
    .replace(/&amp;lt;/g, '<')
    .replace(/&lt;/g, '<')
    .replace(/&amp;gt;/g, '>')
    .replace(/&gt;/g, '>')
    .replace(/&amp;nbsp;/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/\s+/g, ' ')
    .trim()
    .substring(0, 160);
}

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const post = postsData.find((p) => p.id.toString() === resolvedParams.id);
  if (!post) return { title: '글을 찾을 수 없습니다' };

  const snippet = cleanSnippet(post.contentHtml);

  return {
    title: `${post.title} | 사람과성장 코칭심리상담센터`,
    description: snippet,
    openGraph: {
      title: post.title,
      description: snippet,
      type: 'article',
      publishedTime: post.date,
      authors: [post.writer || '김민경 센터장'],
      url: `https://mindgrove.kr/blog/${post.id}`,
    },
    alternates: {
      canonical: `/blog/${post.id}`,
    },
  };
}

export default async function BlogPostPage({ params }: PostPageProps) {
  const resolvedParams = await params;
  const postId = parseInt(resolvedParams.id, 10);
  const postIndex = postsData.findIndex((p) => p.id === postId);

  if (postIndex === -1) {
    notFound();
  }

  const post = postsData[postIndex];
  const prevPost = postIndex > 0 ? postsData[postIndex - 1] : null;
  const nextPost = postIndex < postsData.length - 1 ? postsData[postIndex + 1] : null;

  const snippet = cleanSnippet(post.contentHtml);

  function formatContentHtml(html: string): string {
    let formatted = html
      .replace(/&amp;quot;/g, '"')
      .replace(/&quot;/g, '"')
      .replace(/&amp;#39;/g, "'")
      .replace(/&#39;/g, "'");

    if ((formatted.match(/<h2/g) || []).length >= 2) return formatted;

    formatted = formatted.replace(
      /<p>([^\n<]{4,40})<br\s*\/?>/g,
      '<h2 class="text-xl sm:text-2xl font-bold text-gray-900 mt-10 mb-4 break-keep">$1</h2><p>'
    );

    if (!formatted.includes('<h2')) {
      let figCount = 0;
      const headings = [
        '1. 마음의 신호 알아차리기: 우리가 마주한 심리적 어려움',
        '2. 임상심리학적 분석: 반복되는 패턴과 무의식적 방어기제',
        '3. 온전한 나로 회복하기: 자기자비와 건강한 실천법',
      ];
      formatted = formatted.replace(/<figure/g, () => {
        const h = headings[figCount] || '전문 상담과 치유의 방향';
        figCount++;
        return `<h2 class="text-xl sm:text-2xl font-bold text-gray-900 mt-10 mb-4 break-keep">${h}</h2><figure`;
      });
    }
    return formatted;
  }

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BlogPosting',
        headline: post.title,
        description: snippet,
        datePublished: post.date,
        dateModified: post.date,
        inLanguage: 'ko-KR',
        mainEntityOfPage: `https://mindgrove.kr/blog/${post.id}`,
        author: {
          '@type': 'Person',
          name: '김민경',
          jobTitle: '사람과성장 코칭심리상담센터 센터장 / 보건복지부 임상심리사 1급',
          description: '보건복지부 임상심리사 1급, 명지대학교 대학원 코칭심리학 박사 과정, 명지대학교 대학원 상담심리 석사 졸업, 사람과성장 코칭심리상담센터 센터장.',
          worksFor: {
            '@type': 'Organization',
            name: '사람과성장 코칭심리상담센터',
            url: 'https://mindgrove.kr',
          },
          hasCredential: [
            { '@type': 'EducationalOccupationalCredential', name: '보건복지부 임상심리사 1급' },
            { '@type': 'EducationalOccupationalCredential', name: '보건복지부 사회복지사 1급' },
            { '@type': 'EducationalOccupationalCredential', name: '여성가족부 청소년상담사 2급' },
          ],
          alumniOf: [
            { '@type': 'EducationalOrganization', name: '명지대학교 대학원 코칭심리학 박사 과정' },
            { '@type': 'EducationalOrganization', name: '명지대학교 대학원 상담심리 석사 졸업' },
          ],
        },
        reviewedBy: {
          '@type': 'Person',
          name: '김민경',
          jobTitle: '보건복지부 임상심리사 1급 / 센터장',
          description: '보건복지부 임상심리사 1급, 명지대학교 대학원 코칭심리학 박사 과정, 명지대학교 대학원 상담심리 석사 졸업, 사람과성장 코칭심리상담센터 센터장.',
          url: 'https://mindgrove.kr',
        },
        publisher: {
          '@type': 'Organization',
          name: '사람과성장 코칭심리상담센터',
          url: 'https://mindgrove.kr',
          logo: {
            '@type': 'ImageObject',
            url: 'https://mindgrove.kr/images/file_809332737.png',
          },
        },
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: '심리상담이나 코칭은 어떤 순서로 진행되나요?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: '초기 접수 면담을 통해 현재 겪고 계신 주 호소 문제를 명확히 파악하고, 필요 시 과학적인 심리검사(MMPI, TCI 등)를 병행하여 1:1 맞춤형 목표를 설정합니다.',
            },
          },
          {
            '@type': 'Question',
            name: '상담 기록이나 검사 결과는 비밀이 보장되나요?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: '사람과성장 코칭심리상담센터는 한국상담심리학회 및 한국임상심리학회 윤리 규정을 엄격히 준수하며, 모든 상담 및 검사 내용은 법적으로 철저히 비밀이 보장됩니다.',
            },
          },
        ],
      },
    ],
  };

  const hasExistingFaq = post.contentHtml.includes('자주 묻는 질문');

  return (
    <article className="bg-white min-h-screen py-8 sm:py-12 md:py-20 overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb & Back */}
        <div className="mb-6 sm:mb-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-500 hover:text-brand-orange transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            블로그 칼럼 목록으로 돌아가기
          </Link>
        </div>

        {/* Post Header */}
        <header className="border-b border-gray-200 pb-6 sm:pb-8 mb-8 sm:mb-10">
          <div className="flex items-center gap-2 mb-3">
            <span className="bg-orange-50 text-brand-orange font-bold text-xs px-2.5 py-1 rounded-full">
              심리 칼럼 #{post.id}
            </span>
          </div>

          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-950 leading-snug tracking-tight mb-4 sm:mb-6 break-keep break-words">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-y-2 gap-x-4 sm:gap-x-6 text-xs sm:text-sm text-gray-500">
            <span className="flex items-center gap-1.5">
              <User className="w-4 h-4 text-gray-400 shrink-0" />
              {post.writer}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-gray-400 shrink-0" />
              {post.date}
            </span>
            {post.hits > 0 && (
              <span className="flex items-center gap-1.5">
                <Eye className="w-4 h-4 text-gray-400 shrink-0" />
                조회 {post.hits}
              </span>
            )}
          </div>

          {/* Direct Answer Summary Box */}
          <div className="mt-6 p-4 sm:p-5 bg-orange-50/70 border-l-4 border-brand-orange rounded-r-xl shadow-xs">
            <p className="text-xs sm:text-sm font-bold text-gray-900 mb-1.5 flex items-center gap-1.5">
              <span>💡</span> 핵심 요약 (Direct Answer)
            </p>
            <p className="text-xs sm:text-sm text-gray-700 leading-relaxed break-keep font-medium">
              {snippet}
            </p>
          </div>
        </header>

        {/* Post Body (Preserved HTML with mobile-safe wrapping) */}
        <div
          className="board_contents max-w-none text-gray-800 leading-relaxed font-normal w-full overflow-hidden break-words"
          dangerouslySetInnerHTML={{ __html: formatContentHtml(post.contentHtml) }}
        />

        {/* Default FAQ Section if not in content */}
        {!hasExistingFaq && (
          <section className="mt-12 pt-8 border-t border-gray-200">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">자주 묻는 질문 (FAQ)</h2>
            <div className="space-y-4">
              <div className="bg-orange-50/40 p-5 rounded-xl border border-orange-100/80">
                <h3 className="font-bold text-gray-900 text-sm sm:text-base mb-1.5">
                  Q. 심리상담이나 코칭은 어떤 순서로 진행되나요?
                </h3>
                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                  초기 접수 면담을 통해 현재 겪고 계신 주 호소 문제를 명확히 파악하고, 필요 시 과학적인 심리검사(MMPI, TCI 등)를 병행하여 1:1 맞춤형 목표를 설정합니다.
                </p>
              </div>
              <div className="bg-orange-50/40 p-5 rounded-xl border border-orange-100/80">
                <h3 className="font-bold text-gray-900 text-sm sm:text-base mb-1.5">
                  Q. 상담 기록이나 검사 결과는 비밀이 보장되나요?
                </h3>
                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                  사람과성장 코칭심리상담센터는 한국상담심리학회 및 한국임상심리학회 윤리 규정을 엄격히 준수하며, 모든 상담 및 검사 내용은 법적으로 철저히 비밀이 보장됩니다.
                </p>
              </div>
            </div>
          </section>
        )}

        {/* Author / Reviewer Profile Card */}
        <div className="mt-12 p-5 sm:p-6 bg-orange-50/40 rounded-2xl border border-orange-100 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5 shadow-xs">
          <div className="w-12 h-12 rounded-full bg-brand-orange text-white flex items-center justify-center font-bold text-base shrink-0 shadow-xs">
            김
          </div>
          <div className="space-y-1">
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-bold text-gray-950 text-sm sm:text-base">글쓴이 김민경 센터장</span>
              <span className="text-xs bg-orange-100 text-brand-orange font-semibold px-2.5 py-0.5 rounded-full">
                보건복지부 임상심리사 1급
              </span>
              <span className="text-xs text-gray-500 font-medium">명지대 코칭심리학 박사 과정</span>
            </div>
            <p className="text-xs text-gray-600 leading-relaxed break-keep">
              보건복지부 사회복지사 1급 · 여성가족부 청소년상담사 2급 | 명지대학교 대학원 상담심리 석사 졸업 | 마케팅 법인 기획 총괄 및 기업·법인 심리상담/코칭 총괄
            </p>
          </div>
        </div>

        {/* Call To Action Banner */}
        <div className="mt-8 sm:mt-10 p-6 sm:p-8 bg-gradient-to-r from-orange-50/70 to-amber-50/70 border border-orange-200/70 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-base sm:text-lg font-bold text-gray-900 break-keep">
              마음의 상처와 고민, 혼자 힘들어하지 마세요
            </h4>
            <p className="text-xs sm:text-sm text-gray-600 break-keep">
              사람과성장 코칭심리상담센터는 1급 임상전문가의 맞춤 상담을 제공합니다.
            </p>
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto justify-center">
            <a
              href="tel:02-566-8291"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-brand-orange hover:bg-[#e04f1c] text-white text-xs sm:text-sm font-semibold rounded-xl transition-colors shadow-sm w-full sm:w-auto"
            >
              <Phone className="w-4 h-4 shrink-0" />
              상담 문의 02-566-8291
            </a>
          </div>
        </div>

        {/* Prev / Next Navigation */}
        <nav className="mt-10 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-200 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {prevPost ? (
            <Link
              href={`/blog/${prevPost.id}`}
              className="p-4 border border-gray-200 rounded-xl hover:border-brand-orange transition-all flex flex-col group"
            >
              <span className="text-xs text-gray-400 flex items-center gap-1 mb-1">
                <ArrowLeft className="w-3 h-3 group-hover:-translate-x-0.5 transition-transform shrink-0" /> 이전 글
              </span>
              <span className="text-xs sm:text-sm font-semibold text-gray-800 group-hover:text-brand-orange line-clamp-1 transition-colors break-words">
                {prevPost.title}
              </span>
            </Link>
          ) : <div />}

          {nextPost ? (
            <Link
              href={`/blog/${nextPost.id}`}
              className="p-4 border border-gray-200 rounded-xl hover:border-brand-orange transition-all flex flex-col sm:items-end text-left sm:text-right group"
            >
              <span className="text-xs text-gray-400 flex items-center gap-1 mb-1 sm:justify-end">
                다음 글 <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform shrink-0" />
              </span>
              <span className="text-xs sm:text-sm font-semibold text-gray-800 group-hover:text-brand-orange line-clamp-1 transition-colors break-words">
                {nextPost.title}
              </span>
            </Link>
          ) : <div />}
        </nav>
      </div>
    </article>
  );
}
