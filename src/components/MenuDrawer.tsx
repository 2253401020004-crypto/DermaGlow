import React from 'react';
import { X, Sparkles, Box, Layers, BookOpen, Building2, Phone, MapPin, ChevronRight, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO, COLLECTIONS, PRODUCTS } from '../data/dermaData';

interface MenuDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectSection: (sectionId: string) => void;
  onOpenGuideModal: () => void;
  onOpenCompanyModal: () => void;
  onOpenCollectionModal: (collectionId?: string) => void;
}

export const MenuDrawer: React.FC<MenuDrawerProps> = ({
  isOpen,
  onClose,
  onSelectSection,
  onOpenGuideModal,
  onOpenCompanyModal,
  onOpenCollectionModal,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-stone-950/60 backdrop-blur-xs transition-opacity duration-300"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 left-0 max-w-full flex">
        <aside className="w-screen max-w-md bg-[#FAF9F6] shadow-2xl flex flex-col justify-between border-r border-stone-200 animate-in slide-in-from-left duration-300">
          {/* Header */}
          <div className="p-6 border-b border-stone-200 flex items-center justify-between">
            <div>
              <span className="font-serif text-2xl font-bold tracking-tight text-stone-900 block">
                DermaGlow
              </span>
              <p className="text-xs text-stone-700 mt-0.5">
                Mục lục danh mục chính
              </p>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="p-2 text-stone-500 hover:text-stone-900 bg-stone-100 hover:bg-stone-200 rounded-full transition-colors cursor-pointer shadow-xs"
              aria-label="Đóng mục lục"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Items (Requirement ii: Sản phẩm, Bộ sưu tập, Hướng dẫn sử dụng, Thông tin về doanh nghiệp) */}
          <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6">
            <div className="space-y-2">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-stone-700">
                Menu Điều Hướng
              </span>

              {/* 1. Sản Phẩm */}
              <div className="border border-stone-200/90 rounded-xl bg-white p-4 hover:border-amber-400 transition-colors">
                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    onSelectSection('products');
                  }}
                  className="w-full flex items-center justify-between text-left group cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-amber-50 text-amber-800 flex items-center justify-center">
                      <Box className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-stone-900 group-hover:text-amber-800 transition-colors">
                        1. Sản Phẩm
                      </h3>
                      <p className="text-xs text-stone-700">
                        Các phiên bản gương DermaGlow & Phụ kiện
                      </p>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-stone-400 group-hover:text-stone-800 transition-colors" />
                </button>

                <div className="mt-3 pt-3 border-t border-stone-100 flex flex-col gap-1.5 pl-12 text-xs text-stone-600">
                  {PRODUCTS.map((p) => (
                    <button
                      key={p.id}
                      type="button"
                      onClick={() => {
                        onClose();
                        onSelectSection('products');
                      }}
                      className="text-left hover:text-amber-800 transition-colors py-0.5 truncate cursor-pointer"
                    >
                      • {p.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* 2. Bộ Sưu Tập */}
              <div className="border border-stone-200/90 rounded-xl bg-white p-4 hover:border-amber-400 transition-colors">
                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    onOpenCollectionModal();
                  }}
                  className="w-full flex items-center justify-between text-left group cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-rose-50 text-rose-800 flex items-center justify-center">
                      <Layers className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-stone-900 group-hover:text-amber-800 transition-colors">
                        2. Bộ Sưu Tập
                      </h3>
                      <p className="text-xs text-stone-700">
                        Rose Gold Luxe, Obsidian Noir, Opal Pearl, Titanium
                      </p>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-stone-400 group-hover:text-stone-800 transition-colors" />
                </button>

                <div className="mt-3 pt-3 border-t border-stone-100 flex flex-wrap gap-1.5 pl-12">
                  {COLLECTIONS.map((c) => (
                    <button
                      key={c.id}
                      type="button"
                      onClick={() => {
                        onClose();
                        onOpenCollectionModal(c.id);
                      }}
                      className="text-[11px] px-2 py-0.5 rounded bg-stone-100 text-stone-700 hover:bg-amber-100 hover:text-amber-900 transition-colors cursor-pointer"
                    >
                      {c.title}
                    </button>
                  ))}
                </div>
              </div>

              {/* 3. Hướng Dẫn Sử Dụng */}
              <div className="border border-stone-200/90 rounded-xl bg-white p-4 hover:border-amber-400 transition-colors">
                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    onOpenGuideModal();
                  }}
                  className="w-full flex items-center justify-between text-left group cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-emerald-50 text-emerald-800 flex items-center justify-center">
                      <BookOpen className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-stone-900 group-hover:text-amber-800 transition-colors">
                        3. Hướng Dẫn Sử Dụng
                      </h3>
                      <p className="text-xs text-stone-700">
                        Quy trình 4 bước soi da & chẩn đoán Personal Color
                      </p>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-stone-400 group-hover:text-stone-800 transition-colors" />
                </button>
              </div>

              {/* 4. Thông Tin Về Doanh Nghiệp */}
              <div className="border border-stone-200/90 rounded-xl bg-white p-4 hover:border-amber-400 transition-colors">
                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    onOpenCompanyModal();
                  }}
                  className="w-full flex items-center justify-between text-left group cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-blue-50 text-blue-800 flex items-center justify-center">
                      <Building2 className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-stone-900 group-hover:text-amber-800 transition-colors">
                        4. Thông Tin Doanh Nghiệp
                      </h3>
                      <p className="text-xs text-stone-700">
                        Về DermaGlow, đội ngũ R&D và chứng nhận FDA/CE
                      </p>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-stone-400 group-hover:text-stone-800 transition-colors" />
                </button>
              </div>
            </div>

            {/* Quick Interactive Promo */}
            <div className="bg-gradient-to-br from-amber-50 via-stone-50 to-amber-100/50 p-4 rounded-xl border border-amber-200">
              <div className="flex items-center gap-2 text-amber-900 text-xs font-semibold mb-1">
                <Sparkles className="w-4 h-4" />
                <span>Trải Nghiệm AI Trực Tiếp</span>
              </div>
              <p className="text-xs text-stone-700 mb-3">
                Thử nghiệm phân tích da và xem bảng màu Personal Color mô phỏng ngay trên trình duyệt của bạn.
              </p>
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onSelectSection('ai-experience');
                }}
                className="w-full py-2 px-3 text-xs font-semibold text-white bg-stone-900 rounded-lg hover:bg-stone-800 transition-colors cursor-pointer text-center"
              >
                Mở Trình Giả Lập AI Mirror
              </button>
            </div>
          </div>

          {/* Footer Contact Info in Drawer */}
          <div className="p-6 border-t border-stone-200 bg-stone-50 text-xs text-stone-700 space-y-2">
            <div className="flex items-center gap-2 font-medium text-stone-900">
              <ShieldCheck className="w-4 h-4 text-amber-800" />
              <span>Chính sách bảo hành 24 tháng 1-đổi-1</span>
            </div>
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-stone-500 shrink-0 mt-0.5" />
              <span>{COMPANY_INFO.address}</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-stone-500 shrink-0" />
              <a href={`tel:${COMPANY_INFO.phone}`} className="hover:text-amber-800 font-semibold text-stone-900">
                {COMPANY_INFO.hotlineFormatted}
              </a>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};
