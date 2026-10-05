import React from 'react';
import { Menu, Search, ShoppingBag, User } from 'lucide-react';
import { BRAND_IDENTITY } from '../data/dermaData';

interface HeaderProps {
  onOpenMenu: () => void;
  onOpenSearch: () => void;
  onOpenCart: () => void;
  onOpenAccount: () => void;
  cartCount: number;
  userPoints: number;
  isLoggedIn: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenMenu,
  onOpenSearch,
  onOpenCart,
  onOpenAccount,
  cartCount,
  userPoints,
  isLoggedIn,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-[#FAF9F6]/90 backdrop-blur-md border-b border-stone-200/80 transition-all">
      {/* Top micro announcement bar */}
      <div className="bg-stone-900 text-stone-200 text-xs py-1.5 px-4 text-center font-normal tracking-wide">
        <span className="text-amber-300 font-medium">Mở bán 2026:</span> Gương thông minh DermaGlow Luna & Edge chỉ <strong className="text-white font-bold">1.500.000 VNĐ</strong> · Ưu đãi đặt trước giảm 30% · Dùng thử miễn phí gói Dermaglow Pro
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-4">
        {/* Left Zone: Hamburger 3 bars & Brand Wordmark */}
        <div className="flex items-center gap-3 sm:gap-4">
          <button
            type="button"
            onClick={onOpenMenu}
            aria-label="Mở mục lục danh mục"
            className="p-2.5 -ml-2 text-stone-800 hover:text-stone-950 hover:bg-stone-100 rounded-lg transition-colors focus-visible:outline-2 focus-visible:outline-amber-600 cursor-pointer flex items-center gap-2"
          >
            <Menu className="w-5 h-5 text-stone-800" />
            <span className="hidden sm:inline text-xs font-semibold uppercase tracking-wider text-stone-700">
              Mục Lục
            </span>
          </button>

          <a
            href="#"
            className="flex flex-col group text-left cursor-pointer"
          >
            <span className="font-serif text-2xl font-bold tracking-tight text-stone-950 group-hover:text-amber-800 transition-colors">
              DermaGlow
            </span>
            <span className="text-[10px] text-stone-500 font-medium -mt-1 hidden sm:block">
              {BRAND_IDENTITY.sloganVi}
            </span>
          </a>
        </div>

        {/* Center Zone: Clean Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-stone-600">
          <a
            href="#products"
            className="hover:text-stone-950 transition-colors py-1 hover:border-b-2 hover:border-amber-700"
          >
            Gương Luna & Edge (1.500k)
          </a>
          <a
            href="#ai-experience"
            className="hover:text-stone-950 transition-colors py-1 hover:border-b-2 hover:border-amber-700"
          >
            Trải Nghiệm AI & Da
          </a>
          <a
            href="#events"
            className="hover:text-stone-950 transition-colors py-1 hover:border-b-2 hover:border-amber-700"
          >
            Chiến Dịch CSR & Ưu Đãi
          </a>
          <a
            href="#ai-experience"
            className="hover:text-stone-950 transition-colors py-1 hover:border-b-2 hover:border-amber-700"
          >
            Hướng Dẫn Sử Dụng
          </a>
        </nav>

        {/* Right Zone: Search, Cart, User Account */}
        <div className="flex items-center gap-1 sm:gap-2">
          {/* Search Button */}
          <button
            type="button"
            onClick={onOpenSearch}
            aria-label="Tìm kiếm sản phẩm"
            className="p-2 text-stone-700 hover:text-stone-950 hover:bg-stone-100 rounded-lg transition-colors cursor-pointer"
          >
            <Search className="w-5 h-5" />
          </button>

          {/* Cart Button */}
          <button
            type="button"
            onClick={onOpenCart}
            aria-label="Xem giỏ hàng"
            className="relative p-2 text-stone-700 hover:text-stone-950 hover:bg-stone-100 rounded-lg transition-colors cursor-pointer"
          >
            <ShoppingBag className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute top-1 right-1 bg-amber-700 text-white text-[11px] font-bold w-4 h-4 rounded-full flex items-center justify-center tabular-nums">
                {cartCount > 9 ? '9+' : cartCount}
              </span>
            )}
          </button>

          {/* User Account / Loyalty Points */}
          <button
            type="button"
            onClick={onOpenAccount}
            aria-label="Tài khoản người dùng và tích điểm"
            className="flex items-center gap-2 p-1.5 sm:px-3 sm:py-2 text-stone-800 hover:bg-stone-100 rounded-lg transition-colors cursor-pointer"
          >
            <User className="w-5 h-5 text-stone-800" />
            <div className="hidden md:flex flex-col text-left">
              <span className="text-xs font-semibold text-stone-900 leading-tight">
                {isLoggedIn ? 'Glow VIP' : 'Tài Khoản'}
              </span>
              <span className="text-[10px] text-amber-800 font-medium tabular-nums">
                {isLoggedIn ? `${userPoints.toLocaleString('vi-VN')} điểm` : 'Tích điểm thành viên'}
              </span>
            </div>
          </button>
        </div>
      </div>
    </header>
  );
};
