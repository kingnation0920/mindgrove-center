import React from 'react';
import Link from 'next/link';
import { Phone, Mail } from 'lucide-react';

export const metadata = {
  title: '기업심리(EAP) | 사람과성장 코칭심리상담센터',
  description: '개인과 조직이 서로에게 건강한 가지를 뻗습니다. 상담가의 통찰과 경영전문가의 데이터를 더한 EAP 임직원 멘탈케어.',
  alternates: {
    canonical: '/eap',
  },
};

export default function EAPPage() {
  return (
    <div className="bg-white text-[#222222]">
      {/* 1. Header Section */}
      <section className="pt-20 pb-10 max-w-4xl mx-auto px-4 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#222222]">
          기업심리(EAP)
        </h1>
        <p className="mt-4 text-base sm:text-lg text-[#222222] font-normal">
          Mental Care: 데이터로 진단하고 마음으로 처방합니다
        </p>
      </section>

      {/* 2. Main Circular Image */}
      <section className="py-6 flex justify-center">
        <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-full overflow-hidden shadow-sm border border-gray-150">
          <img
            src="/images/file_184017384.png"
            alt="기업심리 EAP 대표 이미지"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* 3. Core Text */}
      <section className="py-8 max-w-3xl mx-auto px-4 text-center space-y-2 text-base sm:text-lg text-[#222222] font-normal leading-relaxed">
        <p className="font-medium text-xl text-gray-900">
          개인과 조직이 서로에게 건강한 가지를 뻗습니다.
        </p>
        <p>
          상담가의 통찰과 경영전문가의 데이터를 더해 구성원이 마음 놓고 몰입할 수 있는 환경을 설계합니다.
        </p>
        <p>
          막연한 위로를 넘어, 구성원의 행복이 곧 기업의 실력이 되는 문화를 만듭니다.
        </p>
      </section>

      {/* Divider */}
      <div className="flex justify-center py-6">
        <div className="w-[1px] h-14 bg-[#bbbbbb]"></div>
      </div>

      {/* 4. Three Pillar Cards (#a89a59) */}
      <section className="bg-[#a89a59] text-white py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto rounded-2xl shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center sm:text-left">
          {/* 1 */}
          <div className="space-y-3 p-4">
            <h3 className="text-xl font-medium tracking-tight border-b border-white/30 pb-2">
              심리적 위기관리
            </h3>
            <p className="text-sm text-white/95 leading-relaxed pt-2">
              정밀한 검사와 임상적 통찰을 통한 임직원 마음 집중 케어
            </p>
          </div>

          {/* 2 */}
          <div className="space-y-3 p-4">
            <h3 className="text-xl font-medium tracking-tight border-b border-white/30 pb-2">
              성장코칭
            </h3>
            <p className="text-sm text-white/95 leading-relaxed pt-2">
              리더십&역량 강화 및 조직 내 갈등 관리코칭
            </p>
          </div>

          {/* 3 */}
          <div className="space-y-3 p-4">
            <h3 className="text-xl font-medium tracking-tight border-b border-white/30 pb-2">
              성과연결
            </h3>
            <p className="text-sm text-white/95 leading-relaxed pt-2">
              구성원 행복과 조직 성과가 일치하는 문화 컨설팅
            </p>
          </div>
        </div>
      </section>

      {/* 5. Partnership Agreement Box (#eeeae7) */}
      <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#eeeae7] rounded-2xl p-8 sm:p-12 shadow-sm grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left info */}
          <div className="space-y-3 text-center md:text-left border-b md:border-b-0 md:border-r border-gray-300 pb-6 md:pb-0 md:pr-8">
            <p className="text-base sm:text-lg text-[#222222] leading-relaxed font-normal">
              사람과 성장은 모든 상담을 외부 위탁 없이 조직의 생태계를 누구보다 이해하는 운영진이 직접 관리하며,
            </p>
            <p className="text-base sm:text-lg text-[#222222] leading-relaxed font-medium">
              상담의 품질과 비밀 유지를 위해 한정된 파트너사와만 협약을 맺습니다.
            </p>
          </div>

          {/* Right contacts */}
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h4 className="text-xl font-bold text-gray-900">
              협약 문의
            </h4>
            <div className="w-8 h-[2px] bg-brand-orange"></div>
            <div className="space-y-2 text-base text-gray-800">
              <a
                href="tel:02-566-8291"
                className="flex items-center gap-2 hover:text-brand-orange transition-colors font-semibold"
              >
                <Phone className="w-4 h-4 text-brand-orange" />
                T: 02-566-8291
              </a>
              <a
                href="mailto:sgcenter0123@gmail.com"
                className="flex items-center gap-2 hover:text-brand-orange transition-colors"
              >
                <Mail className="w-4 h-4 text-brand-orange" />
                E: sgcenter0123@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-[#fcfbfa] border-t border-gray-200 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">
            지속 가능한 기업 문화의 시작
          </h3>
          <p className="text-gray-600 text-sm sm:text-base mb-8">
            조직의 상황과 규모에 맞춘 유연한 EAP 프로그램을 제안해 드립니다.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:02-566-8291"
              className="px-6 py-3 bg-brand-orange text-white rounded-full font-semibold hover:bg-[#e04f1c] transition-colors shadow-sm"
            >
              기업 EAP 제휴 상담
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
