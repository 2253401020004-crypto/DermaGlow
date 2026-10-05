import React from 'react';
import { Sparkles, Calendar, Tag, ShieldCheck, ArrowRight, Palette, Eye, Activity, SunMedium } from 'lucide-react';
import { EVENTS, CAMPAIGNS, BRAND_IDENTITY } from '../data/dermaData';

interface HeroSectionProps {
  onExploreAi: () => void;
  onExploreProducts: () => void;
  onOpenEventDetail: (eventId: string) => void;
  onOpenCampaignDetail: (campaignId: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreAi,
  onExploreProducts,
  onOpenEventDetail,
  onOpenCampaignDetail,
}) => {
  const currentCampaign = CAMPAIGNS[0]; // Early Bird VIP 30%
  const featuredEvent = EVENTS[0]; // CSR Embrace Your True Skin

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#FAF9F6] via-[#F5F2EB] to-[#FAF9F6] pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-stone-200">
      {/* Background ambient decorative glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-amber-200/20 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Main Hero Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Brand Copy & Core Features */}
          <div className="lg:col-span-6 space-y-6 text-left">
            {/* Clean unboxed kicker */}
            <div className="flex items-center gap-2 text-xs text-amber-900 font-semibold tracking-wider uppercase">
              <span className="inline-block w-2 h-2 rounded-full bg-amber-600 animate-pulse" />
              <span>Công Nghệ Làm Đẹp Cá Nhân Hóa 2026</span>
              <span aria-hidden="true">·</span>
              <span className="text-stone-500 font-normal">DermaGlow Mirror</span>
            </div>

            <div>
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-stone-950 tracking-tight leading-[1.15]">
                DermaGlow Mirror. <br />
                <span className="italic font-normal text-stone-700">
                  {BRAND_IDENTITY.sloganVi}
                </span>
              </h1>
              <p className="text-xs sm:text-sm text-stone-500 font-mono tracking-wide mt-1">
                “{BRAND_IDENTITY.sloganEn}”
              </p>
            </div>

            <p className="text-base sm:text-lg text-stone-600 leading-relaxed max-w-xl">
              Gương thông minh tích hợp camera và AI phân tích đa thông số da, hỗ trợ cá nhân hóa chu trình chăm sóc khoa học tại nhà, đồng thời nâng cấp trải nghiệm phong cách với tính năng <strong className="text-stone-900 font-semibold">Personal Color</strong> chuẩn 4 mùa.
            </p>

            {/* Core Highlight Features aligned with Marketing Research */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="p-3.5 rounded-xl bg-white/80 border border-stone-200/90 shadow-xs hover:border-amber-400 transition-all">
                <div className="flex items-center gap-2 text-amber-900 font-semibold text-xs sm:text-sm">
                  <Activity className="w-4 h-4 text-amber-700" />
                  <span>Quét Da AI 10 Giây</span>
                </div>
                <p className="text-xs text-stone-600 mt-1">
                  Đo tuổi da, lỗ chân lông, nếp nhăn, độ ẩm và mụn
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-white/80 border border-stone-200/90 shadow-xs hover:border-amber-400 transition-all">
                <div className="flex items-center gap-2 text-rose-900 font-semibold text-xs sm:text-sm">
                  <Palette className="w-4 h-4 text-rose-700" />
                  <span>Personal Color AI</span>
                </div>
                <p className="text-xs text-stone-600 mt-1">
                  Nhận diện Warm/Cool/Neutral & gợi ý makeup, outfit
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-white/80 border border-stone-200/90 shadow-xs hover:border-amber-400 transition-all">
                <div className="flex items-center gap-2 text-emerald-900 font-semibold text-xs sm:text-sm">
                  <SunMedium className="w-4 h-4 text-emerald-700" />
                  <span>Đèn LED 360° Adaptive</span>
                </div>
                <p className="text-xs text-stone-600 mt-1">
                  5/10W xoay 360° tự điều chỉnh theo ánh sáng môi trường
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-white/80 border border-stone-200/90 shadow-xs hover:border-amber-400 transition-all">
                <div className="flex items-center gap-2 text-blue-900 font-semibold text-xs sm:text-sm">
                  <Sparkles className="w-4 h-4 text-blue-700" />
                  <span>Nhật Ký Tiến Trình Da</span>
                </div>
                <p className="text-xs text-stone-600 mt-1">
                  Theo dõi biểu đồ cải thiện da thực tế (giảm thâm 12%)
                </p>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                type="button"
                onClick={onExploreAi}
                className="px-6 py-3 text-sm font-semibold text-white bg-stone-900 rounded-xl hover:bg-stone-800 transition-all shadow-md hover:shadow-lg flex items-center gap-2 cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-amber-300" />
                <span>Trải Nghiệm Thử AI Soi Da</span>
              </button>

              <button
                type="button"
                onClick={onExploreProducts}
                className="px-6 py-3 text-sm font-semibold text-stone-900 bg-white border border-stone-300 rounded-xl hover:bg-stone-50 hover:border-stone-400 transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>Xem Gương Luna & Edge (1.500k)</span>
                <ArrowRight className="w-4 h-4 text-stone-500" />
              </button>
            </div>

            {/* Trust badge claim */}
            <div className="pt-2 flex items-center gap-2 text-xs text-stone-600">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Bảo mật dữ liệu mã hóa an toàn · Bảo hành 1-đổi-1 trong 30 ngày</span>
            </div>
          </div>

          {/* Right Column: Hero Product Image with Mirror Aesthetic */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Product Frame Showcase */}
              <div className="relative rounded-3xl overflow-hidden bg-stone-900/5 p-2 shadow-2xl border border-stone-200/80 group">
                <img
                  src="/src/assets/images/hero_dermaglow_mirror_1791206807012.jpg"
                  alt="DermaGlow Mirror - Gương thông minh tích hợp camera và AI phân tích da"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto aspect-16/9 lg:aspect-4/3 object-cover rounded-2xl transform transition-transform duration-700 group-hover:scale-[1.02]"
                />

                {/* Floating Glassmorphism Spec Tag based on PDF */}
                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl bg-stone-950/85 backdrop-blur-md border border-white/20 text-white flex items-center justify-between">
                  <div>
                    <span className="text-[11px] text-amber-300 uppercase tracking-wider font-semibold block">
                      Giá Niêm Yết Chính Thức 2026
                    </span>
                    <span className="text-sm font-medium text-white">
                      DermaGlow Luna & Edge · Chân đế Titan, LED 360°
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-stone-400 line-through block">1.800.000₫</span>
                    <span className="text-base font-bold text-amber-300 tabular-nums">1.500.000₫</span>
                  </div>
                </div>
              </div>

              {/* Decorative side accent cards */}
              <div className="hidden sm:flex absolute -top-4 -right-4 p-3 rounded-xl bg-white/95 backdrop-blur-sm border border-stone-200 shadow-lg items-center gap-2.5">
                <div className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center">
                  <Eye className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] text-stone-500">Mô hình Freemium</div>
                  <div className="text-xs font-bold text-stone-900">Bản Free 0đ + Pro 50k/tháng</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Highlight Events & Marketing Campaigns Bar (Mandatory Requirement i) */}
        <div className="mt-14 pt-10 border-t border-stone-200">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-amber-900">
                Chiến Dịch & Hoạt Động Trọng Điểm
              </div>
              <h2 className="font-serif text-2xl font-bold text-stone-950 mt-1">
                Sự Kiện & Chiến Dịch Nổi Bật Của Thương Hiệu
              </h2>
            </div>
            <p className="text-xs text-stone-600 max-w-md">
              Thương hiệu DermaGlow triển khai chiến dịch cộng đồng “Embrace Your True Skin” và chương trình ưu đãi mở bán Early Bird tiếp cận giới trẻ.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Event Highlight Card: CSR Embrace Your True Skin */}
            <div className="p-6 rounded-2xl bg-white border border-stone-200 shadow-xs hover:border-amber-300 transition-all flex flex-col justify-between text-left">
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-rose-800">
                    <Calendar className="w-4 h-4" />
                    <span>{featuredEvent.tag}</span>
                  </div>
                  <span className="text-xs text-stone-500 font-medium">
                    {featuredEvent.date}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-stone-900 leading-snug">
                  {featuredEvent.title}
                </h3>

                <p className="text-xs text-stone-600 mt-2 line-clamp-2">
                  {featuredEvent.description}
                </p>

                <div className="mt-3 flex items-center gap-2 text-xs text-stone-500">
                  <span className="font-medium text-stone-700">Đối tác:</span>
                  <span className="truncate">{featuredEvent.location}</span>
                </div>
              </div>

              <div className="mt-5 pt-4 border-t border-stone-100 flex items-center justify-between">
                <span className="text-xs font-medium text-emerald-700">
                  Tài trợ 100% điều trị + Tặng gương
                </span>
                <button
                  type="button"
                  onClick={() => onOpenEventDetail(featuredEvent.id)}
                  className="text-xs font-semibold text-stone-900 hover:text-amber-800 flex items-center gap-1 cursor-pointer"
                >
                  <span>Xem Chi Tiết Chiến Dịch</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Campaign Highlight Card: Early Bird VIP */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-amber-50/70 via-white to-amber-100/30 border border-amber-200 shadow-xs hover:border-amber-400 transition-all flex flex-col justify-between text-left">
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-amber-900">
                    <Tag className="w-4 h-4 text-amber-700" />
                    <span>{currentCampaign.badge}</span>
                  </div>
                  <span className="text-xs text-amber-800 font-medium">
                    {currentCampaign.duration}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-stone-950 leading-snug">
                  {currentCampaign.title}
                </h3>

                <p className="text-xs text-stone-700 mt-2">
                  {currentCampaign.summary}
                </p>

                <ul className="mt-3 space-y-1 text-xs text-stone-700">
                  {currentCampaign.benefits.slice(0, 2).map((b, idx) => (
                    <li key={idx} className="flex items-start gap-1.5">
                      <span className="text-amber-700 font-bold shrink-0">✓</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-5 pt-4 border-t border-amber-200/60 flex items-center justify-between">
                <div className="text-xs">
                  <span className="text-stone-500">Mã cọc VIP: </span>
                  <span className="font-mono font-bold text-stone-900 bg-white px-2 py-0.5 rounded border border-stone-200">
                    {currentCampaign.code}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => onOpenCampaignDetail(currentCampaign.id)}
                  className="text-xs font-bold text-amber-900 hover:text-stone-950 flex items-center gap-1 cursor-pointer"
                >
                  <span>Đặt Cọc Nhận Ưu Đãi 30%</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
