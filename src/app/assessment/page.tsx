import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: '심리검사 | 사람과성장 코칭심리상담센터',
  description: '정교한 진단은 막연한 위로보다 강력합니다. 공인된 전문 임상심리사가 직접 시행하고 해석하는 사람과성장 심리검사.',
};

export default function AssessmentPage() {
  const tests = [
    {
      title: '성격검사',
      image: '/images/file_785680419.png',
      items: [
        'MMPI-2(성인 다면적 인성검사)',
        'mmpi-a(청소년 다면적 인성검사)',
        'TCI(기질 및 성격검사)',
        'SCT(문장완성검사)',
      ],
    },
    {
      title: '지능검사',
      image: '/images/file_230626328.png',
      items: [
        'K-WAIS-4(성인 지능검사)',
        'K-WISC-5(아동청소년 지능검사)',
        'BGT(시각-운동 통합 및 뇌 손상검사)',
      ],
    },
    {
      title: '추가검사',
      image: '/images/file_1853070717.png',
      items: [
        'Rorschach(잉크반점검사)',
        'HTP(집-나무-사람 검사)',
        'TAT(대인관계 및 욕구 역동)',
        'KFD(동적가족화검사)',
      ],
    },
    {
      title: '특화검사',
      image: '/images/file_1310720734.png',
      items: [
        'PAT(부모양육태도검사)',
        'K-PSI(부모양육스트레스검사)',
        'K-CBCL(아동청소년 행동평가척도)',
        'Strong(흥미검사)',
        'Holland(적성탐색검사)',
        'U&I(학습성격/진로검사)',
        'NEO-PI-R(5요인 성격검사)',
        'CAT(종합주의력검사) 등',
      ],
    },
  ];

  return (
    <div className="bg-white text-[#222222]">
      {/* 1. Header Section */}
      <section className="pt-20 pb-10 max-w-4xl mx-auto px-4 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#222222]">
          심리검사
        </h1>
        <p className="mt-4 text-base sm:text-lg text-[#222222] font-normal">
          Discovery: 잠재력을 발견하는 첫걸음
        </p>
      </section>

      {/* 2. Main Circular Image */}
      <section className="py-6 flex justify-center">
        <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-full overflow-hidden shadow-sm border border-gray-150">
          <img
            src="/images/file_741930315.png"
            alt="심리검사 대표 이미지"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* 3. Core Philosophy Text */}
      <section className="py-8 max-w-3xl mx-auto px-4 text-center">
        <h2 className="text-lg sm:text-xl font-medium text-[#222222] leading-relaxed">
          정교한 진단은 막연한 위로보다 강력합니다.
        </h2>
        <p className="mt-3 text-sm sm:text-base text-[#444444] leading-relaxed font-normal">
          사람과성장의 심리검사는 단순히 개인을 진단하는 것을 넘어, 당신이 가진 고유한 잠재력을 발견하고<br className="hidden sm:inline" />
          성장을 가로막는 장애물을 객관적으로 파악하여 비로소 첫 싹을 틔울 수 있게 돕습니다.
        </p>
      </section>

      {/* Divider */}
      <div className="flex justify-center py-6">
        <div className="w-[1px] h-14 bg-[#bbbbbb]"></div>
      </div>

      {/* 4. Four Test Categories (2x2 Grid) */}
      <section className="py-12 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {tests.map((t, idx) => (
            <div
              key={idx}
              className="flex items-start gap-6 p-6 rounded-2xl bg-[#faf9f8] border border-gray-150 hover:shadow-md transition-shadow"
            >
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden shrink-0 border border-gray-200 shadow-sm bg-white">
                <img
                  src={t.image}
                  alt={t.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-xl sm:text-2xl font-bold text-[#222222] mb-3">
                  {t.title}
                </h3>
                <ul className="space-y-1.5 text-sm sm:text-[15px] text-[#333333] leading-relaxed">
                  {t.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <span className="text-brand-orange shrink-0">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Gold / Olive Banner Section (#a89a59) */}
      <section className="bg-[#a89a59] text-white py-16 px-4 sm:px-6 lg:px-8 mt-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center sm:text-left">
            {/* 1 */}
            <div className="space-y-3 p-4">
              <h3 className="text-xl font-medium tracking-tight border-b border-white/30 pb-2">
                공인된 전문가의 정밀한 분석
              </h3>
              <p className="text-sm text-white/95 leading-relaxed pt-2">
                전문 임상심리사가 직접 검사를 시행하고 해석합니다.
              </p>
            </div>

            {/* 2 */}
            <div className="space-y-3 p-4">
              <h3 className="text-xl font-medium tracking-tight border-b border-white/30 pb-2">
                내담자 중심의 경청
              </h3>
              <p className="text-sm text-white/95 leading-relaxed pt-2">
                불필요한 추가 검사를 지양합니다. 데이터에 치우치지 않고 당신의 진술 속 고유한 삶의 이야기에 먼저 집중합니다.
              </p>
            </div>

            {/* 3 */}
            <div className="space-y-3 p-4">
              <h3 className="text-xl font-medium tracking-tight border-b border-white/30 pb-2">
                통합적 자기 이해
              </h3>
              <p className="text-sm text-white/95 leading-relaxed pt-2">
                현재의 심리적 상태는 물론, 미래의 성장 가능성을 통합적으로 분석하여 입체적인 자기 이해와 방향성을 함께 그립니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-[#fcfbfa] border-t border-gray-200 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">
            나를 객관적으로 이해하는 첫걸음
          </h3>
          <p className="text-gray-600 text-sm sm:text-base mb-8">
            심리검사는 100% 예약제로 진행되며, 검사 종류에 따라 일정과 비용이 맞춤 조율됩니다.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:02-566-8291"
              className="px-6 py-3 bg-white border border-gray-300 rounded-full font-semibold text-gray-800 hover:border-brand-orange hover:text-brand-orange transition-colors"
            >
              검사 문의: 02-566-8291
            </a>
            <Link
              href="/pricing"
              className="px-6 py-3 bg-brand-orange text-white rounded-full font-semibold hover:bg-[#e04f1c] transition-colors shadow-sm"
            >
              비용 및 이용안내 확인하기
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
