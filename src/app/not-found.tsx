import React from 'react';
import Link from 'next/link';
import { Home, Phone, Calendar } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-white px-4 py-20 text-center">
      <div className="max-w-md mx-auto space-y-6">
        <span className="text-6xl font-bold text-brand-orange font-serif">404</span>
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
          페이지를 찾을 수 없습니다
        </h1>
        <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
          요청하신 페이지의 주소가 변경되었거나 삭제되어 현재 찾을 수 없습니다. 아래 바로가기 메뉴를 이용해 주세요.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-brand-orange text-white rounded-full font-semibold hover:bg-[#e04f1c] transition-colors shadow-sm text-sm"
          >
            <Home className="w-4 h-4" />
            홈으로 이동
          </Link>
          <a
            href="tel:02-566-8291"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-gray-300 rounded-full font-semibold text-gray-700 hover:border-brand-orange hover:text-brand-orange transition-colors text-sm"
          >
            <Phone className="w-4 h-4" />
            문의 02-566-8291
          </a>
        </div>
      </div>
    </div>
  );
}
