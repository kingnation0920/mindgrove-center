import React from 'react';
import Link from 'next/link';
import { Phone, Mail } from 'lucide-react';

export const metadata = {
  title: '비즈니스 컨설팅 | 사람과성장 코칭심리상담센터',
  description: '생존을 넘어, 비약적인 성장을 제안합니다. 800억 규모의 M&A를 성공시킨 실전가와 비즈니스의 새로운 판을 짜십시오.',
};

export default function ConsultingPage() {
  const services = [
    {
      title: 'HR 및 면접 교육',
      items: [
        '기업의 인재 선발 전문성 강화를 위한',
        '면접관 교육 및 가이드',
      ],
    },
    {
      title: '창업 및 경영전략',
      items: [
        '스타트업 비즈니스 모델 기획',
        '신사업 실행 전략 수립',
      ],
    },
    {
      title: 'AI 및 빅데이터 도입 전략',
      items: [
        '기업 맞춤형 AI 교육',
        '빅데이터 분석 서비스 개발',
      ],
    },
    {
      title: '마케팅 및 기획력 향상',
      items: [
        '데이터 기반 마케팅 전략',
        '실무 기획력 강화 프로세스',
      ],
    },
  ];

  return (
    <div className="bg-white text-[#222222]">
      {/* 1. Header Section */}
      <section className="pt-20 pb-10 max-w-4xl mx-auto px-4 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#222222]">
          비즈니스 컨설팅
        </h1>
        <p className="mt-4 text-base sm:text-lg text-[#222222] font-normal">
          Strategic Growth: 함께 이루는 거대한 숲, 조직의 성장
        </p>
      </section>

      {/* 2. Main Circular Image */}
      <section className="py-6 flex justify-center">
        <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-full overflow-hidden shadow-sm border border-gray-150">
          <img
            src="/images/file_1264118958.png"
            alt="비즈니스 컨설팅 대표 이미지"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* 3. Core Text */}
      <section className="py-8 max-w-3xl mx-auto px-4 text-center space-y-2 text-base sm:text-lg text-[#222222] font-normal leading-relaxed">
        <p className="font-medium text-xl text-gray-900">
          생존을 넘어, 비약적인 성장을 제안합니다.
        </p>
        <p>
          사람과성장은 단순한 이론에 그치지 않고, 기업의 실질적인 성과와 지속 가능한 시스템 구축을 돕습니다.
        </p>
        <p className="font-medium text-brand-orange">
          800억 규모의 M&A를 성공시킨 실전가와 비즈니스의 새로운 판을 짜십시오.
        </p>
      </section>

      {/* Divider */}
      <div className="flex justify-center py-6">
        <div className="w-[1px] h-14 bg-[#bbbbbb]"></div>
      </div>

      {/* 4. Four Core Solutions (2x2 Grid) */}
      <section className="py-12 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((srv, idx) => (
            <div
              key={idx}
              className="bg-[#faf9f8] p-8 rounded-2xl border border-gray-150 flex flex-col justify-start hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl sm:text-2xl font-bold text-[#222222] mb-4 pb-2 border-b border-gray-200">
                {srv.title}
              </h3>
              <div className="space-y-1 text-sm sm:text-base text-[#333333] leading-relaxed">
                {srv.items.map((item, i) => (
                  <p key={i}>{item}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="flex justify-center py-6">
        <div className="w-[1px] h-14 bg-[#bbbbbb]"></div>
      </div>

      {/* 5. Details & Contact Box (#eeeae7) */}
      <section className="py-12 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#eeeae7] rounded-2xl p-8 sm:p-12 shadow-sm grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left info */}
          <div className="space-y-3 text-center md:text-left border-b md:border-b-0 md:border-r border-gray-300 pb-6 md:pb-0 md:pr-8">
            <p className="text-base sm:text-lg text-[#222222] leading-relaxed font-normal">
              조직의 규모와 해결하고자 하는 과제의 범위에 따라
            </p>
            <p className="text-base sm:text-lg text-[#222222] leading-relaxed font-semibold">
              맞춤형 솔루션이 구성됩니다.
            </p>
            <p className="text-sm sm:text-base text-gray-600 pt-2">
              비즈니스 컨설팅은 <span className="font-semibold text-brand-orange">회기당 120분</span> 진행됩니다.
            </p>
          </div>

          {/* Right contacts */}
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h4 className="text-xl font-bold text-gray-900">
              비즈니스컨설팅 문의
            </h4>
            <div className="w-8 h-[2px] bg-brand-orange"></div>
            <div className="space-y-2 text-base text-gray-800">
              <a
                href="tel:02-566-8291"
                className="flex items-center gap-2 hover:text-brand-orange transition-colors font-semibold"
              >
                <Phone className="w-4 h-4 text-brand-orange" />
                T: 02-566-8291
              </a>
              <a
                href="mailto:sgcenter0123@gmail.com"
                className="flex items-center gap-2 hover:text-brand-orange transition-colors"
              >
                <Mail className="w-4 h-4 text-brand-orange" />
                E: sgcenter0123@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-[#fcfbfa] border-t border-gray-200 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">
            실질적인 성장을 위한 비즈니스 파트너
          </h3>
          <p className="text-gray-600 text-sm sm:text-base mb-8">
            경영진 및 조직의 핵심 과제를 진단하고 최적의 실행 전략을 제안합니다.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://talk.naver.com/ct/wkeai2e?frm=mnmb&frm=nmb_detail#nafullscreen"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-brand-orange text-white rounded-full font-semibold hover:bg-[#e04f1c] transition-colors shadow-sm"
            >
              컨설팅 상담 신청
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
