import React from 'react';
import Link from 'next/link';
import { Briefcase, TrendingUp, Users, Cpu, Phone, Mail } from 'lucide-react';

export const metadata = {
  title: '비즈니스 컨설팅 | 사람과성장 코칭심리상담센터',
  description: '800억 규모 M&A를 성사시킨 실전 전문가의 비즈니스 컨설팅. 스타트업 비즈니스 모델, 경영 전략, HR 면접관 교육.',
};

export default function ConsultingPage() {
  const services = [
    {
      title: 'HR 및 면접관 교육',
      desc: '기업의 핵심 인재 선발 전문성 강화를 위한 구조화 면접 기법 교육 및 평가 가이드라인 수립',
      icon: Users,
    },
    {
      title: '창업 및 경영전략 수립',
      desc: '스타트업 및 중소기업 비즈니스 모델 고도화, 신사업 실행 전략 및 지속 가능한 스케일업 로드맵 설계',
      icon: TrendingUp,
    },
    {
      title: '경영자 의사결정 코칭',
      desc: 'CEO 및 경영진의 중요한 사업적 갈등 해결, 투자 유치 및 M&A 협상 지원, 심리적 압박감 해소',
      icon: Briefcase,
    },
  ];

  return (
    <div className="bg-white">
      {/* Banner */}
      <section className="bg-gradient-to-b from-[#fcfbfa] to-white border-b border-gray-150 py-20 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <span className="text-xs font-bold text-brand-orange uppercase tracking-widest">
            BUSINESS CONSULTING
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mt-3 font-serif">
            비즈니스 컨설팅
          </h1>
          <p className="text-gray-500 text-sm sm:text-base mt-4 max-w-2xl mx-auto leading-relaxed">
            Strategic Growth: 생존을 넘어 비약적인 성장을 제안합니다. 함께 이루는 거대한 숲, 조직의 성장
          </p>
        </div>
      </section>

      <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Highlight quote */}
        <div className="bg-orange-50/50 border border-orange-200/60 rounded-2xl p-8 sm:p-10 text-center max-w-3xl mx-auto">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
            "800억 규모의 M&A를 성공시킨 실전가와 비즈니스의 새로운 판을 짜십시오."
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            사람과성장은 단순한 탁상공론에 그치지 않고, 기업의 실질적인 재무적 성과와 지속 가능한 조직 시스템 구축을 직접 돕습니다.
          </p>
        </div>

        {/* Services */}
        <div className="space-y-6">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900">주요 컨설팅 영역</h3>
            <p className="text-xs text-gray-500 mt-1">조직의 규모와 과제 범위에 맞추어 맞춤형 솔루션이 제공됩니다.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((s, idx) => {
              const Icon = s.icon;
              return (
                <div key={idx} className="bg-[#fcfbfa] border border-gray-200/80 rounded-2xl p-8 shadow-sm text-center flex flex-col items-center">
                  <div className="w-14 h-14 bg-orange-100 text-brand-orange rounded-2xl flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-3">{s.title}</h4>
                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">{s.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Info */}
        <div className="p-8 bg-gray-50 rounded-2xl border border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-lg font-bold text-gray-900">비즈니스 컨설팅 세션 안내</h4>
            <p className="text-xs text-gray-500 mt-1">
              비즈니스 컨설팅은 심도 있는 분석을 위해 <strong>회기당 120분</strong>으로 진행됩니다.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="tel:02-566-8291"
              className="inline-flex items-center gap-2 px-5 py-3 bg-brand-orange text-white text-sm font-semibold rounded-xl hover:bg-[#e04f1c] transition-colors shadow-sm"
            >
              <Phone className="w-4 h-4" />
              02-566-8291 문의
            </a>
            <a
              href="mailto:sgcenter0123@gmail.com"
              className="inline-flex items-center gap-2 px-5 py-3 border border-gray-300 bg-white text-gray-700 text-sm font-semibold rounded-xl hover:bg-gray-50 transition-colors"
            >
              <Mail className="w-4 h-4" />
              이메일 제안
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
