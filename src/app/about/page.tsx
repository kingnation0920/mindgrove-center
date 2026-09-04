import React from 'react';
import Link from 'next/link';
import { ShieldCheck, Heart, Award, Sparkles, Phone, Calendar, ArrowRight } from 'lucide-react';

export const metadata = {
  title: '센터소개 | 사람과성장 코칭심리상담센터',
  description: '한 사람의 깊은 회복이 우리 모두의 건강한 성장으로 이어집니다. 보건복지부·여성가족부 공인 1급 전문가가 상주하는 사람과성장 코칭심리상담센터를 소개합니다.',
};

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* 1. Page Banner */}
      <section className="bg-gradient-to-b from-[#fcfbfa] to-white border-b border-gray-150 py-20 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <span className="text-xs font-bold text-brand-orange uppercase tracking-widest">
            ABOUT CENTER
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mt-3 font-serif">
            센터 소개
          </h1>
          <p className="text-gray-500 text-sm sm:text-base mt-4 max-w-2xl mx-auto leading-relaxed">
            나를 온전히 마주하고, 내면의 깊은 상처를 회복하여 삶의 주도적인 성장을 이끌어내는 따뜻한 숲
          </p>
        </div>
      </section>

      {/* 2. Philosophy & Vision */}
      <section className="py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="rounded-2xl overflow-hidden shadow-md border border-gray-100">
            <img
              src="/images/file_475819945.png"
              alt="사람과성장 전경"
              className="w-full h-[400px] object-cover"
            />
          </div>
          <div className="space-y-6">
            <span className="text-xs font-bold text-brand-orange uppercase tracking-wider">
              PHILOSOPHY
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-snug">
              "한 사람의 깊은 회복이<br />
              <span className="text-brand-orange">우리 모두의 건강한 성장으로</span> 이어집니다"
            </h2>
            <div className="text-gray-600 text-sm sm:text-base space-y-4 leading-relaxed">
              <p>
                사람과성장 코칭심리상담센터는 단순한 위로에 그치지 않고, 임상적 전문성과 데이터 기반의 객관적 진단을 통해 내담자 스스로가 삶의 방향을 찾고 단단한 뿌리를 내릴 수 있도록 돕습니다.
              </p>
              <p>
                보이지 않는 마음의 상처를 보듬는 깊은 치유를 통해, 개인의 회복이 삶의 활력과 관계의 조화, 나아가 조직의 몰입으로 자연스럽게 확장되는 여정을 함께합니다.
              </p>
            </div>
          </div>
        </div>

        {/* 3. Three Core Values */}
        <div className="pt-10">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold text-brand-orange uppercase tracking-wider">
              CORE VALUES
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-1">
              사람과성장의 세 가지 약속
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#fcfbfa] p-8 rounded-2xl border border-gray-150 text-center space-y-4">
              <div className="w-14 h-14 bg-orange-100 text-brand-orange rounded-full flex items-center justify-center mx-auto">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <h4 className="text-lg font-bold text-gray-900">1급 공인 전문가 직접 상담</h4>
              <p className="text-sm text-gray-500 leading-relaxed">
                보건복지부 및 여성가족부 공인 1급 전문 상담사가 직접 진단하고 1:1 맞춤형 세션을 진행합니다.
              </p>
            </div>

            <div className="bg-[#fcfbfa] p-8 rounded-2xl border border-gray-150 text-center space-y-4">
              <div className="w-14 h-14 bg-amber-100 text-brand-gold rounded-full flex items-center justify-center mx-auto">
                <Sparkles className="w-7 h-7" />
              </div>
              <h4 className="text-lg font-bold text-gray-900">대학병원급 정밀 심리평가</h4>
              <p className="text-sm text-gray-500 leading-relaxed">
                종합심리검사, TCI, 웩슬러 지능검사 등 공인된 정밀 평가 도구를 활용하여 막연하지 않은 객관적 근거를 제공합니다.
              </p>
            </div>

            <div className="bg-[#fcfbfa] p-8 rounded-2xl border border-gray-150 text-center space-y-4">
              <div className="w-14 h-14 bg-green-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <Heart className="w-7 h-7" />
              </div>
              <h4 className="text-lg font-bold text-gray-900">철저한 비밀보장 & 프라이빗</h4>
              <p className="text-sm text-gray-500 leading-relaxed">
                100% 사전 예약제와 독립된 프라이빗 상담 공간을 통해 완벽한 심리적 안전감을 보장합니다.
              </p>
            </div>
          </div>
        </div>

        {/* 4. Space Introduction */}
        <div className="pt-10 border-t border-gray-200">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold text-brand-orange uppercase tracking-wider">
              SPACE TOUR
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-1">
              사람과성장 공간 안내
            </h3>
            <p className="text-gray-500 text-sm mt-2">
              강남대로가 한눈에 내려다보이는 황화빌딩 10층에서 탁 트인 시야와 함께 평온한 쉼을 누리세요.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-2xl overflow-hidden border border-gray-150 bg-white shadow-sm">
              <img
                src="/images/file_641093135.png"
                alt="상담실 전경"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h4 className="font-bold text-gray-900 text-base">프라이빗 1:1 상담실</h4>
                <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                  방음 시설과 편안한 조명, 아늑한 소파가 갖춰져 있어 오롯이 나의 감정에 집중할 수 있는 공간입니다.
                </p>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden border border-gray-150 bg-white shadow-sm">
              <img
                src="/images/file_116062032.png"
                alt="대기 공간 및 뷰"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h4 className="font-bold text-gray-900 text-base">도심 뷰 라운지 및 대기실</h4>
                <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                  도심이 한눈에 들어오는 특별한 시야와 함께, 세상을 향해 자신 있게 나아갈 힘을 얻는 곳입니다.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 5. CTA */}
        <div className="bg-gray-50 rounded-2xl p-8 text-center border border-gray-200">
          <h3 className="text-xl font-bold text-gray-900">당신의 성장의 여정, 함께하겠습니다</h3>
          <p className="text-sm text-gray-500 mt-2 mb-6">
            궁금하신 점이 있으시면 언제든지 편안하게 문의해 주세요.
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="tel:02-566-8291"
              className="inline-flex items-center gap-2 px-6 py-3 bg-brand-orange text-white text-sm font-semibold rounded-xl hover:bg-[#e04f1c] transition-colors shadow-sm"
            >
              <Phone className="w-4 h-4" />
              02-566-8291 상담 문의
            </a>
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-gray-300 text-gray-700 text-sm font-semibold rounded-xl hover:bg-gray-50 transition-colors"
            >
              이용안내 보기
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
