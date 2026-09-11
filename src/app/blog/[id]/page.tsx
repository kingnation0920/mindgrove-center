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

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const post = postsData.find((p) => p.id.toString() === resolvedParams.id);
  if (!post) return { title: '글을 찾을 수 없습니다' };

  const snippet = post.contentHtml
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .substring(0, 160);

  return {
    title: `${post.title} | 사람과성장 코칭심리상담센터`,
    description: snippet,
    openGraph: {
      title: post.title,
      description: snippet,
      type: 'article',
      publishedTime: post.date,
      authors: [post.writer],
      url: `https://mindgrove.kr/blog/${post.id}`,
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

  return (
    <article className="bg-white min-h-screen py-8 sm:py-12 md:py-20 overflow-x-hidden">
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
        </header>

        {/* Post Body (Preserved HTML with mobile-safe wrapping) */}
        <div
          className="board_contents max-w-none text-gray-800 leading-relaxed font-normal w-full overflow-hidden break-words"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />

        {/* Call To Action Banner */}
        <div className="mt-14 sm:mt-16 p-6 sm:p-8 bg-gradient-to-r from-orange-50/70 to-amber-50/70 border border-orange-200/70 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
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
