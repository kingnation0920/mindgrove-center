import React from 'react';
import Link from 'next/link';
import { BookOpen, Calendar, Eye, Search, ArrowRight } from 'lucide-react';
import postsData from '@/data/posts.json';

export const metadata = {
  title: '심리 칼럼 및 소식 | 사람과성장 코칭심리상담센터',
  description: '임상 심리 연구와 실제 상담 사례를 바탕으로 작성된 사람과성장 코칭심리상담센터의 전문 심리 칼럼 모음입니다.',
};

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const resolvedSearchParams = await searchParams;
  const query = (resolvedSearchParams.q || '').trim().toLowerCase();

  const filteredPosts = postsData.filter((post) => {
    if (!query) return true;
    return (
      post.title.toLowerCase().includes(query) ||
      post.contentHtml.toLowerCase().includes(query)
    );
  });

  return (
    <div className="bg-gray-50/50 min-h-screen py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold text-brand-orange uppercase tracking-wider">
            INSIGHTS & COLUMNS
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2">
            사람과성장 심리 칼럼
          </h1>
          <p className="text-gray-500 text-sm sm:text-base mt-3">
            국내외 심리학 연구와 풍부한 임상 경험을 토대로 전하는 마음의 회복과 성장의 이야기입니다.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-xl mx-auto mb-12">
          <form method="GET" className="relative flex items-center">
            <input
              type="text"
              name="q"
              defaultValue={query}
              placeholder="관심 있는 심리 주제, 증상, 키워드를 검색해 보세요 (예: 번아웃, 부부, ADHD)"
              className="w-full pl-11 pr-24 py-3.5 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-orange/40 focus:border-brand-orange shadow-sm"
            />
            <Search className="w-5 h-5 text-gray-400 absolute left-3.5" />
            <button
              type="submit"
              className="absolute right-2 px-4 py-2 bg-brand-orange hover:bg-[#e04f1c] text-white text-xs font-semibold rounded-lg transition-colors"
            >
              검색
            </button>
          </form>
          {query && (
            <div className="flex items-center justify-between text-xs text-gray-500 mt-2 px-1">
              <span>'{query}' 검색 결과 {filteredPosts.length}건</span>
              <Link href="/blog" className="text-brand-orange hover:underline">
                전체 목록 보기
              </Link>
            </div>
          )}
        </div>

        {/* Posts List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post) => {
            const cleanSnippet = post.contentHtml
              .replace(/<[^>]+>/g, ' ')
              .replace(/&nbsp;/g, ' ')
              .replace(/\s+/g, ' ')
              .trim()
              .substring(0, 140);

            return (
              <article
                key={post.id}
                className="bg-white rounded-xl border border-gray-200/80 hover:border-brand-orange/50 overflow-hidden shadow-sm hover:shadow-md transition-all duration-200 flex flex-col group"
              >
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center justify-between text-xs text-gray-400 mb-3">
                    <span className="font-semibold text-brand-orange">
                      #{post.id}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {post.date}
                    </span>
                  </div>

                  <h2 className="text-base sm:text-lg font-bold text-gray-900 group-hover:text-brand-orange transition-colors line-clamp-2 leading-snug mb-3 break-keep break-words">
                    <Link href={`/blog/${post.id}`}>
                      {post.title}
                    </Link>
                  </h2>

                  <p className="text-xs sm:text-sm text-gray-500 line-clamp-3 leading-relaxed flex-grow mb-4 break-keep break-words">
                    {cleanSnippet}...
                  </p>

                  <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs">
                    <span className="text-gray-400">{post.writer}</span>
                    <Link
                      href={`/blog/${post.id}`}
                      className="font-semibold text-brand-orange inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                    >
                      상세보기 <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-20 bg-white rounded-xl border border-gray-200">
            <BookOpen className="w-12 h-12 text-gray-300 mx-auto mb-3" />
            <p className="text-gray-600 font-medium">검색된 글이 없습니다.</p>
            <p className="text-xs text-gray-400 mt-1">다른 검색어를 입력해 보세요.</p>
            <Link
              href="/blog"
              className="mt-4 inline-block px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg text-xs font-semibold transition-colors"
            >
              전체 글 목록으로 돌아가기
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
