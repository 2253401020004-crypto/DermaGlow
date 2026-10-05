import React from 'react';
import { X, Building2, MapPin, Phone, Mail, Clock, ShieldCheck, CheckCircle2, Globe, Sparkles } from 'lucide-react';
import { COMPANY_INFO, BRAND_IDENTITY } from '../data/dermaData';

interface CompanyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CompanyModal: React.FC<CompanyModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/65 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-[#FAF9F6] rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-stone-200 animate-in fade-in zoom-in-95 duration-200 relative text-left">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-stone-400 hover:text-stone-700 rounded-lg hover:bg-stone-100 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-6">
          <div className="flex items-center gap-2 text-xs font-semibold text-amber-900 uppercase tracking-wider">
            <Building2 className="w-4 h-4 text-amber-700" />
            <span>Thông Tin Thương Hiệu</span>
          </div>
          <h3 className="font-serif text-2xl font-bold text-stone-900 mt-1">
            Về Thương Hiệu DermaGlow
          </h3>
          <p className="text-xs text-amber-900 font-medium mt-1">
            “{BRAND_IDENTITY.sloganEn}” · {BRAND_IDENTITY.sloganVi}
          </p>
        </div>

        {/* Company Core Card */}
        <div className="p-5 rounded-2xl bg-white border border-stone-200 shadow-xs space-y-4 text-xs">
          <div>
            <span className="text-stone-500 font-medium">Thương hiệu:</span>
            <h4 className="text-base font-bold text-stone-900 mt-0.5">
              {COMPANY_INFO.companyName}
            </h4>
            <p className="text-stone-600 mt-1.5 leading-relaxed">
              DermaGlow là thương hiệu công nghệ làm đẹp (Beauty Tech) tại Việt Nam. Doanh nghiệp tin rằng vẻ đẹp đích thực đến từ sự kết hợp hài hòa giữa công nghệ tiên tiến (AI, Computer Vision, IoT) và quy trình chăm sóc da khoa học, mang đến trải nghiệm cá nhân hóa và định hình phong cách cho mọi khách hàng.
            </p>
          </div>

          <div className="pt-3 border-t border-stone-100 space-y-2.5">
            <div className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-amber-800 shrink-0 mt-0.5" />
              <div>
                <strong className="text-stone-900 block">Địa chỉ doanh nghiệp:</strong>
                <span className="text-stone-700 font-semibold">{COMPANY_INFO.address}</span>
                <span className="text-stone-500 block text-[11px]">{COMPANY_INFO.addressFull}</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-amber-800 shrink-0" />
              <div>
                <strong className="text-stone-900 mr-2">Số điện thoại:</strong>
                <a href={`tel:${COMPANY_INFO.phone}`} className="font-bold text-stone-900 hover:text-amber-800">
                  {COMPANY_INFO.phone}
                </a>
                <span className="text-stone-500 ml-2">({COMPANY_INFO.hotlineFormatted})</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Globe className="w-4 h-4 text-amber-800 shrink-0" />
              <div>
                <strong className="text-stone-900 mr-2">Website kênh bán hàng chính thức:</strong>
                <span className="text-amber-800 font-semibold">{COMPANY_INFO.websiteDomain}</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-amber-800 shrink-0" />
              <div>
                <strong className="text-stone-900 mr-2">Email liên hệ:</strong>
                <span className="text-stone-700">{COMPANY_INFO.email}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="mt-5 space-y-2.5">
          <span className="text-xs font-bold text-stone-900 uppercase tracking-wider block">
            Bốn Giá Trị Cốt Lõi Của DermaGlow:
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            {COMPANY_INFO.values.map((v, idx) => (
              <div key={idx} className="p-3 rounded-xl bg-white border border-stone-200">
                <div className="flex items-center gap-1.5 font-bold text-stone-900 mb-1">
                  <Sparkles className="w-3.5 h-3.5 text-amber-700" />
                  <span>{v.title}</span>
                </div>
                <p className="text-stone-600 text-[11px] leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* After-sales guarantee */}
        <div className="mt-5 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-900 flex items-start gap-3">
          <ShieldCheck className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
          <div>
            <strong className="block text-emerald-950">Chính sách hậu mãi & bảo hành:</strong>
            <span className="text-stone-700 mt-0.5 block">{COMPANY_INFO.warranty}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
