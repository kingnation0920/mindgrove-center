import React from 'react';
import Link from 'next/link';
import { Sparkles, FileText, CheckCircle2, Phone, Calendar, ArrowRight } from 'lucide-react';

export const metadata = {
  title: '심리검사 | 사람과성장 코칭심리상담센터',
  description: '종합심리검사, TCI 기질 및 성격검사, MMPI-2, K-WAIS 지능검사 등 공인된 전문 심리평가로 내면의 잠재력을 발견합니다.',
};

export default function AssessmentPage() {
  const tests = [
    {
      category: '성격 및 정서 검사',
      items: [
        { name: 'MMPI-2 (성인 다면적 인성검사)', desc: '심리적 스트레스 요인, 정서 상태, 성격 구조를 객관적으로 파악' },
        { name: 'MMPI-A (청소년 다면적 인성검사)', desc: '청소년기의 정서 불안, 대인관계, 학업 적응도를 다각도로 측정' },
        { name: 'TCI (기질 및 성격검사)', desc: '타고난 기질(자극추구, 위험회피 등)과 후천적으로 형성된 성격 성숙도 평가' },
        { name: 'SCT (문장완성검사)', desc: '무의식적인 감정과 대인관계 태도, 자아상을 탐색하는 투사적 검사' },
      ],
    },
    {
      category: '인지 및 지능 검사',
      items: [
        { name: 'K-WAIS-IV (한국판 웩슬러 성인지능검사)', desc: '인지적 강약점, 언어이해, 지각추론, 작업기억, 처리속도 정밀 분석' },
        { name: 'K-WISC-V (한국판 웩슬러 아동청소년 지능검사)', desc: '학습 효율성 및 인지 발달 단계 점검, 잠재 역량 도출' },
        { name: 'BGT (시각-운동 통합 및 뇌 손상 선별)', desc: '신경심리학적 기능 및 시지각 운동 협응 능력 평가' },
      ],
    },
  ];

  return (
    <div className="bg-white">
      {/* Banner */}
      <section className="bg-gradient-to-b from-[#fcfbfa] to-white border-b border-gray-150 py-20 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <span className="text-xs font-bold text-brand-orange uppercase tracking-widest">
            PSYCHOLOGICAL ASSESSMENT
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mt-3 font-serif">
            심리검사
          </h1>
          <p className="text-gray-500 text-sm sm:text-base mt-4 max-w-2xl mx-auto leading-relaxed">
            Discovery: 정교한 진단은 막연한 위로보다 강력합니다. 내면의 씨앗을 발견하는 첫걸음
          </p>
        </div>
      </section>

      <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Intro quote */}
        <div className="bg-orange-50/50 border border-orange-200/60 rounded-2xl p-8 sm:p-10 text-center max-w-3xl mx-auto">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
            "정교한 진단은 막연한 위로보다 강력합니다."
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            사람과성장의 심리검사는 단순히 개인을 진단하는 것을 넘어, 당신이 가진 고유한 잠재력을 발견하고 성장을 가로막는 장애물을 객관적으로 파악하여 비로소 첫 싹을 틔울 수 있게 돕습니다.
          </p>
        </div>

        {/* Tests Grid */}
        <div className="space-y-10">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900">전문 심리검사 종류</h3>
            <p className="text-xs text-gray-500 mt-1">상담 목적과 필요에 따라 최적의 맞춤 검사를 선별하여 진행합니다.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {tests.map((group, idx) => (
              <div key={idx} className="bg-[#fcfbfa] border border-gray-200/80 rounded-2xl p-8 shadow-sm">
                <h4 className="text-lg font-bold text-brand-orange mb-6 pb-3 border-b border-gray-200 flex items-center gap-2">
                  <FileText className="w-5 h-5" />
                  {group.category}
                </h4>
                <div className="space-y-5">
                  {group.items.map((item, itemIdx) => (
                    <div key={itemIdx} className="space-y-1">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-brand-gold shrink-0" />
                        <h5 className="text-sm font-bold text-gray-900">{item.name}</h5>
                      </div>
                      <p className="text-xs text-gray-500 pl-6 leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
          <div className="p-6 border border-gray-150 rounded-xl bg-white text-center space-y-2">
            <h4 className="font-bold text-gray-900 text-base">공인된 전문가의 정밀 분석</h4>
            <p className="text-xs text-gray-500 leading-relaxed">전문 임상심리사가 직접 검사를 시행하고 1:1 심층 해석 상담을 제공합니다.</p>
          </div>
          <div className="p-6 border border-gray-150 rounded-xl bg-white text-center space-y-2">
            <h4 className="font-bold text-gray-900 text-base">내담자 중심의 경청</h4>
            <p className="text-xs text-gray-500 leading-relaxed">불필요한 과잉 검사를 지양하며 데이터에만 치우치지 않고 삶의 이야기에 귀 기울입니다.</p>
          </div>
          <div className="p-6 border border-gray-150 rounded-xl bg-white text-center space-y-2">
            <h4 className="font-bold text-gray-900 text-base">통합적 자기 이해</h4>
            <p className="text-xs text-gray-500 leading-relaxed">현재의 어려움을 근본적으로 해소하고 앞으로의 진로와 삶의 로드맵을 수립합니다.</p>
          </div>
        </div>

        {/* CTA */}
        <div className="p-8 bg-gray-50 rounded-2xl border border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-lg font-bold text-gray-900">심리검사 예약 및 문의</h4>
            <p className="text-xs text-gray-500 mt-1">사전 예약제로 진행되며, 검사 종류에 따라 소요 시간 및 비용이 상이합니다.</p>
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
