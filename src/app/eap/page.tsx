import React from 'react';
import Link from 'next/link';
import { Building2, Activity, HeartPulse, LineChart, Shield, Phone, Mail } from 'lucide-react';

export const metadata = {
  title: '기업심리 EAP | 사람과성장 코칭심리상담센터',
  description: '임직원 멘탈케어 EAP 프로그램. 데이터 기반 심리 진단과 1급 전문가의 직접 코칭으로 건강하고 몰입도 높은 조직 문화를 만듭니다.',
};

export default function EapPage() {
  const pillars = [
    {
      title: '심리적 위기관리',
      subtitle: 'Crisis Care',
      desc: '정밀한 심리검사와 임상적 통찰을 통해 번아웃, 직무 스트레스, 우울 등 임직원의 고위험 요인을 조기 진단하고 집중 케어합니다.',
      icon: HeartPulse,
    },
    {
      title: '리더십 & 성장코칭',
      subtitle: 'Leadership Coaching',
      desc: '핵심 인재와 리더의 심리적 안전감 형성, 갈등 관리 역량 증진, 팀원 간의 건강한 소통을 위한 실전형 코칭을 제공합니다.',
      icon: LineChart,
    },
    {
      title: '성과와 몰입 연결',
      subtitle: 'Culture Consulting',
      desc: '구성원의 행복과 회사의 성과가 시너지를 내는 심리적 안전지대 구축 및 지속 가능한 조직 문화를 컨설팅합니다.',
      icon: Building2,
    },
  ];

  return (
    <div className="bg-white">
      {/* Banner */}
      <section className="bg-gradient-to-b from-[#fcfbfa] to-white border-b border-gray-150 py-20 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <span className="text-xs font-bold text-brand-orange uppercase tracking-widest">
            CORPORATE PSYCHOLOGY & EAP
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mt-3 font-serif">
            기업심리 (EAP)
          </h1>
          <p className="text-gray-500 text-sm sm:text-base mt-4 max-w-2xl mx-auto leading-relaxed">
            Mental Care: 데이터로 진단하고 마음으로 처방합니다. 개인과 조직이 건강한 시너지를 내는 문화
          </p>
        </div>
      </section>

      <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Quote */}
        <div className="bg-orange-50/50 border border-orange-200/60 rounded-2xl p-8 sm:p-10 text-center max-w-3xl mx-auto">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
            "구성원의 행복이 곧 기업의 실력이 되는 문화"
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            상담가의 깊은 통찰과 경영 전문가의 데이터를 더해 구성원이 마음 놓고 몰입할 수 있는 환경을 설계합니다. 막연한 위로를 넘어 조직의 실질적인 경쟁력으로 이어집니다.
          </p>
        </div>

        {/* Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div key={idx} className="bg-[#fcfbfa] border border-gray-200/80 rounded-2xl p-8 shadow-sm flex flex-col items-center text-center">
                <div className="w-14 h-14 bg-orange-100 text-brand-orange rounded-2xl flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">{p.title}</h3>
                <span className="text-xs font-semibold text-brand-gold mt-0.5 mb-3 block">{p.subtitle}</span>
                <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">{p.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Guarantee Banner */}
        <div className="bg-white border-2 border-brand-orange/30 rounded-2xl p-8 sm:p-10 space-y-4 shadow-sm">
          <div className="flex items-center gap-2 text-brand-orange font-bold text-sm">
            <Shield className="w-5 h-5" />
            <span>프리미엄 100% 직영 운영 원칙</span>
          </div>
          <h3 className="text-2xl font-bold text-gray-900">
            외부 하청이나 위탁 없이, 전담 운영진이 직접 관리합니다
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            사람과성장은 상담의 품질 유지와 임직원의 철저한 비밀 보장을 위해 대량 하청 계약을 지양하며, 조직의 생태계를 깊이 이해하는 한정된 파트너사와만 프라이빗 협약을 맺고 직접 운영합니다.
          </p>
        </div>

        {/* Contact info for B2B */}
        <div className="p-8 bg-gray-50 rounded-2xl border border-gray-200 text-center space-y-4">
          <h4 className="text-xl font-bold text-gray-900">기업 EAP 및 임직원 상담 제휴 문의</h4>
          <p className="text-sm text-gray-500 max-w-xl mx-auto">
            기업 규모와 업종 특성에 맞춘 최적의 임직원 케어 패키지를 제안해 드립니다.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <a
              href="tel:02-566-8291"
              className="inline-flex items-center gap-2 px-6 py-3 bg-brand-orange text-white text-sm font-semibold rounded-xl hover:bg-[#e04f1c] transition-colors shadow-sm"
            >
              <Phone className="w-4 h-4" />
              전화 문의: 02-566-8291
            </a>
            <a
              href="mailto:sgcenter0123@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 border border-gray-300 bg-white text-gray-700 text-sm font-semibold rounded-xl hover:bg-gray-50 transition-colors"
            >
              <Mail className="w-4 h-4" />
              이메일: sgcenter0123@gmail.com
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
