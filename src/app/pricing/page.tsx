import React from 'react';
import Link from 'next/link';
import { Clock, Phone, Mail, MessageCircle, Calendar, ShieldCheck, Check } from 'lucide-react';

export const metadata = {
  title: '이용안내 및 비용 | 사람과성장 코칭심리상담센터',
  description: '100% 예약제 운영시간, 심리상담·코칭 비용 안내, 부부 및 가족상담 비용, 예약 방법 안내.',
};

export default function PricingPage() {
  const plans = [
    {
      name: '개인 심리상담 · 성장코칭',
      duration: '회기당 50분',
      price: '10만원',
      period: '1회 기준',
      features: [
        '1급 공인 전문가 1:1 전담 세션',
        '불안, 우울, 번아웃, 자존감 회복',
        '5회 정기권 등록 시 20% 할인',
        '5회 등록 시 기초 심리검사 무료 제공',
        '청소년 및 대학생 추가 할인 혜택',
      ],
      highlight: false,
    },
    {
      name: '부부 · 가족 · 커플 상담',
      duration: '회기당 80분 (2인 기준)',
      price: '15만원',
      period: '1회 기준',
      features: [
        '부부 갈등 및 소통 패턴 정밀 분석',
        '가족 내 억울함과 미해결 과제 해소',
        '5회 정기권 등록 시 15% 할인',
        '5회 등록 시 커플/부부 관계검사 제공',
        '프라이빗 2인 전용 세션룸 진행',
      ],
      highlight: true,
    },
    {
      name: '심리검사 & 종합평가',
      duration: '검사별 상이 (60~180분)',
      price: '별도 문의',
      period: '검사 종류별 맞춤',
      features: [
        '종합심리검사(Full Battery)',
        'TCI 기질 및 성격검사',
        'K-WAIS 한국판 웩슬러 성인지능검사',
        'MMPI-2 다면적 인성검사 & SCT',
        '임상심리사 1:1 심층 결과해석 상담 포함',
      ],
      highlight: false,
    },
  ];

  return (
    <div className="bg-white">
      {/* Banner */}
      <section className="bg-gradient-to-b from-[#fcfbfa] to-white border-b border-gray-150 py-20 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <span className="text-xs font-bold text-brand-orange uppercase tracking-widest">
            HOURS & PRICING
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mt-3 font-serif">
            이용안내 및 비용
          </h1>
          <p className="text-gray-500 text-sm sm:text-base mt-4 max-w-2xl mx-auto leading-relaxed">
            사람과성장은 온전한 몰입과 비밀 유지를 위해 100% 사전 예약제로 운영됩니다.
          </p>
        </div>
      </section>

      <section className="py-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Hours Card */}
        <div className="bg-[#fcfbfa] border border-gray-200/80 rounded-2xl p-8 sm:p-10 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <span className="text-xs font-bold text-brand-orange uppercase tracking-wider">
                OPERATION HOURS
              </span>
              <h2 className="text-2xl font-bold text-gray-900 mt-1 mb-4">
                운영 시간 및 예약 안내
              </h2>
              <div className="space-y-3 text-sm text-gray-700">
                <div className="flex items-center gap-2.5">
                  <Clock className="w-5 h-5 text-brand-orange shrink-0" />
                  <span><strong>월요일 - 토요일 :</strong> 09:00 ~ 22:00</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center text-xs font-bold text-gray-600">!</span>
                  <span><strong>휴무일 :</strong> 일요일 및 법정 공휴일 휴무</span>
                </div>
                <p className="text-xs text-gray-500 pt-2 leading-relaxed">
                  * 평일 저녁 퇴근 후 야간 상담 및 토요일 주말 상담이 가능합니다.<br />
                  * 100% 사전 예약제로 진행되오니 방문 전 미리 일정을 조율해 주시기 바랍니다.
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200 space-y-3">
              <h3 className="font-bold text-gray-900 text-base mb-2">예약 및 문의 채널</h3>
              <div className="flex items-center gap-3 text-sm text-gray-700">
                <Phone className="w-4 h-4 text-brand-orange" />
                <span><strong>전화 :</strong> 02-566-8291</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-700">
                <Mail className="w-4 h-4 text-brand-orange" />
                <span><strong>이메일 :</strong> sgcenter0123@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-700">
                <MessageCircle className="w-4 h-4 text-brand-orange" />
                <span><strong>카카오톡 :</strong> 사람과성장 코칭심리상담센터</span>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="space-y-8">
          <div className="text-center">
            <span className="text-xs font-bold text-brand-orange uppercase">PRICE LIST</span>
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-1">상담 및 코칭 비용</h3>
            <p className="text-xs text-gray-500 mt-1">투명하고 합리적인 비용 체계를 준수합니다.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((p, idx) => (
              <div
                key={idx}
                className={`rounded-2xl p-8 flex flex-col justify-between transition-all ${
                  p.highlight
                    ? 'bg-white border-2 border-brand-orange shadow-lg relative'
                    : 'bg-[#fcfbfa] border border-gray-200/80 shadow-sm'
                }`}
              >
                {p.highlight && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-orange text-white text-[11px] font-bold px-3 py-0.5 rounded-full uppercase">
                    추천 프로그램
                  </span>
                )}
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-1">{p.name}</h4>
                  <p className="text-xs text-brand-gold font-medium mb-4">{p.duration}</p>

                  <div className="mb-6 pb-6 border-b border-gray-200">
                    <span className="text-3xl font-extrabold text-gray-950">{p.price}</span>
                    <span className="text-xs text-gray-400 ml-1.5">{p.period}</span>
                  </div>

                  <ul className="space-y-3 text-xs text-gray-600 mb-8">
                    {p.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href="tel:02-566-8291"
                  className={`w-full py-3 text-center text-xs font-semibold rounded-xl transition-colors ${
                    p.highlight
                      ? 'bg-brand-orange text-white hover:bg-[#e04f1c] shadow-sm'
                      : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  상담 예약하기
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Corporate / B2B note */}
        <div className="p-8 bg-gray-50 rounded-2xl border border-gray-200 text-center">
          <h4 className="text-base font-bold text-gray-900">
            기업 EAP 및 비즈니스 컨설팅 비용 안내
          </h4>
          <p className="text-xs text-gray-500 mt-2 max-w-xl mx-auto leading-relaxed">
            기업 임직원 수 및 프로그램 범위에 따라 맞춤 견적이 책정됩니다. 전화(02-566-8291) 또는 이메일(sgcenter0123@gmail.com)로 문의주시면 상세 제안서를 보내드립니다.
          </p>
        </div>
      </section>
    </div>
  );
}
