import React, { useState } from 'react';
import { X, Search, ArrowRight, Sparkles } from 'lucide-react';
import { PRODUCTS, EVENTS, CAMPAIGNS } from '../data/dermaData';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProduct: (productId: string) => void;
  onSelectSection: (sectionId: string) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectProduct,
  onSelectSection,
}) => {
  const [searchTerm, setSearchTerm] = useState('');

  if (!isOpen) return null;

  const query = searchTerm.toLowerCase().trim();

  const matchedProducts = query
    ? PRODUCTS.filter(
        (p) =>
          p.name.toLowerCase().includes(query) ||
          p.subtitle.toLowerCase().includes(query) ||
          p.highlightFeatures.some((f) => f.toLowerCase().includes(query))
      )
    : [];

  const matchedEvents = query
    ? EVENTS.filter(
        (e) =>
          e.title.toLowerCase().includes(query) ||
          e.description.toLowerCase().includes(query) ||
          e.tag.toLowerCase().includes(query)
      )
    : [];

  const matchedCampaigns = query
    ? CAMPAIGNS.filter(
        (c) =>
          c.title.toLowerCase().includes(query) ||
          c.summary.toLowerCase().includes(query) ||
          (c.code && c.code.toLowerCase().includes(query))
      )
    : [];

  const popularKeywords = [
    'DermaGlow Luna',
    'DermaGlow Edge',
    'Personal Color',
    'Gói Pro 50.000₫',
    'Embrace Your True Skin',
    'Đèn LED 360°'
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/65 backdrop-blur-xs flex items-start justify-center pt-20 p-4">
      <div className="bg-[#FAF9F6] rounded-2xl max-w-xl w-full p-6 shadow-2xl border border-stone-200 animate-in fade-in zoom-in-95 duration-200">
        <div className="flex items-center justify-between gap-3 pb-4 border-b border-stone-200">
          <div className="flex items-center gap-2 flex-1">
            <Search className="w-5 h-5 text-stone-500 shrink-0" />
            <input
              type="text"
              autoFocus
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Tìm gương AI, tính năng, sự kiện, từ khóa da liễu..."
              className="w-full text-sm bg-transparent border-none outline-none text-stone-900 placeholder:text-stone-400"
            />
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Đóng tìm kiếm"
            className="p-2 text-stone-500 hover:text-stone-950 bg-stone-100 hover:bg-stone-200 rounded-full transition-colors cursor-pointer shadow-xs"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Quick Suggestion Tags */}
        {!searchTerm && (
          <div className="py-4">
            <span className="text-xs font-semibold text-stone-500 uppercase tracking-wider block mb-2">
              Từ khóa tìm kiếm phổ biến:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {popularKeywords.map((kw, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setSearchTerm(kw)}
                  className="text-xs px-3 py-1.5 rounded-lg bg-white border border-stone-200 text-stone-700 hover:border-amber-500 hover:text-amber-900 transition-colors cursor-pointer"
                >
                  {kw}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Search Results */}
        {searchTerm && (
          <div className="py-4 max-h-[60vh] overflow-y-auto space-y-4">
            {matchedProducts.length === 0 &&
            matchedEvents.length === 0 &&
            matchedCampaigns.length === 0 ? (
              <div className="text-center py-8 text-stone-500 text-xs">
                Không tìm thấy kết quả phù hợp cho "{searchTerm}". Hãy thử với từ khóa khác như "Gương", "AI", "Color", "Showroom".
              </div>
            ) : (
              <>
                {matchedProducts.length > 0 && (
                  <div>
                    <span className="text-xs font-bold text-amber-900 uppercase block mb-2">
                      Sản Phẩm ({matchedProducts.length})
                    </span>
                    <div className="space-y-2">
                      {matchedProducts.map((p) => (
                        <div
                          key={p.id}
                          onClick={() => {
                            onClose();
                            onSelectProduct(p.id);
                          }}
                          className="p-3 bg-white rounded-xl border border-stone-200 hover:border-amber-400 flex items-center justify-between cursor-pointer transition-colors"
                        >
                          <div className="flex items-center gap-3">
                            <img
                              src={p.image}
                              alt={p.name}
                              referrerPolicy="no-referrer"
                              className="w-10 h-10 rounded-lg object-cover"
                            />
                            <div>
                              <div className="text-xs font-bold text-stone-900">{p.name}</div>
                              <div className="text-[11px] text-amber-900 font-semibold tabular-nums">
                                {p.price.toLocaleString('vi-VN')}₫
                              </div>
                            </div>
                          </div>
                          <ArrowRight className="w-4 h-4 text-stone-400" />
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {matchedEvents.length > 0 && (
                  <div>
                    <span className="text-xs font-bold text-rose-900 uppercase block mb-2">
                      Sự Kiện Thương Hiệu ({matchedEvents.length})
                    </span>
                    <div className="space-y-2">
                      {matchedEvents.map((e) => (
                        <div
                          key={e.id}
                          onClick={() => {
                            onClose();
                            onSelectSection('events');
                          }}
                          className="p-3 bg-white rounded-xl border border-stone-200 hover:border-rose-300 cursor-pointer transition-colors"
                        >
                          <div className="text-xs font-bold text-stone-900">{e.title}</div>
                          <div className="text-[11px] text-stone-500 mt-0.5">{e.date} · {e.location}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {matchedCampaigns.length > 0 && (
                  <div>
                    <span className="text-xs font-bold text-emerald-900 uppercase block mb-2">
                      Chiến Dịch & Khuyến Mãi ({matchedCampaigns.length})
                    </span>
                    <div className="space-y-2">
                      {matchedCampaigns.map((c) => (
                        <div
                          key={c.id}
                          onClick={() => {
                            onClose();
                            onSelectSection('events');
                          }}
                          className="p-3 bg-white rounded-xl border border-stone-200 hover:border-emerald-300 cursor-pointer transition-colors"
                        >
                          <div className="text-xs font-bold text-stone-900">{c.title}</div>
                          <div className="text-[11px] text-stone-600 mt-0.5">{c.summary}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
