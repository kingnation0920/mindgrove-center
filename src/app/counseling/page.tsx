import React from 'react';
import Link from 'next/link';
import { Heart, AlertCircle, Phone, ArrowRight, CheckCircle } from 'lucide-react';

export const metadata = {
  title: '심리상담 | 사람과성장 코칭심리상담센터',
  description: '1:1 개인 심리상담, 부부·가족 갈등 상담, 불안·우울·번아웃 케어. 1급 전문가의 깊이 있는 치유를 경험하세요.',
};

export default function CounselingPage() {
  const concerns = [
    {
      title: '낮은 자존감과 자기 비난',
      desc: '스스로를 끊임없이 검열하고 비난하며, 자신을 사랑하는 법을 몰라 대인관계에서 위축되거나 삶의 방향을 잃어버린 분',
    },
    {
      title: '반복되는 관계의 갈등',
      desc: '배우자, 부모, 자녀 등 가족 간의 해묵은 감정이나 직장 동료와의 관계에서 지속적으로 상처를 주고받으며 소통에 어려움을 겪는 분',
    },
    {
      title: '불안 및 강박, 공황',
      desc: '특정한 생각이나 걱정이 꼬리를 물어 일상적인 선택이 힘들고, 완벽주의나 미래에 대한 불안감 때문에 심리적 고통을 겪는 분',
    },
    {
      title: '생애 주기별 위기 & 번아웃',
      desc: '출산 후 겪는 산후 우울과 양육 스트레스, 혹은 치열한 업무 속에서 에너지가 모두 소진되어 무기력에 빠진 직장인 및 리더',
    },
  ];

  const steps = [
    { step: '01', title: '이해', desc: '사전 검사 및 초기 상담을 통해 현재 마음 상태와 핵심 갈등을 섬세하게 파악합니다.' },
    { step: '02', title: '안정', desc: '당신의 상황에 가장 적합한 전담 상담사와 안전한 라포를 형성하고 구체적인 상담 목표를 설정합니다.' },
    { step: '03', title: '통찰', desc: '반복되는 부정적 감정 패턴과 신념을 마주하고, 억눌린 감정을 건강하게 표현하고 해소합니다.' },
    { step: '04', title: '성장', desc: '새로운 소통 방식과 대처 기술을 일상에 적용하며, 스스로를 지키는 단단한 내면의 힘을 기릅니다.' },
  ];

  return (
    <div className="bg-white">
      {/* Banner */}
      <section className="bg-gradient-to-b from-[#fcfbfa] to-white border-b border-gray-150 py-20 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <span className="text-xs font-bold text-brand-orange uppercase tracking-widest">
            PSYCHOLOGICAL COUNSELING
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mt-3 font-serif">
            심리상담
          </h1>
          <p className="text-gray-500 text-sm sm:text-base mt-4 max-w-2xl mx-auto leading-relaxed">
            Healing: 잠시 흔들려도 괜찮습니다. 내면의 상처를 보듬고 단단하게 뿌리내리는 치유의 여정
          </p>
        </div>
      </section>

      <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Quote */}
        <div className="bg-orange-50/50 border border-orange-200/60 rounded-2xl p-8 sm:p-10 text-center max-w-3xl mx-auto">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
            "아픔을 덜어내는 단계를 넘어, 다시 푸른 잎을 틔웁니다."
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            사람과성장은 당신의 뿌리에 물을 주며 함께 가꾸어 나갑니다. 혼자서 감당하기 버거웠던 마음의 무게를 내려놓고, 온전한 나를 되찾는 따뜻한 연대를 시작하세요.
          </p>
        </div>

        {/* Concerns Grid */}
        <div className="space-y-8">
          <div className="text-center">
            <span className="text-xs font-bold text-brand-orange uppercase">SIGNAL</span>
            <h3 className="text-2xl font-bold text-gray-900 mt-1">마음이 당신에게 보내는 신호</h3>
            <p className="text-xs text-gray-500 mt-1">이런 고민이 있으시다면 전문 상담사의 도움을 받을 때입니다.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {concerns.map((c, idx) => (
              <div key={idx} className="bg-[#fcfbfa] border border-gray-200/80 rounded-2xl p-6 hover:border-brand-orange/40 transition-colors">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-orange-100 text-brand-orange rounded-lg shrink-0 mt-0.5">
                    <AlertCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-base mb-2">{c.title}</h4>
                    <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">{c.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Process Steps */}
        <div className="space-y-10 pt-6">
          <div className="text-center">
            <span className="text-xs font-bold text-brand-orange uppercase">PROCESS</span>
            <h3 className="text-2xl font-bold text-gray-900 mt-1">심리상담 프로세스</h3>
            <p className="text-xs text-gray-500 mt-1">신뢰와 안전을 기반으로 체계적인 4단계 회복 로드맵을 제공합니다.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s, idx) => (
              <div key={idx} className="bg-white border border-gray-200 rounded-2xl p-6 relative flex flex-col justify-between shadow-sm">
                <div>
                  <span className="text-2xl font-black text-brand-orange/30 block mb-2">{s.step}</span>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{s.title}</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Banner */}
        <div className="p-8 bg-gray-50 rounded-2xl border border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-lg font-bold text-gray-900">1:1 맞춤 상담 예약</h4>
            <p className="text-xs text-gray-500 mt-1">회기당 50분 진행되며, 100% 프라이빗 예약제로 안전하게 진행됩니다.</p>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="tel:02-566-8291"
              className="inline-flex items-center gap-2 px-5 py-3 bg-brand-orange text-white text-sm font-semibold rounded-xl hover:bg-[#e04f1c] transition-colors shadow-sm"
            >
              <Phone className="w-4 h-4" />
              02-566-8291 상담 문의
            </a>
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 px-5 py-3 border border-gray-300 bg-white text-gray-700 text-sm font-semibold rounded-xl hover:bg-gray-50 transition-colors"
            >
              이용안내
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
