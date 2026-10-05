import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, ShieldCheck, Check, Sparkles, Globe } from 'lucide-react';
import { COMPANY_INFO, BRAND_IDENTITY } from '../data/dermaData';

interface FooterProps {
  onOpenGuide: () => void;
  onOpenCompany: () => void;
  onOpenCollections: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenGuide,
  onOpenCompany,
  onOpenCollections,
}) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSent, setNewsletterSent] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setNewsletterSent(true);
    setTimeout(() => {
      setNewsletterEmail('');
      setNewsletterSent(false);
    }, 4000);
  };

  return (
    <footer className="bg-stone-950 text-stone-300 pt-16 pb-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Trust Banner in Footer */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-12 border-b border-stone-800 text-xs">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-amber-950/70 border border-amber-600/40 text-amber-300 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <span className="font-semibold text-white block">Chính Sách 1 Đổi 1 Trong 30 Ngày</span>
              <span className="text-stone-400">Bảo hành phần cứng 3 - 6 tháng cho mạch & đèn LED</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-amber-950/70 border border-amber-600/40 text-amber-300 flex items-center justify-center shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <span className="font-semibold text-white block">Mô Hình Freemium Linh Hoạt</span>
              <span className="text-stone-400">Bản Free trọn đời · Bản Pro chỉ 50.000 VNĐ/tháng</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-amber-950/70 border border-amber-600/40 text-amber-300 flex items-center justify-center shrink-0">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <span className="font-semibold text-white block">Bảo Mật Dữ Liệu An Toàn</span>
              <span className="text-stone-400">Mã hóa dữ liệu hình ảnh và nhật ký phân tích da</span>
            </div>
          </div>
        </div>

        {/* Main Footer Information Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 py-12 border-b border-stone-800">
          {/* Brand & Mandated Company Information (Requirement iv) */}
          <div className="lg:col-span-5 space-y-4 text-left">
            <div>
              <span className="font-serif text-2xl font-bold tracking-tight text-white block">
                DermaGlow
              </span>
              <span className="text-xs text-amber-300 font-medium tracking-wide uppercase mt-0.5 block">
                “{BRAND_IDENTITY.sloganEn}”
              </span>
              <span className="text-xs text-stone-400 block mt-0.5">
                {BRAND_IDENTITY.sloganVi}
              </span>
            </div>

            <p className="text-xs text-stone-400 leading-relaxed max-w-sm">
              Sản phẩm gương thông minh kết hợp camera và AI của thương hiệu khởi nghiệp DermaGlow. Giải pháp chăm sóc da cá nhân hóa tại nhà và định hình phong cách qua Personal Color.
            </p>

            {/* Mandated Company Address & Phone (Requirement iv) */}
            <div className="p-4 rounded-xl bg-stone-900/90 border border-stone-800 space-y-2.5 text-xs text-stone-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">Địa chỉ doanh nghiệp:</strong>
                  <span className="text-white font-semibold">123 Quốc lộ 13</span>
                  <span className="text-stone-400 block text-[11px]">
                    (Phường Hiệp Bình Chánh, TP. Thủ Đức, TP. Hồ Chí Minh)
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2.5 pt-2 border-t border-stone-800">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <div>
                  <strong className="text-white mr-1.5">Số điện thoại:</strong>
                  <a
                    href="tel:+84779072980"
                    className="font-bold text-amber-300 hover:text-white transition-colors text-sm"
                  >
                    +847 7907 2980
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2.5 text-[11px] text-stone-400">
                <Globe className="w-3.5 h-3.5 text-stone-500 shrink-0" />
                <span>Kênh DTC: {COMPANY_INFO.websiteDomain}</span>
              </div>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="lg:col-span-3 space-y-3 text-xs text-left">
            <span className="font-semibold text-white uppercase tracking-wider block">
              Mục Lục Dự Án
            </span>
            <ul className="space-y-2 text-stone-400">
              <li>
                <a
                  href="#products"
                  className="hover:text-amber-300 transition-colors block py-0.5"
                >
                  • Gương DermaGlow Luna & Edge (1.500.000 VNĐ)
                </a>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenCollections}
                  className="hover:text-amber-300 transition-colors text-left block py-0.5 cursor-pointer"
                >
                  • Thiết kế dáng tròn (Luna) & Chữ nhật (Edge)
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenGuide}
                  className="hover:text-amber-300 transition-colors text-left block py-0.5 cursor-pointer"
                >
                  • Hướng dẫn sử dụng & Quy chuẩn bảo mật
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenCompany}
                  className="hover:text-amber-300 transition-colors text-left block py-0.5 cursor-pointer"
                >
                  • Thông tin doanh nghiệp & Pháp lý
                </button>
              </li>
              <li>
                <a
                  href="#ai-experience"
                  className="hover:text-amber-300 transition-colors block py-0.5"
                >
                  • Trải nghiệm phân tích da & Personal Color
                </a>
              </li>
              <li>
                <a
                  href="#events"
                  className="hover:text-amber-300 transition-colors block py-0.5"
                >
                  • Chiến dịch CSR “Embrace Your True Skin”
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Newsletter & VIP perks */}
          <div className="lg:col-span-4 space-y-4 text-left">
            <span className="font-semibold text-white text-xs uppercase tracking-wider block">
              Đăng Ký Nhận Thông Báo Mở Bán
            </span>
            <p className="text-xs text-stone-400 leading-relaxed">
              Nhận thông báo lịch mở bán Early Bird, ưu đãi cọc VIP 30% và thời gian dùng thử miễn phí gói Dermaglow Pro.
            </p>

            {newsletterSent ? (
              <div className="p-3 bg-emerald-950/60 border border-emerald-700/60 rounded-xl text-xs text-emerald-300 flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Cảm ơn bạn! Thông tin ưu đãi Early Bird đã được gửi đến email.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="flex gap-2">
                  <input
                    type="email"
                    required
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Nhập email của bạn..."
                    className="flex-1 px-3 py-2 text-xs bg-stone-900 border border-stone-800 rounded-lg text-white placeholder:text-stone-500 focus:outline-none focus:border-amber-500"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 bg-amber-700 hover:bg-amber-600 text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer"
                  >
                    Đăng Ký
                  </button>
                </div>
                <span className="text-[11px] text-stone-500 block">
                  Đóng gói tinh tế, bảo mật tuyệt đối thông tin khách hàng.
                </span>
              </form>
            )}

            <div className="pt-2 text-xs text-stone-400 space-y-1">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-stone-500" />
                <span>Email hỗ trợ: {COMPANY_INFO.email}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Compliance */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <div>
            © 2026 DermaGlow. Bảo lưu mọi quyền.
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <span>123 Quốc lộ 13, TP.HCM</span>
            <span>·</span>
            <span>Hotline: +847 7907 2980</span>
            <span>·</span>
            <span>Chính sách đổi trả</span>
            <span>·</span>
            <span>Điều khoản dịch vụ</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
