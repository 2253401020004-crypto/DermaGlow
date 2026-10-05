import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, ShieldCheck, Check, Sparkles } from 'lucide-react';
import { Product } from '../data/dermaData';

export interface CartItem {
  id: string; // unique item id
  product: Product;
  selectedColor: string;
  selectedSize?: string;
  quantity: number;
}

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onCheckoutSuccess: (orderInfo: { code: string; total: number; pointsEarned: number }) => void;
  appliedPromoCode: string | null;
  onApplyPromoCode: (code: string) => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onCheckoutSuccess,
  appliedPromoCode,
  onApplyPromoCode,
}) => {
  const [promoInput, setPromoInput] = useState(appliedPromoCode || '');
  const [promoError, setPromoError] = useState('');
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [customerAddress, setCustomerAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<'cod' | 'bank'>('cod');
  const [orderComplete, setOrderComplete] = useState<{ code: string; total: number; points: number } | null>(null);

  if (!isOpen) return null;

  const rawSubtotal = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  // Discount calculation based on marketing project plan
  let discountAmount = 0;
  if (appliedPromoCode === 'VIPEARLYBIRD') {
    discountAmount = Math.round(rawSubtotal * 0.3); // 30% discount for Early Bird
  } else if (appliedPromoCode === 'TRADEIN40') {
    discountAmount = Math.round(rawSubtotal * 0.3); // 30% Trade-in rebate
  } else if (appliedPromoCode === 'PRO50K') {
    discountAmount = Math.min(50000, rawSubtotal);
  } else if (appliedPromoCode === 'TRUETONE2026') {
    discountAmount = Math.min(300000, rawSubtotal * 0.2);
  } else if (appliedPromoCode) {
    discountAmount = Math.round(rawSubtotal * 0.1);
  }

  const finalTotal = Math.max(0, rawSubtotal - discountAmount);
  const pointsEarned = Math.floor(finalTotal * 0.05 / 1000); // 5% cashback as points

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    setPromoError('');
    const code = promoInput.trim().toUpperCase();
    if (!code) return;

    if (code === 'VIPEARLYBIRD' || code === 'TRADEIN40' || code === 'PRO50K' || code === 'TRUETONE2026' || code === 'DERMAGLOW') {
      onApplyPromoCode(code);
    } else {
      setPromoError('Mã không hợp lệ. Hãy thử: VIPEARLYBIRD (giảm 30%) hoặc PRO50K');
    }
  };


  const handleProcessOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerName || !customerPhone || !customerAddress) return;

    const orderCode = `DG-${Math.floor(100000 + Math.random() * 900000)}`;
    const result = {
      code: orderCode,
      total: finalTotal,
      points: pointsEarned,
    };

    setOrderComplete(result);
    onCheckoutSuccess({
      code: orderCode,
      total: finalTotal,
      pointsEarned,
    });
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-stone-950/60 backdrop-blur-xs transition-opacity duration-300"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex">
        <aside className="w-screen max-w-md bg-[#FAF9F6] shadow-2xl flex flex-col justify-between border-l border-stone-200 animate-in slide-in-from-right duration-300">
          {/* Header */}
          <div className="p-6 border-b border-stone-200 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-stone-900" />
              <h2 className="font-serif text-xl font-bold text-stone-900">
                Giỏ Hàng Của Bạn
              </h2>
              <span className="text-xs text-stone-700 bg-stone-100 px-2 py-0.5 rounded-full font-semibold tabular-nums">
                {items.length}
              </span>
            </div>
            <button
              type="button"
              onClick={onClose}
              aria-label="Đóng giỏ hàng"
              className="p-2 text-stone-500 hover:text-stone-900 bg-stone-100 hover:bg-stone-200 rounded-full transition-colors cursor-pointer shadow-xs"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body Content */}
          <div className="flex-1 overflow-y-auto p-6">
            {orderComplete ? (
              /* Success Order State */
              <div className="py-8 text-center space-y-4">
                <div className="w-14 h-14 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto shadow-xs">
                  <Check className="w-7 h-7" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-stone-950">
                  Đặt Hàng Thành Công!
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed max-w-xs mx-auto">
                  Cảm ơn bạn đã lựa chọn gương thông minh DermaGlow. Chuyên viên chăm sóc khách hàng sẽ liên hệ xác nhận trong 15 phút.
                </p>

                <div className="p-4 rounded-xl bg-white border border-stone-200 text-left space-y-2 text-xs">
                  <div className="flex justify-between">
                    <span className="text-stone-500">Mã đơn hàng:</span>
                    <span className="font-mono font-bold text-stone-900">{orderComplete.code}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-stone-500">Tổng thanh toán:</span>
                    <span className="font-bold text-amber-900 tabular-nums">
                      {orderComplete.total.toLocaleString('vi-VN')}₫
                    </span>
                  </div>
                  <div className="flex justify-between text-emerald-700 font-medium">
                    <span>Điểm GlowPoints tích lũy:</span>
                    <span className="font-bold tabular-nums">+{orderComplete.points.toLocaleString('vi-VN')} điểm</span>
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    type="button"
                    onClick={() => {
                      setOrderComplete(null);
                      setIsCheckingOut(false);
                      onClose();
                    }}
                    className="w-full py-3 bg-stone-900 hover:bg-stone-800 text-white text-xs font-semibold rounded-xl cursor-pointer"
                  >
                    Tiếp Tục Mua Sắm
                  </button>
                </div>
              </div>
            ) : items.length === 0 ? (
              /* Empty Cart State */
              <div className="py-16 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-stone-100 flex items-center justify-center mx-auto text-stone-400">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <h3 className="text-base font-semibold text-stone-900">
                  Giỏ hàng của bạn đang trống
                </h3>
                <p className="text-xs text-stone-500 max-w-xs mx-auto">
                  Khám phá các phiên bản gương thông minh DermaGlow tích hợp AI phân tích da và Personal Color ngay hôm nay.
                </p>
                <button
                  type="button"
                  onClick={onClose}
                  className="mt-2 py-2 px-4 bg-stone-900 text-white text-xs font-semibold rounded-xl hover:bg-stone-800 cursor-pointer"
                >
                  Xem Sản Phẩm
                </button>
              </div>
            ) : isCheckingOut ? (
              /* Checkout Form View */
              <form onSubmit={handleProcessOrder} className="space-y-4 text-left">
                <div className="flex items-center justify-between pb-2 border-b border-stone-200">
                  <h3 className="text-sm font-bold text-stone-900">
                    Thông Tin Giao Hàng & Thanh Toán
                  </h3>
                  <button
                    type="button"
                    onClick={() => setIsCheckingOut(false)}
                    className="text-xs text-amber-800 hover:underline cursor-pointer"
                  >
                    ← Quay lại giỏ
                  </button>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Họ và tên người nhận *
                  </label>
                  <input
                    type="text"
                    required
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    placeholder="Ví dụ: Hoàng An"
                    className="w-full px-3 py-2 text-xs border border-stone-300 rounded-lg focus:outline-none focus:border-amber-600 bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Số điện thoại liên hệ *
                  </label>
                  <input
                    type="tel"
                    required
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    placeholder="Ví dụ: 0779072980"
                    className="w-full px-3 py-2 text-xs border border-stone-300 rounded-lg focus:outline-none focus:border-amber-600 bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Địa chỉ nhận hàng (Số nhà, đường, quận/huyện) *
                  </label>
                  <textarea
                    required
                    rows={2}
                    value={customerAddress}
                    onChange={(e) => setCustomerAddress(e.target.value)}
                    placeholder="Ví dụ: 123 Quốc lộ 13, Hiệp Bình Chánh, TP. Thủ Đức"
                    className="w-full px-3 py-2 text-xs border border-stone-300 rounded-lg focus:outline-none focus:border-amber-600 bg-white resize-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-2">
                    Hình thức thanh toán
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setPaymentMethod('cod')}
                      className={`p-2.5 rounded-lg border text-left text-xs transition-all cursor-pointer ${
                        paymentMethod === 'cod'
                          ? 'border-amber-700 bg-amber-50/50 font-semibold text-stone-900'
                          : 'border-stone-200 bg-white text-stone-600'
                      }`}
                    >
                      <div className="font-semibold">Thanh toán COD</div>
                      <div className="text-[10px] text-stone-500">Kiểm tra khi nhận hàng</div>
                    </button>

                    <button
                      type="button"
                      onClick={() => setPaymentMethod('bank')}
                      className={`p-2.5 rounded-lg border text-left text-xs transition-all cursor-pointer ${
                        paymentMethod === 'bank'
                          ? 'border-amber-700 bg-amber-50/50 font-semibold text-stone-900'
                          : 'border-stone-200 bg-white text-stone-600'
                      }`}
                    >
                      <div className="font-semibold">Chuyển khoản QR</div>
                      <div className="text-[10px] text-stone-500">Quét mã VietQR tiện lợi</div>
                    </button>
                  </div>
                </div>

                <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-900 space-y-1">
                  <div className="font-semibold flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Đặc quyền kèm theo đơn hàng:</span>
                  </div>
                  <p className="text-[11px] text-stone-700">
                    Tặng gói bảo hành 24 tháng 1-đổi-1 tận nhà & 1 bộ quà tặng trị giá 2.500.000₫.
                  </p>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-stone-900 hover:bg-stone-800 text-white text-xs font-bold rounded-xl transition-all cursor-pointer shadow-md mt-2"
                >
                  Xác Nhận Đặt Hàng ({finalTotal.toLocaleString('vi-VN')}₫)
                </button>
              </form>
            ) : (
              /* Item List View */
              <div className="space-y-4">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="p-3.5 bg-white rounded-xl border border-stone-200/90 flex gap-3 shadow-xs"
                  >
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      referrerPolicy="no-referrer"
                      className="w-18 h-18 rounded-lg object-cover shrink-0 border border-stone-100"
                    />

                    <div className="flex-1 min-w-0 flex flex-col justify-between">
                      <div>
                        <div className="flex justify-between items-start">
                          <h4 className="text-xs font-bold text-stone-900 truncate">
                            {item.product.name}
                          </h4>
                          <button
                            type="button"
                            onClick={() => onRemoveItem(item.id)}
                            className="text-stone-400 hover:text-rose-600 p-1 cursor-pointer transition-colors"
                            title="Xóa sản phẩm"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                        <span className="text-[11px] text-stone-500 block truncate">
                          Màu: {item.selectedColor}
                        </span>
                      </div>

                      <div className="flex justify-between items-center mt-2">
                        <span className="text-xs font-bold text-stone-950 tabular-nums">
                          {(item.product.price * item.quantity).toLocaleString('vi-VN')}₫
                        </span>

                        {/* Quantity Stepper */}
                        <div className="flex items-center border border-stone-200 rounded-lg overflow-hidden bg-stone-50">
                          <button
                            type="button"
                            onClick={() => onUpdateQuantity(item.id, -1)}
                            className="p-1 hover:bg-stone-200 text-stone-600 transition-colors cursor-pointer"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-2 text-xs font-semibold text-stone-800 tabular-nums">
                            {item.quantity}
                          </span>
                          <button
                            type="button"
                            onClick={() => onUpdateQuantity(item.id, 1)}
                            className="p-1 hover:bg-stone-200 text-stone-600 transition-colors cursor-pointer"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Promo Code Input */}
                <form onSubmit={handleApplyPromo} className="pt-2">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={promoInput}
                      onChange={(e) => setPromoInput(e.target.value)}
                      placeholder="Mã ưu đãi (vd: TRUETONE2026)"
                      className="flex-1 px-3 py-2 text-xs border border-stone-300 rounded-lg focus:outline-none focus:border-amber-600 uppercase bg-white"
                    />
                    <button
                      type="submit"
                      className="px-3 py-2 bg-stone-900 text-white text-xs font-semibold rounded-lg hover:bg-stone-800 transition-colors cursor-pointer"
                    >
                      Áp Dụng
                    </button>
                  </div>
                  {appliedPromoCode && (
                    <p className="text-[11px] text-emerald-700 font-medium mt-1">
                      ✓ Đã áp dụng mã ưu đãi: {appliedPromoCode}
                    </p>
                  )}
                  {promoError && (
                    <p className="text-[11px] text-rose-600 font-medium mt-1">
                      {promoError}
                    </p>
                  )}
                </form>
              </div>
            )}
          </div>

          {/* Footer Subtotal & Action */}
          {!orderComplete && items.length > 0 && !isCheckingOut && (
            <div className="p-6 border-t border-stone-200 bg-white space-y-3">
              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between text-stone-600">
                  <span>Tạm tính:</span>
                  <span className="font-semibold text-stone-900 tabular-nums">
                    {rawSubtotal.toLocaleString('vi-VN')}₫
                  </span>
                </div>
                {discountAmount > 0 && (
                  <div className="flex justify-between text-rose-700">
                    <span>Ưu đãi áp dụng:</span>
                    <span className="font-semibold tabular-nums">
                      -{discountAmount.toLocaleString('vi-VN')}₫
                    </span>
                  </div>
                )}
                <div className="flex justify-between text-emerald-700">
                  <span>Phí vận chuyển:</span>
                  <span className="font-semibold">Miễn phí toàn quốc</span>
                </div>
                <div className="flex justify-between text-sm font-bold text-stone-950 pt-2 border-t border-stone-100">
                  <span>Tổng cộng:</span>
                  <span className="text-base text-amber-900 tabular-nums">
                    {finalTotal.toLocaleString('vi-VN')}₫
                  </span>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setIsCheckingOut(true)}
                className="w-full py-3 bg-stone-900 hover:bg-stone-800 text-white text-xs font-bold rounded-xl flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md"
              >
                <span>Tiến Hành Đặt Hàng</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-center justify-center gap-1.5 text-[11px] text-stone-500 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Bảo mật đơn hàng 100% · Hỗ trợ kiểm tra khi nhận</span>
              </div>
            </div>
          )}
        </aside>
      </div>
    </div>
  );
};
