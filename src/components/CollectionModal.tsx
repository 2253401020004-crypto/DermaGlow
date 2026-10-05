import React, { useState } from 'react';
import { X, Layers, Sparkles, Check, ArrowRight } from 'lucide-react';
import { COLLECTIONS } from '../data/dermaData';

interface CollectionModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialCollectionId?: string;
  onSelectCollectionToShop: () => void;
}

export const CollectionModal: React.FC<CollectionModalProps> = ({
  isOpen,
  onClose,
  initialCollectionId,
  onSelectCollectionToShop,
}) => {
  const [selectedId, setSelectedId] = useState(initialCollectionId || COLLECTIONS[0].id);

  if (!isOpen) return null;

  const current = COLLECTIONS.find((c) => c.id === selectedId) || COLLECTIONS[0];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/65 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-[#FAF9F6] rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-stone-200 animate-in fade-in zoom-in-95 duration-200 relative text-left">
        <button
          type="button"
          onClick={onClose}
          aria-label="Đóng bộ sưu tập"
          className="absolute top-5 right-5 p-2 text-stone-500 hover:text-stone-950 bg-stone-100 hover:bg-stone-200 rounded-full transition-colors cursor-pointer shadow-xs"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-6">
          <div className="flex items-center gap-2 text-xs font-semibold text-rose-800 uppercase tracking-wider">
            <Layers className="w-4 h-4 text-rose-700" />
            <span>Ngôn Ngữ Thiết Kế Đương Đại</span>
          </div>
          <h3 className="font-serif text-2xl font-bold text-stone-900 mt-1">
            Bộ Sưu Tập Hoàn Thiện DermaGlow
          </h3>
          <p className="text-xs text-stone-600 mt-1">
            Mỗi phiên bản là một bản giao hưởng giữa công nghệ quang học chính xác và kỹ nghệ gia công kim loại đỉnh cao.
          </p>
        </div>

        {/* Collection Selector Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6">
          {COLLECTIONS.map((c) => (
            <button
              key={c.id}
              type="button"
              onClick={() => setSelectedId(c.id)}
              className={`p-2.5 rounded-xl border text-center transition-all cursor-pointer ${
                selectedId === c.id
                  ? 'border-amber-700 bg-white shadow-xs font-bold text-stone-900 ring-1 ring-amber-700'
                  : 'border-stone-200 bg-stone-50 text-stone-600 hover:bg-white'
              }`}
            >
              <div
                className="w-3.5 h-3.5 rounded-full mx-auto mb-1.5 border border-black/10"
                style={{ backgroundColor: c.accentColor }}
              />
              <span className="text-xs truncate block">{c.title.split(' ')[0]} {c.title.split(' ')[1]}</span>
            </button>
          ))}
        </div>

        {/* Selected Collection Presentation */}
        <div className="p-6 rounded-2xl bg-white border border-stone-200 shadow-xs space-y-4">
          <div className="flex justify-between items-start">
            <div>
              <span className="text-xs text-amber-800 font-semibold uppercase tracking-wider">
                {current.subtitle}
              </span>
              <h4 className="font-serif text-xl font-bold text-stone-900 mt-0.5">
                {current.title}
              </h4>
            </div>
            <div
              className="w-8 h-8 rounded-full border border-stone-300 shadow-inner"
              style={{ backgroundColor: current.accentColor }}
            />
          </div>

          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
            {current.description}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3 border-t border-stone-100 text-xs">
            <div className="p-3 bg-stone-50 rounded-xl">
              <span className="text-stone-500 block mb-1">Vật liệu cấu thành:</span>
              <span className="font-semibold text-stone-900">{current.material}</span>
            </div>
            <div className="p-3 bg-stone-50 rounded-xl">
              <span className="text-stone-500 block mb-1">Kỹ thuật hoàn thiện:</span>
              <span className="font-semibold text-stone-900">{current.finishing}</span>
            </div>
          </div>
        </div>

        <div className="mt-6 flex justify-end gap-3">
          <button
            type="button"
            onClick={onClose}
            className="py-2.5 px-4 bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-semibold rounded-xl cursor-pointer"
          >
            Đóng
          </button>
          <button
            type="button"
            onClick={() => {
              onClose();
              onSelectCollectionToShop();
            }}
            className="py-2.5 px-5 bg-stone-900 hover:bg-stone-800 text-white text-xs font-semibold rounded-xl flex items-center gap-1.5 cursor-pointer shadow-xs"
          >
            <span>Xem Các Mẫu Gương Thuộc Bộ Sưu Tập</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
