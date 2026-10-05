import React, { useState } from 'react';
import { Calendar, Tag, Gift, MapPin, Clock, ArrowRight, Check, Sparkles, Copy, X } from 'lucide-react';
import { EVENTS, CAMPAIGNS, BrandEvent, MarketingCampaign } from '../data/dermaData';

interface EventsAndCampaignsProps {
  onRegisterEventSuccess: (eventName: string) => void;
  onApplyPromoCode: (code: string) => void;
}

export const EventsAndCampaigns: React.FC<EventsAndCampaignsProps> = ({
  onRegisterEventSuccess,
  onApplyPromoCode,
}) => {
  const [selectedEvent, setSelectedEvent] = useState<BrandEvent | null>(null);
  const [selectedCampaign, setSelectedCampaign] = useState<MarketingCampaign | null>(null);
  const [regName, setRegName] = useState('');
  const [regPhone, setRegPhone] = useState('');
  const [isSubmittingReg, setIsSubmittingReg] = useState(false);
  const [regSuccess, setRegSuccess] = useState(false);
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    onApplyPromoCode(code);
    setTimeout(() => setCopiedCode(null), 2500);
  };

  const handleRegisterEvent = (e: React.FormEvent) => {
    e.preventDefault();
    if (!regName.trim() || !regPhone.trim()) return;

    setIsSubmittingReg(true);
    setTimeout(() => {
      setIsSubmittingReg(false);
      setRegSuccess(true);
      if (selectedEvent) {
        onRegisterEventSuccess(selectedEvent.title);
      }
      setTimeout(() => {
        setRegSuccess(false);
        setSelectedEvent(null);
        setRegName('');
        setRegPhone('');
      }, 2000);
    }, 800);
  };

  return (
    <section id="events" className="py-16 lg:py-24 bg-[#FAF9F6] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* PART 1: Chiến Dịch Marketing Của Thương Hiệu */}
        <div>
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-semibold uppercase tracking-wider text-amber-800 block mb-1">
              Chính Sách Khuyến Mãi & Trợ Giá
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-950 tracking-tight">
              Chiến Dịch Marketing Trọng Điểm
            </h2>
            <p className="text-stone-600 text-sm mt-2">
              Các chương trình ưu đãi độc quyền mang công nghệ chăm sóc da chuẩn chuyên gia đến gần hơn với không gian sống của bạn.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CAMPAIGNS.map((camp) => (
              <div
                key={camp.id}
                className="rounded-2xl bg-white border border-stone-200 p-6 flex flex-col justify-between hover:border-amber-400 hover:shadow-md transition-all"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-bold text-amber-900 bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200/80">
                      {camp.badge}
                    </span>
                    <span className="text-[11px] text-stone-500 font-medium">
                      {camp.duration}
                    </span>
                  </div>

                  <h3 className="font-serif text-lg font-bold text-stone-900 mb-2">
                    {camp.title}
                  </h3>

                  <p className="text-xs text-stone-600 mb-4 leading-relaxed">
                    {camp.summary}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-stone-100">
                    <span className="text-[11px] font-bold text-stone-700 block">
                      Đặc quyền bao gồm:
                    </span>
                    <ul className="space-y-1.5 text-xs text-stone-600">
                      {camp.benefits.map((b, idx) => (
                        <li key={idx} className="flex items-start gap-1.5">
                          <Check className="w-3.5 h-3.5 text-amber-700 shrink-0 mt-0.5" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-stone-100">
                  {camp.code ? (
                    <button
                      type="button"
                      onClick={() => handleCopyCode(camp.code!)}
                      className="w-full py-2.5 px-3 bg-stone-900 hover:bg-stone-800 text-white text-xs font-semibold rounded-xl flex items-center justify-center gap-2 transition-all cursor-pointer shadow-xs"
                    >
                      {copiedCode === camp.code ? (
                        <>
                          <Check className="w-4 h-4 text-emerald-400" />
                          <span>Đã Sao Chép & Áp Dụng Mã {camp.code}</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5 text-amber-300" />
                          <span>Lấy Mã: {camp.code}</span>
                        </>
                      )}
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={() => {
                        const el = document.getElementById('products');
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="w-full py-2.5 px-3 bg-white border border-stone-300 hover:border-stone-900 text-stone-900 text-xs font-semibold rounded-xl flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <span>{camp.ctaText}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* PART 2: Sự Kiện Nổi Bật Của Thương Hiệu */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-rose-800 block mb-1">
                Hoạt Động & Giao Lưu Chuyên Môn
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-950 tracking-tight">
                Sự Kiện Nổi Bật Của Thương Hiệu
              </h2>
            </div>
            <p className="text-stone-600 text-xs sm:text-sm max-w-md">
              Tham gia chuỗi sự kiện ra mắt, workshop phân tích màu sắc cá nhân và trải nghiệm soi da thực tế cùng bác sĩ da liễu.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {EVENTS.map((event) => (
              <div
                key={event.id}
                className="rounded-2xl bg-white border border-stone-200 overflow-hidden flex flex-col justify-between hover:border-amber-400 hover:shadow-md transition-all"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between text-xs mb-3">
                    <span className="font-semibold text-rose-800 bg-rose-50 px-2 py-0.5 rounded border border-rose-200/60">
                      {event.tag}
                    </span>
                    <span className="text-stone-500 font-medium">DermaGlow</span>
                  </div>

                  <h3 className="font-serif text-lg font-bold text-stone-900 leading-snug mb-3">
                    {event.title}
                  </h3>

                  <div className="space-y-2 text-xs text-stone-600 mb-4">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-stone-500 shrink-0" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <MapPin className="w-4 h-4 text-stone-500 shrink-0 mt-0.5" />
                      <span className="line-clamp-2">{event.location}</span>
                    </div>
                  </div>

                  <p className="text-xs text-stone-600 mb-4 line-clamp-3">
                    {event.description}
                  </p>

                  <div className="pt-3 border-t border-stone-100">
                    <span className="text-[11px] font-bold text-stone-700 block mb-1.5">
                      Quyền lợi người tham dự:
                    </span>
                    <ul className="space-y-1 text-xs text-stone-600">
                      {event.highlights.map((h, idx) => (
                        <li key={idx} className="flex items-start gap-1.5">
                          <Sparkles className="w-3 h-3 text-amber-600 shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <button
                    type="button"
                    onClick={() => setSelectedEvent(event)}
                    className="w-full py-2.5 px-4 bg-stone-900 hover:bg-stone-800 text-white text-xs font-semibold rounded-xl flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <span>{event.ctaLabel}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal: Đăng ký tham dự sự kiện */}
        {selectedEvent && (
          <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/60 backdrop-blur-xs flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-stone-200 animate-in fade-in zoom-in-95 duration-200 relative text-left">
              <button
                type="button"
                onClick={() => setSelectedEvent(null)}
                aria-label="Đóng cửa sổ"
                className="absolute top-5 right-5 p-2 text-stone-500 hover:text-stone-900 bg-stone-100 hover:bg-stone-200 rounded-full transition-colors cursor-pointer shadow-xs"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="pr-10 mb-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-rose-800">
                  Đăng Ký Tham Dự Miễn Phí
                </span>
                <h3 className="font-serif text-xl font-bold text-stone-900 mt-1">
                  {selectedEvent.title}
                </h3>
              </div>

              <div className="p-3 bg-stone-50 rounded-xl border border-stone-200/80 text-xs text-stone-600 space-y-1 mb-5">
                <div><strong className="text-stone-900">Thời gian:</strong> {selectedEvent.date}</div>
                <div><strong className="text-stone-900">Địa điểm:</strong> {selectedEvent.location}</div>
              </div>

              {regSuccess ? (
                <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl text-center space-y-2">
                  <Check className="w-8 h-8 text-emerald-600 mx-auto" />
                  <h4 className="text-sm font-bold text-emerald-900">
                    Đăng Ký Thành Công!
                  </h4>
                  <p className="text-xs text-emerald-800">
                    Chuyên viên DermaGlow sẽ gửi thư mời và vé điện tử qua Zalo/SĐT trong vòng 2 giờ.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleRegisterEvent} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Họ và Tên của bạn *
                    </label>
                    <input
                      type="text"
                      required
                      value={regName}
                      onChange={(e) => setRegName(e.target.value)}
                      placeholder="Ví dụ: Hoàng An"
                      className="w-full px-3 py-2 text-sm border border-stone-300 rounded-lg focus:outline-none focus:border-amber-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Số điện thoại nhận vé mời *
                    </label>
                    <input
                      type="tel"
                      required
                      value={regPhone}
                      onChange={(e) => setRegPhone(e.target.value)}
                      placeholder="Ví dụ: 0912345678"
                      className="w-full px-3 py-2 text-sm border border-stone-300 rounded-lg focus:outline-none focus:border-amber-600"
                    />
                  </div>

                  <p className="text-[11px] text-stone-500">
                    Bằng việc nhấn đăng ký, bạn đồng ý nhận thông tin xác nhận tham dự sự kiện và mã ưu đãi cá nhân hóa từ DermaGlow.
                  </p>

                  <div className="flex gap-2 pt-2">
                    <button
                      type="button"
                      onClick={() => setSelectedEvent(null)}
                      className="flex-1 py-2.5 px-4 bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-semibold rounded-xl transition-colors cursor-pointer"
                    >
                      Hủy Bỏ
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmittingReg}
                      className="flex-1 py-2.5 px-4 bg-stone-900 hover:bg-stone-800 text-white text-xs font-semibold rounded-xl transition-colors cursor-pointer flex items-center justify-center gap-1.5"
                    >
                      {isSubmittingReg ? 'Đang gửi...' : 'Xác Nhận Giữ Chỗ'}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        )}

        {/* Modal: Chi tiết chiến dịch marketing */}
        {selectedCampaign && (
          <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/60 backdrop-blur-xs flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-stone-200 animate-in fade-in zoom-in-95 duration-200 relative text-left">
              <button
                type="button"
                onClick={() => setSelectedCampaign(null)}
                aria-label="Đóng cửa sổ"
                className="absolute top-5 right-5 p-2 text-stone-500 hover:text-stone-900 bg-stone-100 hover:bg-stone-200 rounded-full transition-colors cursor-pointer shadow-xs"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="pr-10 mb-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-amber-900">
                  {selectedCampaign.badge}
                </span>
                <h3 className="font-serif text-xl font-bold text-stone-900 mt-1">
                  {selectedCampaign.title}
                </h3>
                <span className="text-xs text-stone-500">{selectedCampaign.duration}</span>
              </div>

              <p className="text-xs text-stone-700 leading-relaxed mb-4">
                {selectedCampaign.summary}
              </p>

              <div className="p-4 rounded-xl bg-stone-50 border border-stone-200/80 mb-5">
                <span className="text-xs font-bold text-stone-900 block mb-2">Quyền lợi chi tiết:</span>
                <ul className="space-y-1.5 text-xs text-stone-600">
                  {selectedCampaign.benefits.map((b, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => setSelectedCampaign(null)}
                  className="flex-1 py-2.5 px-4 bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-semibold rounded-xl transition-colors cursor-pointer"
                >
                  Đóng
                </button>
                {selectedCampaign.code && (
                  <button
                    type="button"
                    onClick={() => {
                      handleCopyCode(selectedCampaign.code!);
                      setSelectedCampaign(null);
                    }}
                    className="flex-1 py-2.5 px-4 bg-stone-900 hover:bg-stone-800 text-white text-xs font-semibold rounded-xl transition-colors cursor-pointer flex items-center justify-center gap-1.5"
                  >
                    <Copy className="w-3.5 h-3.5" />
                    <span>Áp Dụng Mã {selectedCampaign.code}</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
