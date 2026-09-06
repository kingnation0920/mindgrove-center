'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Phone, Calendar } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: '센터소개', href: '/about' },
    { name: '심리검사', href: '/assessment' },
    { name: '심리상담', href: '/counseling' },
    { name: '성장코칭', href: '/coaching' },
    { name: '기업심리 EAP', href: '/eap' },
    { name: '비즈니스컨설팅', href: '/consulting' },
    { name: '이용안내', href: '/pricing' },
    { name: '블로그', href: '/blog' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 transition-all duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo with Transparent Emblem + Typography */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-2.5 group">
              <img
                src="/images/file_1310693148.png"
                alt="사람과성장 심볼"
                className="h-10 md:h-11 w-auto object-contain transition-transform group-hover:scale-105"
              />
              <div className="flex flex-col justify-center">
                <span className="text-base sm:text-lg md:text-xl font-bold text-gray-900 tracking-tight leading-none group-hover:text-brand-orange transition-colors">
                  사람과성장
                </span>
                <span className="text-[10px] sm:text-[11px] text-gray-500 font-medium tracking-normal mt-0.5">
                  코칭심리상담센터
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-7">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[15px] font-medium text-gray-700 hover:text-brand-orange transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Action CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:02-556-8291"
              className="flex items-center gap-1.5 text-sm font-semibold text-gray-700 hover:text-brand-orange transition-colors"
            >
              <Phone className="w-4 h-4 text-brand-orange" />
              02-556-8291
            </a>
            <a
              href="https://naver.me/GSQTsIoF"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-orange hover:bg-[#e04f1c] text-white px-4 py-2 rounded-full text-sm font-medium transition-colors shadow-sm flex items-center gap-1.5"
            >
              <Calendar className="w-3.5 h-3.5" />
              상담예약
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-1">
            <a
              href="tel:02-556-8291"
              className="p-2 text-brand-orange"
              aria-label="전화걸기"
            >
              <Phone className="w-5 h-5" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-gray-600 hover:text-gray-900 focus:outline-none"
              aria-label="메뉴 열기"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-gray-200 px-4 pt-2 pb-6 space-y-2 shadow-xl animate-in slide-in-from-top duration-200">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-md text-base font-medium text-gray-800 hover:bg-gray-50 hover:text-brand-orange transition-colors"
            >
              {item.name}
            </Link>
          ))}
          <div className="pt-4 border-t border-gray-100 flex flex-col gap-2">
            <a
              href="tel:02-556-8291"
              className="flex items-center justify-center gap-2 w-full py-3 bg-gray-50 rounded-lg text-sm font-semibold text-gray-800"
            >
              <Phone className="w-4 h-4 text-brand-orange" />
              상담 문의: 02-556-8291
            </a>
            <a
              href="https://naver.me/GSQTsIoF"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 bg-brand-orange text-white rounded-lg text-sm font-semibold shadow-sm"
            >
              <Calendar className="w-4 h-4" />
              상담예약 (네이버 예약)
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
