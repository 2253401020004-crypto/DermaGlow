import React, { useState } from 'react';
import { X, BookOpen, CheckCircle, Sparkles, Cpu, Eye, Palette, Activity } from 'lucide-react';
import { HOW_IT_WORKS_STEPS } from '../data/dermaData';

interface UserGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const UserGuideModal: React.FC<UserGuideModalProps> = ({ isOpen, onClose }) => {
  const [activeStep, setActiveStep] = useState(0);

  if (!isOpen) return null;

  const stepIcons = [
    <Eye className="w-5 h-5 text-amber-700" />,
    <Activity className="w-5 h-5 text-blue-700" />,
    <Palette className="w-5 h-5 text-rose-700" />,
    <Sparkles className="w-5 h-5 text-emerald-700" />
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/65 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-[#FAF9F6] rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-stone-200 animate-in fade-in zoom-in-95 duration-200 relative text-left">
        <button
          type="button"
          onClick={onClose}
          aria-label="Đóng hướng dẫn"
          className="absolute top-5 right-5 p-2 text-stone-500 hover:text-stone-950 bg-stone-100 hover:bg-stone-200 rounded-full transition-colors cursor-pointer shadow-xs"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-6">
          <div className="flex items-center gap-2 text-xs font-semibold text-emerald-800 uppercase tracking-wider">
            <BookOpen className="w-4 h-4 text-emerald-700" />
            <span>Cẩm Nang Vận Hành Khoa Học</span>
          </div>
          <h3 className="font-serif text-2xl font-bold text-stone-900 mt-1">
            Hướng Dẫn Sử Dụng Gương Thông Minh DermaGlow
          </h3>
          <p className="text-xs text-stone-600 mt-1">
            Quy trình 4 bước chuẩn phòng Lab giúp tối ưu hóa kết quả chăm sóc da và trang phục mỗi ngày.
          </p>
        </div>

        {/* Step Selector Pills */}
        <div className="grid grid-cols-4 gap-2 mb-6">
          {HOW_IT_WORKS_STEPS.map((s, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setActiveStep(idx)}
              className={`p-2.5 rounded-xl border text-center transition-all cursor-pointer ${
                activeStep === idx
                  ? 'border-stone-900 bg-white shadow-xs font-bold text-stone-900 ring-1 ring-stone-900'
                  : 'border-stone-200 bg-stone-50 text-stone-600 hover:bg-white'
              }`}
            >
              <div className="text-[10px] font-mono text-stone-400">{s.stepNumber}</div>
              <div className="text-xs truncate font-medium mt-0.5">
                {idx === 0 ? 'Khởi Động' : idx === 1 ? 'Quét 3D' : idx === 2 ? 'Personal Color' : 'Routine AI'}
              </div>
            </button>
          ))}
        </div>

        {/* Active Step Content */}
        <div className="p-6 rounded-2xl bg-white border border-stone-200 shadow-xs space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-stone-100 flex items-center justify-center">
              {stepIcons[activeStep]}
            </div>
            <div>
              <span className="text-xs font-mono font-bold text-stone-500">
                BƯỚC {HOW_IT_WORKS_STEPS[activeStep].stepNumber}
              </span>
              <h4 className="text-lg font-bold text-stone-900">
                {HOW_IT_WORKS_STEPS[activeStep].title}
              </h4>
            </div>
          </div>

          <p className="text-sm text-stone-700 leading-relaxed">
            {HOW_IT_WORKS_STEPS[activeStep].description}
          </p>

          <div className="p-3.5 bg-stone-50 rounded-xl border border-stone-200/80 text-xs text-stone-700 flex items-start gap-2.5">
            <Cpu className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
            <div>
              <strong className="text-stone-900 block mb-0.5">Công nghệ lõi:</strong>
              <span>{HOW_IT_WORKS_STEPS[activeStep].techDetail}</span>
            </div>
          </div>
        </div>

        {/* Practical tips checklist */}
        <div className="mt-5 p-4 rounded-xl bg-amber-50/60 border border-amber-200 text-xs text-stone-700 space-y-1.5">
          <span className="font-bold text-amber-950 block">Mẹo chuyên gia để có kết quả chính xác nhất:</span>
          <ul className="space-y-1">
            <li className="flex items-center gap-2">
              <CheckCircle className="w-3.5 h-3.5 text-amber-700 shrink-0" />
              <span>Đứng cách mặt gương từ 40 - 50cm trong điều kiện ánh sáng phòng dịu.</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-3.5 h-3.5 text-amber-700 shrink-0" />
              <span>Nên thực hiện bài kiểm tra da vào mỗi buổi sáng sau khi thức dậy 10 phút.</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-3.5 h-3.5 text-amber-700 shrink-0" />
              <span>Tẩy trang sạch để hệ thống camera đo lường chính xác sắc tố Melanin tự nhiên.</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
