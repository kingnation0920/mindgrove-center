import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: '성장코칭 | 사람과성장 코칭심리상담센터',
  description: '성장은 속도가 아니라 방향의 문제입니다. 당신의 잠재력을 깨워 진짜 성취로 바꾸는 실전형 파트너, 사람과성장 성장코칭.',
};

export default function CoachingPage() {
  const targets = [
    {
      image: '/images/364243475.png',
      text: '치유되어 이제는 실질적인 삶의 변화와 성취를 만들고 싶은 분',
    },
    {
      image: '/images/451437600.png',
      text: '자신의 잠재력을 발견하고 주도적인 삶의 지도를 그리고 싶은 분',
    },
    {
      image: '/images/589102637.png',
      text: '전문적인 피드백을 통해 멈추지 않는 성장을 지속하고 싶은 분',
    },
    {
      image: '/images/676808762.png',
      text: '내면의 확신을 현실의 구체적인 성과로 연결하고자 하는 분',
    },
  ];

  const processes = [
    {
      step: '01',
      title: '발견',
      desc: '검사 및 초기 코칭 진단',
      image: '/images/file_153470076.png',
    },
    {
      step: '02',
      title: '계획',
      desc: '코칭 횟수 및 세션 일정 조율, 목표설정, 계약금 입금',
      image: '/images/file_1775914433.png',
    },
    {
      step: '03',
      title: '도전',
      desc: '과감한 실행과 시행착오 점검, 방향에 맞는 성장',
      image: '/images/file_1234105122.png',
    },
    {
      step: '04',
      title: '결실',
      desc: '구체적 성과와 지속 가능성 공유.',
      image: '/images/file_709064839.png',
    },
  ];

  return (
    <div className="bg-white text-[#222222]">
      {/* 1. Header Section */}
      <section className="pt-20 pb-10 max-w-4xl mx-auto px-4 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#222222]">
          성장코칭
        </h1>
        <p className="mt-4 text-base sm:text-lg text-[#222222] font-normal">
          Empowerment: 삶의 비전을 세우고 힘차게 뻗기
        </p>
      </section>

      {/* 2. Main Circular Image */}
      <section className="py-6 flex justify-center">
        <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-full overflow-hidden shadow-sm border border-gray-150">
          <img
            src="/images/file_695295771.png"
            alt="성장코칭 대표 이미지"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* 3. Core Text */}
      <section className="py-8 max-w-3xl mx-auto px-4 text-center space-y-2 text-base sm:text-lg text-[#222222] font-normal leading-relaxed">
        <p className="font-medium text-xl text-gray-900">
          성장은 속도가 아니라 방향의 문제입니다.
        </p>
        <p>
          사람과성장은 당신의 잠재력을 깨워 진짜 성취로 바꾸는 실전형 파트너입니다.
        </p>
        <p>
          당신이 가진 무한한 힘을 스스로 발견하고 실행하도록, 가장 최적화된 성장의 길을 함께 만듭니다.
        </p>
      </section>

      {/* Divider */}
      <div className="flex justify-center py-6">
        <div className="w-[1px] h-14 bg-[#bbbbbb]"></div>
      </div>

      {/* 4. Target Audience Cards */}
      <section className="py-12 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {targets.map((tgt, idx) => (
            <div
              key={idx}
              className="bg-[#faf9f8] p-8 rounded-2xl border border-gray-150 flex flex-col items-center text-center hover:shadow-md transition-shadow"
            >
              <div className="w-24 h-24 mb-6 flex items-center justify-center">
                <img
                  src={tgt.image}
                  alt={`대상 ${idx + 1}`}
                  className="w-20 h-20 object-contain"
                />
              </div>
              <p className="text-[15px] font-medium text-[#222222] leading-relaxed text-left sm:text-center">
                {tgt.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="flex justify-center py-6">
        <div className="w-[1px] h-14 bg-[#bbbbbb]"></div>
      </div>

      {/* 5. Process Section */}
      <section className="py-12 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-medium text-center mb-16 text-[#222222]">
          성장코칭 프로세스: 비전과 실현의 여정
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {processes.map((proc, idx) => (
            <div
              key={idx}
              className="flex items-start gap-6 p-6 rounded-2xl bg-white border border-gray-150 shadow-sm"
            >
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden shrink-0 border border-gray-200 shadow-sm">
                <img
                  src={proc.image}
                  alt={proc.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-xl font-bold text-brand-orange">{proc.step}</span>
                  <h3 className="text-xl font-bold text-[#222222]">{proc.title}</h3>
                </div>
                <p className="text-sm sm:text-[15px] text-[#333333] leading-relaxed">
                  {proc.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="flex justify-center py-6">
        <div className="w-[1px] h-14 bg-[#bbbbbb]"></div>
      </div>

      {/* Bottom CTA */}
      <section className="py-16 bg-[#fcfbfa] border-t border-gray-200 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">
            삶의 주도적인 성장을 시작해보세요
          </h3>
          <p className="text-gray-600 text-sm sm:text-base mb-8">
            성장코칭은 1:1 맞춤형 세션으로 진행되며 사전 진단을 통해 최적화된 로드맵을 수립합니다.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:02-556-8291"
              className="px-6 py-3 bg-white border border-gray-300 rounded-full font-semibold text-gray-800 hover:border-brand-orange hover:text-brand-orange transition-colors"
            >
              코칭 문의: 02-556-8291
            </a>
            <Link
              href="/pricing"
              className="px-6 py-3 bg-brand-orange text-white rounded-full font-semibold hover:bg-[#e04f1c] transition-colors shadow-sm"
            >
              코칭 비용 및 안내 보기
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
