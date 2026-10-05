import React, { useState } from 'react';
import { X, Award, Gift, Sparkles, Check, ChevronRight, User, Phone, Lock, LogOut } from 'lucide-react';

interface UserAccountModalProps {
  isOpen: boolean;
  onClose: () => void;
  userPoints: number;
  isLoggedIn: boolean;
  onLogin: (userName: string, phone: string) => void;
  onLogout: () => void;
  onRedeemReward: (pointsCost: number, rewardTitle: string) => void;
}

export const UserAccountModal: React.FC<UserAccountModalProps> = ({
  isOpen,
  onClose,
  userPoints,
  isLoggedIn,
  onLogin,
  onLogout,
  onRedeemReward,
}) => {
  const [authMode, setAuthMode] = useState<'login' | 'register'>('register');
  const [nameInput, setNameInput] = useState('Phạm Hoàng An');
  const [phoneInput, setPhoneInput] = useState('0779072980');
  const [passwordInput, setPasswordInput] = useState('********');
  const [redeemSuccess, setRedeemSuccess] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleAuthSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phoneInput) return;
    onLogin(nameInput || 'Phạm Hoàng An', phoneInput);
  };

  const handleRedeem = (cost: number, title: string) => {
    if (userPoints < cost) {
      alert(`Bạn cần thêm ${cost - userPoints} điểm để đổi quà này.`);
      return;
    }
    onRedeemReward(cost, title);
    setRedeemSuccess(`Đã đổi thành công "${title}"!`);
    setTimeout(() => setRedeemSuccess(null), 3000);
  };

  // Determine Tier
  const tier = userPoints >= 3000 ? 'Diamond VIP' : userPoints >= 1000 ? 'Gold VIP' : 'Silver Member';

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/65 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-[#FAF9F6] rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-stone-200 animate-in fade-in zoom-in-95 duration-200 relative">
        <button
          type="button"
          onClick={onClose}
          aria-label="Đóng tài khoản"
          className="absolute top-5 right-5 p-2 text-stone-500 hover:text-stone-950 bg-stone-100 hover:bg-stone-200 rounded-full transition-colors cursor-pointer shadow-xs"
        >
          <X className="w-5 h-5" />
        </button>

        {isLoggedIn ? (
          /* Logged In Member Profile & GlowPoints Dashboard */
          <div className="space-y-6 text-left">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-amber-800 uppercase tracking-wider">
                <Award className="w-4 h-4 text-amber-700" />
                <span>Thành Viên Thân Thiết DermaGlow Club</span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-stone-900 mt-1">
                Xin chào, {nameInput || 'Phạm Hoàng An'}!
              </h3>
              <p className="text-xs text-stone-500">
                SĐT: {phoneInput} · Hạng thẻ: <span className="font-bold text-amber-900">{tier}</span>
              </p>
            </div>

            {/* Loyalty Card UI */}
            <div className="rounded-2xl p-5 bg-gradient-to-tr from-stone-900 via-stone-800 to-amber-950 text-white shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-44 h-44 bg-amber-400/10 rounded-full blur-2xl pointer-events-none" />

              <div className="flex justify-between items-start mb-6">
                <div>
                  <span className="text-[10px] tracking-widest uppercase text-amber-300 font-mono">
                    DERMAGLOW VIP PASS
                  </span>
                  <div className="font-serif text-lg font-bold tracking-wide">
                    {nameInput || 'Phạm Hoàng An'}
                  </div>
                </div>
                <div className="px-2.5 py-1 rounded bg-white/10 backdrop-blur-xs text-xs font-bold text-amber-300">
                  {tier}
                </div>
              </div>

              <div className="flex justify-between items-end">
                <div>
                  <span className="text-[11px] text-stone-400 block">Số điểm khả dụng:</span>
                  <div className="text-2xl font-bold text-amber-300 tabular-nums">
                    {userPoints.toLocaleString('vi-VN')} <span className="text-xs text-white">GlowPoints</span>
                  </div>
                </div>
                <div className="text-right text-[11px] text-stone-300">
                  Quy đổi: <strong className="text-white">{(userPoints * 100).toLocaleString('vi-VN')}₫</strong>
                </div>
              </div>
            </div>

            {redeemSuccess && (
              <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-xs text-emerald-800 flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{redeemSuccess}</span>
              </div>
            )}

            {/* Redeemable Rewards */}
            <div>
              <span className="text-xs font-bold text-stone-900 uppercase tracking-wider block mb-3">
                Đổi Điểm Thưởng Đặc Quyền:
              </span>

              <div className="space-y-2.5">
                <div className="p-3 bg-white rounded-xl border border-stone-200/90 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-800 flex items-center justify-center">
                      <Gift className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-stone-900">Voucher Giảm 100.000₫ Gương Luna/Edge</div>
                      <div className="text-[11px] text-stone-500">Áp dụng trực tiếp vào đơn đặt hàng</div>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleRedeem(500, 'Voucher Giảm 100.000₫')}
                    className="py-1 px-3 bg-stone-900 text-white text-xs font-semibold rounded-lg hover:bg-stone-800 transition-colors cursor-pointer"
                  >
                    500 điểm
                  </button>
                </div>

                <div className="p-3 bg-white rounded-xl border border-stone-200/90 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-rose-50 text-rose-800 flex items-center justify-center">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-stone-900">01 Tháng Gói Dermaglow Pro SaaS</div>
                      <div className="text-[11px] text-stone-500">Mở khóa Personal Color & Báo cáo nâng cao</div>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleRedeem(400, '01 Tháng Gói Dermaglow Pro SaaS')}
                    className="py-1 px-3 bg-stone-900 text-white text-xs font-semibold rounded-lg hover:bg-stone-800 transition-colors cursor-pointer"
                  >
                    400 điểm
                  </button>
                </div>

                <div className="p-3 bg-white rounded-xl border border-stone-200/90 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-800 flex items-center justify-center">
                      <Award className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-stone-900">Buổi Soi Da 1-1 Cùng Bác Sĩ Da Liễu</div>
                      <div className="text-[11px] text-stone-500">Tại trạm đối tác B2B2C hoặc Showroom</div>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleRedeem(1200, 'Buổi Soi Da 1-1 Cùng Bác Sĩ Da Liễu')}
                    className="py-1 px-3 bg-stone-900 text-white text-xs font-semibold rounded-lg hover:bg-stone-800 transition-colors cursor-pointer"
                  >
                    1.200 điểm
                  </button>
                </div>
              </div>
            </div>

            <div className="pt-2 border-t border-stone-200 flex justify-between items-center">
              <span className="text-xs text-stone-500">
                Tích thêm 5% giá trị mỗi đơn mua
              </span>
              <button
                type="button"
                onClick={onLogout}
                className="text-xs text-rose-700 hover:underline flex items-center gap-1 cursor-pointer font-medium"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span>Đăng xuất</span>
              </button>
            </div>
          </div>
        ) : (
          /* Login & Register Tabs */
          <div className="space-y-6 text-left">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-amber-800 uppercase tracking-wider">
                <Sparkles className="w-4 h-4 text-amber-700" />
                <span>Đặc Quyền Hội Viên DermaGlow Club</span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-stone-900 mt-1">
                {authMode === 'register' ? 'Đăng Ký Tài Khoản & Tích Điểm' : 'Đăng Nhập Tài Khoản'}
              </h3>
              <p className="text-xs text-stone-500">
                Nhận ngay <strong className="text-amber-800">500 GlowPoints</strong> chào mừng và lưu trữ lịch sử báo cáo làn da qua từng tháng.
              </p>
            </div>

            {/* Segmented control */}
            <div className="flex items-center gap-1 p-1 bg-stone-100 rounded-xl">
              <button
                type="button"
                onClick={() => setAuthMode('register')}
                className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                  authMode === 'register'
                    ? 'bg-white text-stone-900 shadow-xs'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                Đăng Ký Thành Viên Mới (+500đ)
              </button>
              <button
                type="button"
                onClick={() => setAuthMode('login')}
                className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                  authMode === 'login'
                    ? 'bg-white text-stone-900 shadow-xs'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                Đã Có Tài Khoản
              </button>
            </div>

            <form onSubmit={handleAuthSubmit} className="space-y-4">
              {authMode === 'register' && (
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Họ và Tên *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-stone-400 absolute left-3 top-2.5" />
                    <input
                      type="text"
                      required
                      value={nameInput}
                      onChange={(e) => setNameInput(e.target.value)}
                      placeholder="Ví dụ: Hoàng An"
                      className="w-full pl-9 pr-3 py-2 text-xs border border-stone-300 rounded-lg focus:outline-none focus:border-amber-600 bg-white"
                    />
                  </div>
                </div>
              )}

              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  Số điện thoại *
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-stone-400 absolute left-3 top-2.5" />
                  <input
                    type="tel"
                    required
                    value={phoneInput}
                    onChange={(e) => setPhoneInput(e.target.value)}
                    placeholder="Ví dụ: 0779072980"
                    className="w-full pl-9 pr-3 py-2 text-xs border border-stone-300 rounded-lg focus:outline-none focus:border-amber-600 bg-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  Mật khẩu *
                </label>
                <div className="relative">
                  <Lock className="w-4 h-4 text-stone-400 absolute left-3 top-2.5" />
                  <input
                    type="password"
                    required
                    value={passwordInput}
                    onChange={(e) => setPasswordInput(e.target.value)}
                    placeholder="Nhập mật khẩu"
                    className="w-full pl-9 pr-3 py-2 text-xs border border-stone-300 rounded-lg focus:outline-none focus:border-amber-600 bg-white"
                  />
                </div>
              </div>

              <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 text-xs text-stone-700 space-y-1">
                <div className="font-semibold text-amber-900">Chính sách điểm thưởng:</div>
                <p className="text-[11px]">
                  Mỗi 10.000₫ mua sắm = 1 GlowPoint. Điểm dùng để trừ tiền trực tiếp hoặc đổi quà độc quyền không giới hạn thời gian.
                </p>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-stone-900 hover:bg-stone-800 text-white text-xs font-bold rounded-xl transition-all cursor-pointer shadow-md"
              >
                {authMode === 'register' ? 'Đăng Ký & Nhận 500 Điểm' : 'Đăng Nhập Vào DermaGlow'}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
