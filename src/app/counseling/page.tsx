import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: '심리상담 | 사람과성장 코칭심리상담센터',
  description: '잠시 흔들려도 괜찮습니다. 아픔을 덜어내는 단계를 넘어 다시 단단하게 뿌리 내리는 사람과성장 심리상담.',
};

export default function CounselingPage() {
  const signals = [
    {
      title: '낮은 자존감과 자기 비난',
      desc: '스스로를 끊임없이 검열하고 비난하며, 자신을 사랑하는 법을 몰라 대인관계에서 위축되거나 삶의 방향(진로/적성)을 잃어버린 분',
    },
    {
      title: '반복되는 관계의 갈등',
      desc: '배우자, 부모, 자녀 등 가족 간의 해묵은 감정이나 직장 동료 및 친구와의 관계에서 지속적으로 상처를 주고받으며 소통에 어려움을 겪는 분',
    },
    {
      title: '고기능 우울 및 번아웃',
      desc: '사회생활과 일상은 문제없이 해내고 있지만, 혼자 있을 때 깊은 우울감을 느끼거나 에너지가 고갈되어 아무것도 할 수 없는 무기력 상태인 분',
    },
    {
      title: '불안 및 강박',
      desc: '특정한 생각이나 걱정이 꼬리에 꼬리를 물어 일상적인 선택이 힘들고, 완벽주의나 불안감 때문에 심리적 고통을 겪고 있는 분',
    },
    {
      title: '생애 주기별 위기(양육/자립)',
      desc: '출산 후 겪는 산후 우울과 양육 스트레스, 혹은 이혼 후 나홀로 양육하며 방법과 지지를 얻고싶은 분, 다문화 배경이나 새로운 환경 속에서 적응 스트레스와 외로움을 느끼는 분',
    },
    {
      title: '경계선상 성인의 사회적 자립',
      desc: '대화의 숨은 의도를 파악하거나 복잡한 행정 업무를 처리하는 것이 버거워 위축된 분, 실생활에 적응하고 정서적으로 홀로 서고자 하는 분',
    },
  ];

  const processes = [
    {
      step: '01',
      title: '이해',
      desc: '사전검사 및 초기상담을 통해 마음상태를 섬세하게 파악합니다.',
      image: '/images/file_1789159245.png',
    },
    {
      step: '02',
      title: '안정',
      desc: '당신의 상황에 가장 적합한 상담사와 목표를 설정합니다. 상담 횟수와 일정을 조율하고 계약합니다.',
      image: '/images/file_140192496.png',
    },
    {
      step: '03',
      title: '변화',
      desc: '정기적인 심층상담을 통해 내면의 상처를 보듬고, 건강한 자기이해와 새로운 행동패턴을 만듭니다.',
      image: '/images/file_1745375317.png',
    },
    {
      step: '04',
      title: '통합',
      desc: '상담의 성과를 확인하고, 앞으로의 삶에서 스스로 마음을 관리하고 유지할 수 있는 힘을 얻습니다.',
      image: '/images/file_1220336054.png',
    },
  ];

  return (
    <div className="bg-white text-[#222222]">
      {/* 1. Header Section */}
      <section className="pt-20 pb-10 max-w-4xl mx-auto px-4 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#222222]">
          심리상담
        </h1>
        <p className="mt-4 text-base sm:text-lg text-[#222222] font-normal">
          Healing: 내면의 상처를 보듬고 뿌리를 단단하게
        </p>
      </section>

      {/* 2. Main Circular Image */}
      <section className="py-6 flex justify-center">
        <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-full overflow-hidden shadow-sm border border-gray-150">
          <img
            src="/images/file_243872132.png"
            alt="심리상담 대표 이미지"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* 3. Core Text */}
      <section className="py-8 max-w-3xl mx-auto px-4 text-center space-y-2 text-base sm:text-lg text-[#222222] font-normal leading-relaxed">
        <p>잠시 흔들려도 괜찮습니다.</p>
        <p>사람과성장은 당신의 뿌리에 물을주며 함께 가꾸어 나갑니다.</p>
        <p>아픔을 덜어내는 단계를 넘어, 다시 단단하게 뿌리 내리고 푸른 잎을 틔우는 힘을 기릅니다.</p>
      </section>

      {/* Divider */}
      <div className="flex justify-center py-6">
        <div className="w-[1px] h-14 bg-[#bbbbbb]"></div>
      </div>

      {/* 4. Signals: 마음이 당신에게 보내는 신호 */}
      <section className="py-12 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-medium text-center mb-14 text-[#222222]">
          마음이 당신에게 보내는 신호
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {signals.map((sig, idx) => (
            <div
              key={idx}
              className="bg-[#faf9f8] p-8 rounded-2xl border border-gray-150 flex flex-col justify-start hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-bold text-[#2b2b2b] mb-4 pb-2 border-b border-gray-200">
                {sig.title}
              </h3>
              <p className="text-sm sm:text-[15px] text-[#333333] leading-relaxed">
                {sig.desc}
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
          심리상담 프로세스: 치유와 회복의 여정
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
            따뜻한 심리적 안전감 속에서 시작하세요
          </h3>
          <p className="text-gray-600 text-sm sm:text-base mb-8">
            보건복지부·성평등가족부 공인 1급 전문 상담사가 1:1 맞춤으로 함께합니다.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:02-566-8291"
              className="px-6 py-3 bg-white border border-gray-300 rounded-full font-semibold text-gray-800 hover:border-brand-orange hover:text-brand-orange transition-colors"
            >
              상담 문의: 02-566-8291
            </a>
            <a
              href="https://booking.naver.com"
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
