import React from 'react';
import Link from 'next/link';
import { Phone, Mail, MessageSquare, Clock, Calendar } from 'lucide-react';

export const metadata = {
  title: '운영시간 & 비용안내 | 사람과성장 코칭심리상담센터',
  description: '사람과성장은 100% 예약제로 운영됩니다. 운영시간 및 심리검사, 개인상담, 부부상담, 비즈니스 컨설팅 비용 안내.',
};

export default function PricingPage() {
  const pricingCards = [
    {
      title: '심리검사',
      image: '/images/file_1570191323.png',
      badge: '[별도 문의]',
      lines: [
        '심리검사는 종류에 따라',
        '비용과 시간이 상이합니다.',
      ],
      duration: null,
    },
    {
      title: '개인 상담 · 코칭',
      image: '/images/file_1031373744.png',
      badge: null,
      price: '1회: 10만원',
      discount: '5회 정기: 20%할인 및 심리검사 제공',
      extra: '학생 추가할인',
      duration: '회기당 50분 진행됩니다.',
    },
    {
      title: '부부 · 가족 및 관계',
      image: '/images/file_489556245.png',
      badge: '[2인 기준]',
      price: '1회: 18만원',
      discount: '5회 정기: 20%할인 및 심리검사 제공',
      extra: null,
      duration: '회기당 90분 진행됩니다.',
    },
    {
      title: '비즈니스 컨설팅',
      image: '/images/file_2111999606.png',
      badge: '[경영진]',
      price: '비용 별도 문의',
      discount: null,
      extra: null,
      duration: '회기당 120분 진행됩니다.',
    },
  ];

  return (
    <div className="bg-white text-[#222222]">
      {/* 1. Header Section (#f5eee8) */}
      <section className="bg-[#f5eee8] py-16 text-center border-b border-gray-150">
        <div className="max-w-4xl mx-auto px-4">
          <span className="text-sm font-semibold tracking-widest text-[#ad9f94] uppercase">
            WELCOME
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#222222] mt-3">
            운영시간 & 예약
          </h1>
        </div>
      </section>

      {/* 2. Operating Hours & Reservation Details */}
      <section className="py-14 max-w-3xl mx-auto px-4 text-center space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-[#222222] underline underline-offset-8">
          사람과성장은 100% 예약제로 운영됩니다.
        </h2>

        <div className="pt-4 text-base sm:text-lg text-[#222222] leading-relaxed space-y-2">
          <p className="font-semibold text-xl text-brand-orange">
            매일 오전 9시 ~ 오후 22시
          </p>
          <p className="text-gray-600 font-medium">
            공휴일 휴무
          </p>
          <p className="text-sm sm:text-base text-gray-500">
            (종합검사 및 각종 심리검사 예약제 운영)
          </p>
        </div>

        <div className="pt-6 max-w-md mx-auto bg-gray-50 p-6 rounded-2xl border border-gray-200 text-left space-y-3">
          <div className="flex items-center gap-3 text-base text-gray-800">
            <Phone className="w-5 h-5 text-brand-orange shrink-0" />
            <span><strong>예약 문의:</strong> 02-566-8291</span>
          </div>
          <div className="flex items-center gap-3 text-base text-gray-800">
            <Mail className="w-5 h-5 text-brand-orange shrink-0" />
            <span><strong>이메일:</strong> sgcenter0123@gmail.com</span>
          </div>
          <div className="flex items-center gap-3 text-base text-gray-800">
            <MessageSquare className="w-5 h-5 text-brand-orange shrink-0" />
            <span><strong>카카오톡 검색:</strong> 사람과성장 코칭심리상담센터</span>
          </div>
        </div>
      </section>

      {/* 3. Pricing Banner Section (#e4e4e4) */}
      <section className="bg-[#e4e4e4] py-10 text-center border-y border-gray-300">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#222222] tracking-tight">
            비용 안내
          </h2>
        </div>
      </section>

      {/* 4. Four Pricing Cards */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {pricingCards.map((card, idx) => (
            <div
              key={idx}
              className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Image */}
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden shadow-sm border border-gray-200 mb-6 flex-shrink-0">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Title */}
              <h3 className="text-xl sm:text-2xl font-bold text-[#222222] mb-3">
                {card.title}
              </h3>

              {/* Badge */}
              {card.badge && (
                <span className="text-sm font-semibold text-brand-orange mb-3 block">
                  {card.badge}
                </span>
              )}

              {/* Body */}
              <div className="flex-1 flex flex-col justify-center space-y-2 text-sm sm:text-[15px] text-[#444444] my-4 leading-relaxed">
                {card.lines && (
                  card.lines.map((line, lidx) => (
                    <p key={lidx}>{line}</p>
                  ))
                )}
                {card.price && (
                  <p className="text-lg font-bold text-gray-900">
                    {card.price}
                  </p>
                )}
                {card.discount && (
                  <p className="font-semibold text-brand-orange">
                    {card.discount}
                  </p>
                )}
                {card.extra && (
                  <p className="text-gray-500 font-medium">
                    {card.extra}
                  </p>
                )}
              </div>

              {/* Duration Footer */}
              {card.duration && (
                <div className="pt-4 border-t border-gray-100 w-full text-xs sm:text-sm text-gray-500 font-medium">
                  <u>{card.duration}</u>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-[#fcfbfa] border-t border-gray-200 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">
            지금 바로 상담 및 검사를 예약하세요
          </h3>
          <p className="text-gray-600 text-sm sm:text-base mb-8">
            모든 상담과 검사는 100% 사전 예약제로 철저한 비밀 보장 속에 진행됩니다.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:02-566-8291"
              className="px-6 py-3 bg-white border border-gray-300 rounded-full font-semibold text-gray-800 hover:border-brand-orange hover:text-brand-orange transition-colors"
            >
              전화예약 02-566-8291
            </a>
            <a
              href="https://booking.naver.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-brand-orange text-white rounded-full font-semibold hover:bg-[#e04f1c] transition-colors shadow-sm flex items-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              네이버 예약 바로가기
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
