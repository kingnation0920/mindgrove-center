'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function AboutPage() {
  const [activeSlide, setActiveSlide] = useState(0);

  const spaces = [
    {
      title: '카운터',
      desc: '예약 및 수납(제로페이, 애플페이, 카카오페이, 네이버페이)을 할 수 있습니다.',
      image: '/images/file_1721728181.png',
    },
    {
      title: '대기실',
      desc: '고전음악을 들으며 여유롭게 대기할 수 있습니다.',
      image: '/images/file_1196679702.png',
    },
    {
      title: '가족상담실',
      desc: '마주 앉아, 서로를 깊이 이해하며 행복한 변화를 시작하는 곳입니다.',
      image: '/images/file_654338939.png',
    },
    {
      title: '단체 및 프로그램실',
      desc: '마주 앉아, 서로를 깊이 이해하며 행복한 변화를 시작하는 곳입니다.',
      image: '/images/file_129274076.png',
    },
    {
      title: '놀이실',
      desc: '마음껏 표현하고 신나게 움직이며, 마음 근육이 튼튼해지는 즐거운 놀이실입니다.',
      image: '/images/file_1617499681.png',
    },
    {
      title: '놀이실 (상세)',
      desc: '마음껏 표현하고 신나게 움직이며, 마음 근육이 튼튼해지는 즐거운 놀이실입니다.',
      image: '/images/file_1075683202.png',
    },
    {
      title: '놀이실 (교구)',
      desc: '마음껏 표현하고 신나게 움직이며, 마음 근육이 튼튼해지는 즐거운 놀이실입니다.',
      image: '/images/file_550634727.png',
    },
    {
      title: '대기실에서 본 풍경',
      desc: '도심이 한눈에 들어오는 특별한 시야와 함께, 세상을 향해 자신 있게 나아갈 힘을 얻는 곳입니다.',
      image: '/images/file_8817224.png',
    },
    {
      title: '대기실에서 본 풍경 (창가)',
      desc: '도심이 한눈에 들어오는 특별한 시야와 함께, 세상을 향해 자신 있게 나아갈 힘을 얻는 곳입니다.',
      image: '/images/file_1631269805.png',
    },
    {
      title: '상담실',
      desc: '한 사람을 일으켜 함께 성장해가는 아늑한 상담실입니다.',
      image: '/images/file_1106229518.png',
    },
  ];

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % spaces.length);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + spaces.length) % spaces.length);
  };

  return (
    <div className="bg-white text-[#222222]">
      {/* 1. Header Section */}
      <section className="pt-20 pb-12 max-w-5xl mx-auto px-4 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#222222]">
          사람과성장은
        </h1>
        <div className="mt-8 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed text-[#222222] font-normal space-y-2">
          <p>
            치유와 더불어 실질적 변화를 만드는, 최고 수준의 성장 파트너가 함께합니다.
          </p>
          <p>
            사람과성장은 보건복지부와 성평등가족부 공인 1급 자격을 보유한 심리 전문가와,
          </p>
          <p>
            수백억 규모의 기업 매각 성과를 일궈낸 비즈니스 AI 컨설팅 전문가가 협업하는
          </p>
          <p>
            독보적인 통합 케어 시스템을 지향합니다.
          </p>
        </div>
      </section>

      {/* 2. Individual Support & Corporate Support (2 Columns) */}
      <section className="py-12 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-center">
          {/* 개인지원 */}
          <div className="flex flex-col items-center">
            <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-full overflow-hidden shadow-sm border border-gray-150 mb-6 flex-shrink-0">
              <img
                src="/images/file_1707950921.png"
                alt="개인지원"
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="text-2xl font-semibold mb-4 text-[#222222]">개인지원</h2>
            <div className="text-[15px] leading-relaxed text-[#222222] space-y-1">
              <p>정교한 심리검사를 통한 객관적 진단,</p>
              <p>내면의 회복을 돕는 심리상담,</p>
              <p>잠재력을 실현하는 성장코칭을 통해</p>
              <p>주도적인 삶을 지원합니다.</p>
            </div>
          </div>

          {/* 기업지원 */}
          <div className="flex flex-col items-center">
            <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-full overflow-hidden shadow-sm border border-gray-150 mb-6 flex-shrink-0">
              <img
                src="/images/file_1166133418.png"
                alt="기업지원"
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="text-2xl font-semibold mb-4 text-[#222222]">기업지원</h2>
            <div className="text-[15px] leading-relaxed text-[#444444] space-y-1">
              <p>개인의 안녕이 조직의 생산성이 되는</p>
              <p>기업 심리(EAP), 조직의 정체성을 만들고</p>
              <p>체질을 개선하여 발전하는 비즈니스 컨설팅을 수행합니다.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="flex justify-center py-6">
        <div className="w-[1px] h-14 bg-[#bbbbbb]"></div>
      </div>

      {/* 3. Program Introduction */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-normal text-center mb-16 text-[#222222]">
          프로그램 소개
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 items-start">
          {/* 1. 심리검사 */}
          <div className="flex flex-col items-center text-center group">
            <div className="w-20 h-20 mb-4 flex items-center justify-center">
              <img src="/images/2003251807.png" alt="심리검사 아이콘" className="w-16 h-16 object-contain" />
            </div>
            <h3 className="text-xl font-bold text-[#1d1d1d] mb-4">심리검사</h3>
            <div className="text-[13px] text-[#222222] leading-relaxed text-left space-y-1.5 w-full bg-gray-50/50 p-4 rounded-xl border border-gray-100 min-h-[220px]">
              <p className="font-semibold text-brand-orange">100% 예약제 실시</p>
              <p>국내 종합병원과 동일한 검사 구성</p>
              <p>전문 임상심리사의 정밀한 검사</p>
              <p>임상적 통찰과 신속한 결과분석</p>
              <p>상담, 코칭, 컨설팅 맞춤형 연계 심층 해석상담 제공</p>
            </div>
          </div>

          {/* 2. 심리상담 */}
          <div className="flex flex-col items-center text-center group">
            <div className="w-20 h-20 mb-4 flex items-center justify-center">
              <img src="/images/2140900460.png" alt="심리상담 아이콘" className="w-16 h-16 object-contain" />
            </div>
            <h3 className="text-xl font-bold text-[#1d1d1d] mb-4">심리상담</h3>
            <div className="text-[13px] text-[#222222] leading-relaxed text-left space-y-1.5 w-full bg-gray-50/50 p-4 rounded-xl border border-gray-100 min-h-[220px]">
              <p className="font-semibold text-brand-orange">[1:1 맞춤 진행]</p>
              <p>사전검사를 통한 최적의 상담계획 수립</p>
              <p>진실된 상담관계 기반한 이해와 공감</p>
              <p>숙련된 전문 임상심리사 배치</p>
              <p>주기적인 상태 체크 지속적인 변화 피드백</p>
              <p>심층적 분석을 통한 온전한 회복 지원</p>
            </div>
          </div>

          {/* 3. 성장코칭 */}
          <div className="flex flex-col items-center text-center group">
            <div className="w-20 h-20 mb-4 flex items-center justify-center">
              <img src="/images/80610937.png" alt="성장코칭 아이콘" className="w-16 h-16 object-contain" />
            </div>
            <h3 className="text-xl font-bold text-[#1d1d1d] mb-4">성장코칭</h3>
            <div className="text-[13px] text-[#222222] leading-relaxed text-left space-y-1.5 w-full bg-gray-50/50 p-4 rounded-xl border border-gray-100 min-h-[220px]">
              <p className="font-semibold text-brand-orange">[1:1 맞춤 진행]</p>
              <p>사전 진단을 통한 개별화된 성장 로드맵</p>
              <p>잠재력을 깨우고 성취를 돕는 맞춤 코칭</p>
              <p>내면의 확신을 실질적인 삶의 성과로 연결</p>
              <p>주기적인 목표 달성 체크 및 전문적 피드백</p>
              <p>필요시 심리상담 및 기업솔루션 즉각 연계</p>
              <p>지속적 변화 관리 지원</p>
            </div>
          </div>

          {/* 4. 기업심리(EAP) */}
          <div className="flex flex-col items-center text-center group">
            <div className="w-20 h-20 mb-4 flex items-center justify-center">
              <img src="/images/218271750.png" alt="기업심리(EAP) 아이콘" className="w-16 h-16 object-contain" />
            </div>
            <h3 className="text-xl font-bold text-[#1d1d1d] mb-4">기업심리(EAP)</h3>
            <div className="text-[13px] text-[#222222] leading-relaxed text-left space-y-1.5 w-full bg-gray-50/50 p-4 rounded-xl border border-gray-100 min-h-[220px]">
              <p className="font-semibold text-brand-orange">[1:1 / 소그룹 진행]</p>
              <p>직급에 맞는 솔루션 제공 전문 임상심리사를 통한 전문 분석</p>
              <p>대면/비대면 맞춤 진행</p>
              <p>예방부터 사후관리 단계별 지원</p>
              <p>지속적 관리 및 교육</p>
            </div>
          </div>

          {/* 5. 비즈니스 컨설팅 */}
          <div className="flex flex-col items-center text-center group">
            <div className="w-20 h-20 mb-4 flex items-center justify-center">
              <img src="/images/2003251807.png" alt="비즈니스 컨설팅 아이콘" className="w-16 h-16 object-contain" />
            </div>
            <h3 className="text-xl font-bold text-[#1d1d1d] mb-4">비즈니스 컨설팅</h3>
            <div className="text-[13px] text-[#222222] leading-relaxed text-left space-y-1.5 w-full bg-gray-50/50 p-4 rounded-xl border border-gray-100 min-h-[220px]">
              <p className="font-semibold text-brand-orange">[경영진 맞춤]</p>
              <p>AI 및 빅데이터 도입 전략</p>
              <p>창업 및 경영전략</p>
              <p>마케팅 및 기획력 향상</p>
              <p>HR 및 면접 교육</p>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="flex justify-center py-6">
        <div className="w-[1px] h-14 bg-[#bbbbbb]"></div>
      </div>

      {/* 4. MEMBERS Section */}
      <section className="py-12 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8 text-[#222222] tracking-wider">
          MEMBERS
        </h2>

        {/* Philosophy Callout Box */}
        <div className="bg-[#e4ebe3] py-14 px-6 sm:px-12 rounded-2xl text-center mb-16 shadow-sm">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#404040] leading-snug font-medium mb-6">
            "우리는 가장 깊은 곳에서 마음을 연구하고<br />
            가장 치열한 현장에서 성장을 증명해 왔습니다."
          </h3>
          <p className="text-sm sm:text-base text-[#222222] leading-relaxed max-w-3xl mx-auto">
            단순히 마음의 위로에 그치지 않고, 심리학적 통찰과 비즈니스 코칭을 결합하여<br className="hidden sm:inline" />
            개인의 삶과 조직의 성장에 가장 효율적이고 실천적인 해답을 제시하는 동반자가 되겠습니다.
          </p>
        </div>

        {/* Directors Profiles */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {/* 김기현 센터장 */}
          <div className="bg-white border border-gray-150 rounded-2xl p-6 sm:p-8 shadow-sm flex flex-col items-center text-center">
            <div className="w-56 h-72 rounded-xl overflow-hidden shadow-sm mb-6 border border-gray-100 flex-shrink-0">
              <img
                src="/images/file_641093135.png"
                alt="김기현 센터장"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <h3 className="text-2xl font-bold text-[#333333] mb-4">김기현 센터장</h3>
            <ul className="text-[14px] text-[#222222] space-y-2 text-left leading-relaxed w-full">
              <li className="flex items-start gap-2">
                <span className="text-brand-orange shrink-0">•</span>
                <span>한양대학교 경영대학 비즈니스인포메틱스(빅데이터) 박사 수료</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-orange shrink-0">•</span>
                <span>서울대학교 생활과학대학 시니어산업 최고위 과정 이수</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-orange shrink-0">•</span>
                <span>그랑알파컨설팅 대표</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-orange shrink-0">•</span>
                <span>IRIS, KEPCO, IITP 등 평가위원</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-orange shrink-0">•</span>
                <span>라이프앤바이오 공동창업자 (글로벌 사모펀드 800억 매각 성과)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-orange shrink-0">•</span>
                <span>농림수산식품교육문화정보원 AI 푸드테크 전문인력양성교육 및 심사</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-orange shrink-0">•</span>
                <span>한양대학교 고령산업융합학과 IAB 자문교수</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-orange shrink-0">•</span>
                <span>스마트인재개발원 인공지능 융합서비스, 빅데이터 분석서비스 개발자 멘토</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-orange shrink-0">•</span>
                <span>AI 비즈니스 모델 기획 및 디지털 전환 전략 컨설턴트</span>
              </li>
            </ul>
          </div>

          {/* 김민경 센터장 */}
          <div className="bg-white border border-gray-150 rounded-2xl p-6 sm:p-8 shadow-sm flex flex-col items-center text-center">
            <div className="w-56 h-72 rounded-xl overflow-hidden shadow-sm mb-6 border border-gray-100 flex-shrink-0">
              <img
                src="/images/file_116062032.png"
                alt="김민경 센터장"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <h3 className="text-2xl font-bold text-[#333333] mb-4">김민경 센터장</h3>
            <ul className="text-[14px] text-[#222222] space-y-2 text-left leading-relaxed w-full">
              <li className="flex items-start gap-2">
                <span className="text-brand-orange shrink-0">•</span>
                <span>명지대학교 대학원 코칭심리학 박사 과정</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-orange shrink-0">•</span>
                <span>명지대학교 대학원 상담심리 석사 졸업</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-orange shrink-0">•</span>
                <span>성신여자대학교 음악대학 작곡과 졸업</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-orange shrink-0">•</span>
                <span className="font-semibold text-gray-900">보건복지부 임상심리사 1급</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-orange shrink-0">•</span>
                <span className="font-semibold text-gray-900">보건복지부 사회복지사 1급</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-orange shrink-0">•</span>
                <span className="font-semibold text-gray-900">성평등가족부 청소년상담사 2급</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-orange shrink-0">•</span>
                <span>강동교육복지센터 부모전문위촉상담</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-orange shrink-0">•</span>
                <span>고양시청소년재단 학업중단숙려 전문상담</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-orange shrink-0">•</span>
                <span>명지대학교 통합치료센터 부모 전문상담</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-orange shrink-0">•</span>
                <span>마케팅 법인 기획 및 실무 총괄</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-orange shrink-0">•</span>
                <span>각종 법인 심리검사 및 심리상담</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="flex justify-center py-6">
        <div className="w-[1px] h-14 bg-[#bbbbbb]"></div>
      </div>

      {/* 5. Center Space Gallery Section */}
      <section className="py-12 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-normal text-center mb-10 text-[#222222]">
          사람과성장 공간소개
        </h2>

        {/* Carousel Display */}
        <div className="relative bg-gray-50 rounded-2xl overflow-hidden border border-gray-200 shadow-md">
          <div className="aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden relative">
            <img
              src={spaces[activeSlide].image}
              alt={spaces[activeSlide].title}
              className="w-full h-full object-cover transition-opacity duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6 sm:p-10 text-white">
              <span className="text-xs uppercase tracking-widest text-brand-orange font-bold mb-1">
                SPACE {activeSlide + 1} / {spaces.length}
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold mb-2">
                {spaces[activeSlide].title}
              </h3>
              <p className="text-sm sm:text-base text-gray-200 max-w-2xl leading-relaxed">
                {spaces[activeSlide].desc}
              </p>
            </div>
          </div>

          {/* Nav Controls */}
          <button
            onClick={prevSlide}
            aria-label="이전 공간 보기"
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/80 hover:bg-white text-gray-800 flex items-center justify-center shadow-lg transition-all focus:outline-none"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            aria-label="다음 공간 보기"
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/80 hover:bg-white text-gray-800 flex items-center justify-center shadow-lg transition-all focus:outline-none"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Thumbnails */}
        <div className="grid grid-cols-5 sm:grid-cols-10 gap-2 mt-4">
          {spaces.map((sp, idx) => (
            <button
              key={idx}
              onClick={() => setActiveSlide(idx)}
              className={`aspect-[4/3] rounded-lg overflow-hidden border-2 transition-all ${
                activeSlide === idx ? 'border-brand-orange scale-105 shadow-md' : 'border-transparent opacity-60 hover:opacity-100'
              }`}
            >
              <img src={sp.image} alt={sp.title} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      </section>

      {/* CTA Footer Section */}
      <section className="py-16 bg-[#fcfbfa] border-t border-gray-200 mt-12 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">
            함께 성장할 준비가 되셨나요?
          </h3>
          <p className="text-gray-600 text-sm sm:text-base mb-8">
            사람과성장은 100% 사전 예약제로 프라이빗하고 편안한 상담 환경을 제공합니다.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:02-556-8291"
              className="px-6 py-3 bg-white border border-gray-300 rounded-full font-semibold text-gray-800 hover:border-brand-orange hover:text-brand-orange transition-colors"
            >
              문의전화 02-556-8291
            </a>
            <a
              href="https://naver.me/GSQTsIoF"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-brand-orange text-white rounded-full font-semibold hover:bg-[#e04f1c] transition-colors shadow-sm"
            >
              네이버 예약 바로가기
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
