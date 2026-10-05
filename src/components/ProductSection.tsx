import React, { useState } from 'react';
import { ShoppingBag, Star, Check, ArrowRight, ShieldCheck, Sparkles, CheckCircle2 } from 'lucide-react';
import { PRODUCTS, Product } from '../data/dermaData';

interface ProductSectionProps {
  onAddToCart: (product: Product, selectedColor: string, selectedSize?: string) => void;
  onBuyNow: (product: Product, selectedColor: string, selectedSize?: string) => void;
}

export const ProductSection: React.FC<ProductSectionProps> = ({ onAddToCart, onBuyNow }) => {
  const [selectedColors, setSelectedColors] = useState<Record<string, string>>({
    'dermaglow-luna': PRODUCTS[0].colors[0].name,
    'dermaglow-edge': PRODUCTS[1].colors[0].name,
    'dermaglow-premium-subscription': PRODUCTS[2].colors[0].name,
    'dermaglow-combo-vip': PRODUCTS[3].colors[0].name,
  });

  const [selectedSizes, setSelectedSizes] = useState<Record<string, string>>({
    'dermaglow-luna': PRODUCTS[0].sizes ? PRODUCTS[0].sizes[0].name : '',
    'dermaglow-edge': PRODUCTS[1].sizes ? PRODUCTS[1].sizes[0].name : '',
  });

  const [activeCategory, setActiveCategory] = useState<'all' | 'mirror' | 'subscription' | 'combo'>('all');

  const handleColorChange = (productId: string, colorName: string) => {
    setSelectedColors((prev) => ({ ...prev, [productId]: colorName }));
  };

  const handleSizeChange = (productId: string, sizeName: string) => {
    setSelectedSizes((prev) => ({ ...prev, [productId]: sizeName }));
  };

  const filteredProducts = activeCategory === 'all'
    ? PRODUCTS
    : PRODUCTS.filter((p) => p.category === activeCategory);

  return (
    <section id="products" className="py-16 lg:py-24 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-900 block mb-1">
              <span>Bảng Giá & Dòng Sản Phẩm Chính Thức</span>
              <span>·</span>
              <span className="text-stone-500 font-normal">Năm 2026</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-950 tracking-tight">
              Sản Phẩm DermaGlow Mirror
            </h2>
            <p className="text-stone-600 text-sm mt-2 max-w-2xl">
              Phát triển 2 phiên bản phần cứng <strong className="text-stone-900 font-semibold">DermaGlow Luna (mặt tròn)</strong> và <strong className="text-stone-900 font-semibold">DermaGlow Edge (mặt chữ nhật)</strong> với mức giá tiếp cận tối ưu 1.500.000 VNĐ, kết hợp mô hình thuê bao số Freemium 50.000 VNĐ/tháng.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-1 p-1 bg-stone-100 rounded-xl self-start md:self-auto">
            <button
              type="button"
              onClick={() => setActiveCategory('all')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                activeCategory === 'all'
                  ? 'bg-white text-stone-900 shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Tất Cả
            </button>
            <button
              type="button"
              onClick={() => setActiveCategory('mirror')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                activeCategory === 'mirror'
                  ? 'bg-white text-stone-900 shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Gương Luna & Edge
            </button>
            <button
              type="button"
              onClick={() => setActiveCategory('subscription')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                activeCategory === 'subscription'
                  ? 'bg-white text-stone-900 shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Gói Số Premium (50k)
            </button>
            <button
              type="button"
              onClick={() => setActiveCategory('combo')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                activeCategory === 'combo'
                  ? 'bg-white text-stone-900 shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Combo Early Bird
            </button>
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => {
            const currentColor = selectedColors[product.id] || product.colors[0]?.name;
            const currentSizeName = selectedSizes[product.id] || (product.sizes ? product.sizes[0].name : '');
            const selectedSizeObj = product.sizes?.find((s) => s.name === currentSizeName);
            const currentPrice = selectedSizeObj ? selectedSizeObj.price : product.price;

            return (
              <div
                key={product.id}
                className="group rounded-2xl bg-[#FAF9F6] border border-stone-200 overflow-hidden flex flex-col justify-between hover:border-amber-400 hover:shadow-lg transition-all duration-300"
              >
                {/* Product Image Area */}
                <div className="relative aspect-4/3 bg-stone-100 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />

                  {/* Badges */}
                  <div className="absolute top-3 left-3 flex flex-col gap-1">
                    {product.isBestSeller && (
                      <span className="bg-amber-900 text-white text-[11px] font-semibold px-2 py-0.5 rounded shadow-xs">
                        Ưa chuộng nhất
                      </span>
                    )}
                    {product.shape === 'round' && product.category === 'mirror' && (
                      <span className="bg-white/95 text-stone-900 text-[10px] font-semibold px-2 py-0.5 rounded shadow-xs border border-stone-200">
                        Mặt Tròn Tinh Tế
                      </span>
                    )}
                    {product.shape === 'rectangle' && (
                      <span className="bg-stone-900 text-white text-[10px] font-semibold px-2 py-0.5 rounded shadow-xs">
                        Mặt Chữ Nhật Cá Tính
                      </span>
                    )}
                  </div>

                  <div className="absolute bottom-2.5 right-2.5 bg-white/90 backdrop-blur-xs px-2 py-0.5 rounded text-[11px] font-semibold text-stone-800 flex items-center gap-1 shadow-xs">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-500" />
                    <span>{product.rating}</span>
                    <span className="text-stone-500 text-[10px]">({product.reviewsCount})</span>
                  </div>
                </div>

                {/* Details Content */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-3.5 text-left">
                  <div>
                    <h3 className="font-serif text-lg font-bold text-stone-950 group-hover:text-amber-800 transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-xs text-stone-600 mt-1 line-clamp-2">
                      {product.subtitle}
                    </p>

                    {/* Size Selector if mirror has sizes */}
                    {product.sizes && (
                      <div className="mt-3 pt-2.5 border-t border-stone-200/60">
                        <span className="text-[11px] text-stone-500 block mb-1 font-medium">
                          Chọn kích thước:
                        </span>
                        <div className="grid grid-cols-2 gap-1.5">
                          {product.sizes.map((s) => (
                            <button
                              key={s.name}
                              type="button"
                              onClick={() => handleSizeChange(product.id, s.name)}
                              className={`px-2 py-1 rounded-md text-[11px] font-medium border transition-colors cursor-pointer text-center ${
                                currentSizeName === s.name
                                  ? 'bg-stone-900 text-white border-stone-900'
                                  : 'bg-white text-stone-700 border-stone-200 hover:border-stone-400'
                              }`}
                            >
                              <span className="block font-semibold">{s.name}</span>
                              <span className="text-[9px] opacity-80">{s.dimension}</span>
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Color selection swatches */}
                    <div className="mt-3 pt-2.5 border-t border-stone-200/60">
                      <div className="flex items-center justify-between text-[11px] mb-1.5">
                        <span className="text-stone-500">Màu sắc:</span>
                        <span className="font-semibold text-stone-800 truncate max-w-[140px] text-right">{currentColor}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        {product.colors.map((c) => (
                          <button
                            key={c.name}
                            type="button"
                            onClick={() => handleColorChange(product.id, c.name)}
                            aria-label={`Chọn màu ${c.name}`}
                            className={`w-5 h-5 rounded-full border-2 transition-all cursor-pointer flex items-center justify-center ${
                              currentColor === c.name
                                ? 'border-stone-900 ring-2 ring-amber-300'
                                : 'border-stone-300 hover:border-stone-500'
                            }`}
                            style={{ backgroundColor: c.hex }}
                          >
                            {currentColor === c.name && (
                              <Check className="w-2.5 h-2.5 text-stone-900 drop-shadow-xs" />
                            )}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Key Specs callouts */}
                    <div className="mt-3 space-y-1 text-[11px] text-stone-600">
                      {product.specs.slice(0, 3).map((spec, idx) => (
                        <div key={idx} className="flex justify-between py-0.5 border-b border-stone-100">
                          <span className="text-stone-400">{spec.label}:</span>
                          <span className="font-medium text-stone-800 text-right truncate max-w-[55%]">
                            {spec.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Pricing and Action Buttons */}
                  <div className="pt-3 border-t border-stone-200">
                    <div className="flex items-baseline justify-between mb-3">
                      <div>
                        <span className="text-base sm:text-lg font-bold text-stone-950 tabular-nums">
                          {currentPrice.toLocaleString('vi-VN')}₫
                        </span>
                        {product.originalPrice && (
                          <span className="ml-1.5 text-xs text-stone-400 line-through tabular-nums">
                            {product.originalPrice.toLocaleString('vi-VN')}₫
                          </span>
                        )}
                        {product.category === 'subscription' && (
                          <span className="text-xs text-stone-500 ml-1">/tháng</span>
                        )}
                      </div>
                      <span className="text-[10px] text-emerald-700 font-semibold bg-emerald-50 px-1.5 py-0.5 rounded">
                        Có sẵn
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-1.5">
                      <button
                        type="button"
                        onClick={() => onAddToCart(product, currentColor, currentSizeName)}
                        className="py-2 px-2.5 bg-white border border-stone-300 hover:border-stone-900 text-stone-900 text-xs font-semibold rounded-lg flex items-center justify-center gap-1 transition-colors cursor-pointer"
                      >
                        <ShoppingBag className="w-3.5 h-3.5" />
                        <span>Thêm Giỏ</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => onBuyNow(product, currentColor, currentSizeName)}
                        className="py-2 px-2.5 bg-stone-900 hover:bg-stone-800 text-white text-xs font-semibold rounded-lg flex items-center justify-center gap-1 transition-colors cursor-pointer shadow-xs"
                      >
                        <span>Mua Ngay</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Freemium Model Comparison Table */}
        <div className="rounded-2xl bg-[#FAF9F6] border border-stone-200 p-6 sm:p-8 text-left">
          <div className="max-w-2xl mb-6">
            <span className="text-xs font-semibold uppercase tracking-wider text-amber-900 block mb-1">
              Mô Hình Kép Linh Hoạt
            </span>
            <h3 className="font-serif text-2xl font-bold text-stone-950">
              So Sánh Phiên Bản Free (Mặc Định) và Phiên Bản Premium (Trả Phí)
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 mt-1">
              Khách hàng sở hữu gương DermaGlow được sử dụng miễn phí trọn đời các tính năng quét cơ bản, đồng thời có thể linh hoạt nâng cấp gói dịch vụ số chỉ với 50.000 VNĐ/tháng khi có nhu cầu.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left border-collapse">
              <thead>
                <tr className="border-b border-stone-300 bg-stone-100/80">
                  <th className="py-3 px-4 font-bold text-stone-900 w-1/4">Tiêu chí so sánh</th>
                  <th className="py-3 px-4 font-bold text-stone-900 w-3/8">Phiên bản Free (Mặc định kèm gương)</th>
                  <th className="py-3 px-4 font-bold text-amber-950 bg-amber-100/50 w-3/8">Phiên bản Premium (Trả phí In-App)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-200 text-stone-700 bg-white">
                <tr>
                  <td className="py-3 px-4 font-semibold text-stone-900">Chi phí sử dụng</td>
                  <td className="py-3 px-4 font-bold text-emerald-700">Miễn phí 0 VNĐ (đi kèm thiết bị phần cứng)</td>
                  <td className="py-3 px-4 font-bold text-amber-900 bg-amber-50/40">50.000 VNĐ / tháng (đăng ký linh hoạt)</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold text-stone-900">Phân tích tình trạng da</td>
                  <td className="py-3 px-4">Quét da cơ bản: loại da, độ tuổi sinh học, mụn, lỗ chân lông, nếp nhăn (~10 giây)</td>
                  <td className="py-3 px-4 bg-amber-50/40">Phân tích chuyên sâu: đo độ ẩm, độ đàn hồi, sắc tố da và tổn thương lớp hạ bì, biểu bì</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold text-stone-900">Tính năng Personal Color</td>
                  <td className="py-3 px-4 text-stone-400">Không hỗ trợ trên bản cơ bản</td>
                  <td className="py-3 px-4 font-semibold text-rose-900 bg-amber-50/40">
                    ✓ Nhận diện màu sắc da, tóc, mắt (Warm/Cool/Neutral); gợi ý layout makeup và outfit thời trang phù hợp
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold text-stone-900">Đề xuất routine & mỹ phẩm</td>
                  <td className="py-3 px-4">Nhắc nhở lịch chăm sóc da và gợi ý sản phẩm cơ bản</td>
                  <td className="py-3 px-4 bg-amber-50/40">Gợi ý quy trình cá nhân hóa; kiểm tra và đánh giá độ an toàn thành phần mỹ phẩm</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold text-stone-900">Hệ thống Đèn LED & App</td>
                  <td className="py-3 px-4">Đèn LED tự động cảm biến ánh sáng, xoay 360°; đồng bộ dữ liệu qua app</td>
                  <td className="py-3 px-4 bg-amber-50/40">Đầy đủ tính năng phần cứng bản Free + mở khóa toàn bộ thuật toán chuyên sâu trên App</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold text-stone-900">Mục đích sử dụng</td>
                  <td className="py-3 px-4">Phục vụ nhu cầu soi gương, trang điểm và theo dõi da hàng ngày đơn giản</td>
                  <td className="py-3 px-4 font-semibold text-stone-900 bg-amber-50/40">Đáp ứng nhu cầu chăm sóc da chuyên sâu, cá nhân hóa tối đa và tư vấn làm đẹp toàn diện</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};
