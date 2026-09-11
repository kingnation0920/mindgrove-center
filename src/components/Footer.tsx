import React from 'react';
import Link from 'next/link';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#1f2329] text-gray-300 pt-16 pb-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Col 1: Brand Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white tracking-wide">
              사람과성장 <span className="text-sm font-normal text-gray-400">코칭심리상담센터</span>
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              한 사람의 깊은 회복이 우리 모두의 건강한 성장으로 이어집니다.
              임상적 전문성과 따뜻한 심리적 안전감 속에서 진정한 치유와 변화를 함께합니다.
            </p>
            <div className="pt-2">
              <span className="inline-block bg-[#2b3038] text-xs px-3 py-1.5 rounded-full text-brand-orange font-medium">
                보건복지부·여성가족부 공인 1급 전문가 직접 상담
              </span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="text-base font-semibold text-white mb-4 border-b border-gray-700 pb-2">
              전문 프로그램
            </h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/assessment" className="hover:text-white transition-colors">심리검사 & 종합심리진단</Link></li>
              <li><Link href="/counseling" className="hover:text-white transition-colors">1:1 개인심리상담 & 부부상담</Link></li>
              <li><Link href="/coaching" className="hover:text-white transition-colors">성장코칭 & 커리어 재정렬</Link></li>
              <li><Link href="/eap" className="hover:text-white transition-colors">기업 임직원 멘탈케어 (EAP)</Link></li>
              <li><Link href="/consulting" className="hover:text-white transition-colors">비즈니스 멘토링 & 경영 코칭</Link></li>
              <li><Link href="/pricing" className="hover:text-white transition-colors">이용 시간 및 비용 안내</Link></li>
            </ul>
          </div>

          {/* Col 3: Contact & Hours */}
          <div>
            <h4 className="text-base font-semibold text-white mb-4 border-b border-gray-700 pb-2">
              상담 및 예약
            </h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white">02-566-8291</span>
                  <p className="text-xs text-gray-400">100% 사전 예약제 운영</p>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                <span className="text-sm">sgcenter0123@gmail.com</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                <div>
                  <p>월요일 - 토요일 : 09:00 ~ 22:00</p>
                  <p className="text-xs text-gray-400">일요일 및 공휴일 휴무</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Col 4: Location */}
          <div>
            <h4 className="text-base font-semibold text-white mb-4 border-b border-gray-700 pb-2">
              오시는 길
            </h4>
            <div className="flex items-start gap-2.5 text-sm text-gray-300 mb-4">
              <MapPin className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
              <span>
                서울특별시 강남구 강남대로 320<br />
                황화빌딩 10층 1001, 1002호<br />
                <span className="text-xs text-gray-400">(강남역 4번 출구 도보 5분 거리 / 주차 가능)</span>
              </span>
            </div>
            <a
              href="https://naver.me/GSQTsIoF"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full py-2.5 px-4 bg-[#03c75a] text-white text-xs font-semibold rounded hover:bg-[#02b350] transition-colors"
            >
              네이버 지도에서 위치 보기
            </a>
          </div>
        </div>

        {/* Legal Info & Copyright */}
        <div className="border-t border-gray-800 pt-8 text-xs text-gray-500 space-y-2">
          <div className="flex flex-wrap gap-x-6 gap-y-1">
            <span><strong>상호:</strong> 사람과성장 코칭심리상담센터</span>
            <span><strong>대표자:</strong> 김민경</span>
            <span><strong>사업자등록번호:</strong> 112-20-23060</span>
            <span><strong>통신판매업신고:</strong> 제 2026-서울강남-02203호</span>
            <span><strong>주소:</strong> 서울 강남구 강남대로 320 (황화빌딩) 1001, 1002호</span>
          </div>
          <div className="flex flex-col sm:flex-row justify-between items-center pt-4 border-t border-gray-850 gap-4">
            <p>© {new Date().getFullYear()} 사람과성장 코칭심리상담센터. All rights reserved.</p>
            <div className="flex items-center space-x-4">
              <Link href="/pricing" className="hover:underline">이용안내</Link>
              <Link href="/blog" className="hover:underline">상담칼럼</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
