import React from 'react';
import Link from 'next/link';
import { ArrowRight, MapPin, Phone, Mail, Clock, ShieldCheck, Heart, Sparkles, Building, BookOpen, Calendar } from 'lucide-react';
import postsData from '@/data/posts.json';

export default function HomePage() {
  const latestPosts = postsData.slice(0, 3);

  const programs = [
    {
      title: '심리검사',
      subtitle: '"내면의 씨앗을 발견하세요"',
      desc: '종합심리검사, TCI 기질검사, 웩슬러 지능검사 등 대학병원급 전문 검사 도구로 객관적인 나를 마주합니다.',
      image: '/images/file_853396696.png',
      href: '/assessment',
    },
    {
      title: '심리상담',
      subtitle: '"단단한 뿌리를 내립니다"',
      desc: '불안, 우울, 부부·가족 갈등, 번아웃 등 1급 임상 전문가의 1:1 맞춤 상담으로 상처를 보듬고 회복합니다.',
      image: '/images/file_311587389.png',
      href: '/counseling',
    },
    {
      title: '성장코칭',
      subtitle: '"꿈을 향해 뻗어나갑니다"',
      desc: '커리어 전환, 리더십, 라이프 코칭을 통해 나의 강점을 극대화하고 새로운 가능성을 열어갑니다.',
      image: '/images/file_1934031774.png',
      href: '/coaching',
    },
    {
      title: '기업심리 (EAP)',
      subtitle: '"서로에게 가지를 뻗습니다"',
      desc: '임직원 번아웃 예방 및 스트레스 완화, 심리적 안전감이 살아 숨 쉬는 건강한 조직 문화를 설계합니다.',
      image: '/images/file_1408983267.png',
      href: '/eap',
    },
    {
      title: '비즈니스 컨설팅',
      subtitle: '"함께 푸른 숲을 이룹니다"',
      desc: '스타트업 및 창업자 멘탈 케어, 경영 의사결정 코칭을 통해 지속 가능한 성장의 토대를 마련합니다.',
      image: '/images/file_867165764.png',
      href: '/consulting',
    },
  ];

  return (
    <div className="space-y-24 pb-20">
      {/* 1. Slogan Banner (Exact Original Slogan) */}
      <section className="relative bg-[#fcfbfa] border-b border-[#f0eee9] py-24 md:py-32 text-center overflow-hidden">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-sm md:text-base font-semibold text-brand-orange tracking-widest uppercase mb-4">
            People & Growth Psychological Counseling Center
          </p>
          <h1 className="font-kalguksu text-2xl sm:text-[30px] md:text-[36px] lg:text-[40px] text-[#222222] leading-[1.75] sm:leading-[1.8] md:leading-[1.85] tracking-normal font-bold">
            나에서 시작해<br />
            우리로 이어지는<br />
            성장의 여정.
          </h1>
          <div className="mt-8 flex justify-center">
            <div className="w-12 h-1 bg-brand-gold/60 rounded-full" />
          </div>
        </div>
      </section>

      {/* 2. Philosophy & Introduction */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-lg border border-gray-100 bg-white group">
              <img
                src="/images/file_475819945.png"
                alt="사람과성장 코칭심리상담센터"
                className="w-full h-[380px] sm:h-[450px] object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-xs uppercase tracking-wider bg-white/20 backdrop-blur-md px-3 py-1 rounded-full">
                  강남서초본원
                </span>
                <p className="text-base font-semibold mt-2">
                  마음의 숲, 사람과성장
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <div className="space-y-2">
              <span className="text-sm font-bold text-brand-orange">
                ABOUT US
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
                사람과성장 코칭심리상담센터는
              </h2>
            </div>

            <blockquote className="p-4 bg-orange-50/60 border-l-4 border-brand-orange text-gray-800 text-lg font-medium leading-relaxed italic">
              "한 사람의 깊은 회복이 우리 모두의 건강한 성장으로 이어진다."
            </blockquote>

            <div className="text-gray-600 text-base leading-relaxed space-y-4 font-normal">
              <p>
                보이지 않는 마음의 상처를 보듬는 깊은 치유를 통해, 개인의 회복이 단순한 안정을 넘어 삶의 활력과 조직의 몰입으로 자연스럽게 이어지도록 돕습니다.
              </p>
              <p>
                사람과 성장은 임상적 전문성으로 마음의 문턱을 낮추고, 구성원이 심리적 안전감 속에서 진정한 역량을 발휘할 수 있도록 따뜻한 문화를 설계합니다.
              </p>
              <p className="font-medium text-gray-800">
                한 사람의 진심 어린 변화가 숲을 이루듯, 우리는 당신의 마음을 이해하는 일에서부터 지속 가능한 내일을 함께 만들어갑니다.
              </p>
            </div>

            <div className="pt-2 flex flex-wrap gap-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-3 bg-brand-gold hover:bg-[#968a4d] text-white text-sm font-semibold rounded-lg transition-colors shadow-sm"
              >
                센터 자세히 보기
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center gap-2 px-6 py-3 border border-gray-300 hover:border-brand-orange hover:text-brand-orange text-gray-700 text-sm font-semibold rounded-lg transition-colors"
              >
                이용안내 및 비용
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Specialized Programs */}
      <section className="bg-gray-50/70 py-20 border-y border-gray-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-sm font-bold text-brand-orange tracking-wider uppercase">
              Programs
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              사람과성장 전문 프로그램
            </h2>
            <p className="text-gray-500 text-sm md:text-base">
              개인 심리치유부터 커리어 코칭, 기업 EAP까지 전문적이고 체계적인 프로세스를 제공합니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {programs.slice(0, 3).map((item, idx) => (
              <Link
                key={idx}
                href={item.href}
                className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col items-center text-center"
              >
                <div className="w-32 h-32 rounded-full overflow-hidden mb-6 border-4 border-white shadow-md group-hover:scale-105 transition-transform">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-brand-orange transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs font-semibold text-brand-gold mt-1 mb-3">
                  {item.subtitle}
                </p>
                <p className="text-sm text-gray-500 leading-relaxed line-clamp-3">
                  {item.desc}
                </p>
                <span className="mt-6 inline-flex items-center text-xs font-bold text-brand-orange group-hover:translate-x-1 transition-transform">
                  프로그램 안내 <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </span>
              </Link>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {programs.slice(3, 5).map((item, idx) => (
              <Link
                key={idx}
                href={item.href}
                className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left"
              >
                <div className="w-28 h-28 shrink-0 rounded-full overflow-hidden border-4 border-white shadow-md group-hover:scale-105 transition-transform">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-brand-orange transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs font-semibold text-brand-gold mt-1 mb-2">
                    {item.subtitle}
                  </p>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {item.desc}
                  </p>
                  <span className="mt-4 inline-flex items-center text-xs font-bold text-brand-orange group-hover:translate-x-1 transition-transform">
                    자세히 보기 <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Latest Insights / Blog Columns */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-sm font-bold text-brand-orange uppercase">
              Insights & Columns
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mt-1">
              사람과성장 심리 칼럼
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              연구 논문과 실제 임상 사례를 바탕으로 작성된 전문 심리 콘텐츠입니다.
            </p>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-orange hover:text-[#d44817] transition-colors"
          >
            전체 글 보기 ({postsData.length}편)
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {latestPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-lg transition-all flex flex-col group"
            >
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center justify-between text-xs text-gray-400 mb-3">
                  <span className="bg-gray-100 text-gray-600 px-2 py-0.5 rounded">
                    칼럼 #{post.id}
                  </span>
                  <time dateTime={post.date}>{post.date}</time>
                </div>
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-brand-orange transition-colors line-clamp-2 leading-snug mb-3">
                  <Link href={`/blog/${post.id}`}>
                    {post.title}
                  </Link>
                </h3>
                <div
                  className="text-sm text-gray-500 line-clamp-3 leading-relaxed mb-4 flex-grow"
                  dangerouslySetInnerHTML={{
                    __html: post.contentHtml
                      .replace(/<[^>]+>/g, ' ')
                      .replace(/\s+/g, ' ')
                      .substring(0, 160) + '...',
                  }}
                />
                <Link
                  href={`/blog/${post.id}`}
                  className="text-xs font-semibold text-brand-orange inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-transform"
                >
                  본문 읽기 <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 5. Location & Google Map */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Map Frame */}
            <div className="lg:col-span-7 h-[360px] lg:h-auto min-h-[350px] relative bg-gray-100">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3165.6794467414816!2d127.02837221196037!3d37.49189017194148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca1502738de7b%3A0xcefd1d02e99d9c52!2z7ISc7Jq47Yq567OE7IucIOqwleuCqOq1rCDqsJXrgqjrjIDroZwgMzIw!5e0!3m2!1sko!2skr!4v1770701129867!5m2!1sko!2skr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="사람과성장 코칭심리상담센터 위치"
                className="w-full h-full"
              />
            </div>

            {/* Info Side */}
            <div className="lg:col-span-5 p-8 lg:p-10 flex flex-col justify-center space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-brand-orange">
                  Location & Contact
                </span>
                <h3 className="text-2xl font-bold text-gray-900 mt-1">
                  오시는 길
                </h3>
                <p className="text-sm text-gray-500 mt-1">
                  사람과성장 코칭심리상담센터 강남서초본원
                </p>
              </div>

              <div className="space-y-4 text-sm text-gray-700">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-gray-900">주소</strong>
                    <span>서울 강남구 강남대로 320 (황화빌딩) 10층 1001, 1002호</span>
                    <span className="block text-xs text-gray-500 mt-0.5">
                      강남역(2호선/신분당선) 4번 출구 도보 5분 / 주차 지원
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-gray-900">상담 문의</strong>
                    <span>02-556-8291</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-gray-900">운영 시간</strong>
                    <span>월요일 - 토요일 : 09:00 ~ 22:00 (사전 예약제)</span>
                    <span className="block text-xs text-gray-500 mt-0.5">
                      일요일 및 법정 공휴일 휴무
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <a
                  href="https://naver.me/GSQTsIoF"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 bg-brand-orange text-white text-sm font-semibold rounded-lg hover:bg-[#e04f1c] transition-colors shadow-sm"
                >
                  <Calendar className="w-4 h-4" />
                  상담예약
                </a>
                <a
                  href="tel:02-556-8291"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 border border-gray-300 text-gray-700 text-sm font-semibold rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <Phone className="w-4 h-4 text-brand-orange" />
                  전화 문의: 02-556-8291
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
