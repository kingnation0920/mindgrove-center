import React from 'react';
import Link from 'next/link';
import { Target, Compass, Zap, Trophy, Phone, ArrowRight } from 'lucide-react';

export const metadata = {
  title: '성장코칭 | 사람과성장 코칭심리상담센터',
  description: '커리어 전환, 리더십 코칭, 라이프 코칭. 내면의 잠재력을 깨워 실질적인 삶의 변화와 성취를 이끄는 1:1 파트너십.',
};

export default function CoachingPage() {
  const targets = [
    '치유를 넘어 이제는 실질적인 삶의 변화와 성취를 만들고 싶은 분',
    '자신의 고유한 잠재력과 강점을 발견하고 주도적인 삶의 지도를 그리고 싶은 분',
    '이직, 전직, 창업 등 커리어의 중요한 전환점에서 명확한 방향키가 필요한 분',
    '전문적인 피드백과 코칭을 통해 지속 가능한 동기부여와 성장을 이어가고 싶은 분',
  ];

  const steps = [
    { step: '01', title: '발견', desc: '기질/강점 검사 및 초기 진단을 통해 진짜 원하는 목표와 내면의 장벽을 규명합니다.' },
    { step: '02', title: '계획', desc: '목표 달성을 위한 맞춤형 실행 전략을 수립하고 구체적인 세션 로드맵을 확정합니다.' },
    { step: '03', title: '도전', desc: '실행 과정에서의 시행착오를 점검하고 피드백을 통해 막힘 없는 성장의 흐름을 만듭니다.' },
    { step: '04', title: '결실', desc: '구체적인 성과를 내재화하고 앞으로도 스스로 나아갈 수 있는 지속 가능성을 완성합니다.' },
  ];

  return (
    <div className="bg-white">
      {/* Banner */}
      <section className="bg-gradient-to-b from-[#fcfbfa] to-white border-b border-gray-150 py-20 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <span className="text-xs font-bold text-brand-orange uppercase tracking-widest">
            GROWTH COACHING
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mt-3 font-serif">
            성장코칭
          </h1>
          <p className="text-gray-500 text-sm sm:text-base mt-4 max-w-2xl mx-auto leading-relaxed">
            Empowerment: 성장은 속도가 아니라 방향의 문제입니다. 삶의 비전을 세우고 주도적으로 뻗어나가는 여정
          </p>
        </div>
      </section>

      <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Quote */}
        <div className="bg-orange-50/50 border border-orange-200/60 rounded-2xl p-8 sm:p-10 text-center max-w-3xl mx-auto">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
            "잠재력을 깨워 진짜 성취로 바꾸는 실전형 파트너"
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            사람과성장은 단순한 멘토링이 아닌, 당신이 가진 무한한 힘을 스스로 발견하고 실행하도록 돕는 전문 코칭 파트너입니다. 가장 최적화된 성장의 길을 함께 엽니다.
          </p>
        </div>

        {/* Target Audience */}
        <div className="space-y-6">
          <div className="text-center">
            <span className="text-xs font-bold text-brand-orange uppercase">WHO IS THIS FOR</span>
            <h3 className="text-2xl font-bold text-gray-900 mt-1">이런 분들께 권해드립니다</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {targets.map((text, idx) => (
              <div key={idx} className="flex items-start gap-3.5 p-5 bg-[#fcfbfa] border border-gray-200/80 rounded-xl">
                <Target className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />
                <span className="text-sm text-gray-700 font-medium leading-relaxed">{text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Process */}
        <div className="space-y-10 pt-6">
          <div className="text-center">
            <span className="text-xs font-bold text-brand-orange uppercase">PROCESS</span>
            <h3 className="text-2xl font-bold text-gray-900 mt-1">성장코칭 프로세스</h3>
            <p className="text-xs text-gray-500 mt-1">비전 수립부터 실질적인 결과 창출까지 4단계로 전개됩니다.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s, idx) => (
              <div key={idx} className="bg-white border border-gray-200 rounded-2xl p-6 relative flex flex-col justify-between shadow-sm">
                <div>
                  <span className="text-2xl font-black text-brand-gold/40 block mb-2">{s.step}</span>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{s.title}</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="p-8 bg-gray-50 rounded-2xl border border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-lg font-bold text-gray-900">1:1 코칭 세션 문의</h4>
            <p className="text-xs text-gray-500 mt-1">개인 코칭 및 임원/리더십 코칭 맞춤 설계가 가능합니다.</p>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="tel:02-566-8291"
              className="inline-flex items-center gap-2 px-5 py-3 bg-brand-orange text-white text-sm font-semibold rounded-xl hover:bg-[#e04f1c] transition-colors shadow-sm"
            >
              <Phone className="w-4 h-4" />
              02-566-8291 문의
            </a>
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 px-5 py-3 border border-gray-300 bg-white text-gray-700 text-sm font-semibold rounded-xl hover:bg-gray-50 transition-colors"
            >
              비용 안내
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
