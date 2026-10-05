import React, { useState, useRef, useEffect } from 'react';
import { Sparkles, Camera, RefreshCw, Palette, Activity, CheckCircle2, ChevronRight, Droplets, Sun, Moon } from 'lucide-react';
import { PERSONAL_COLOR_DATA } from '../data/dermaData';

const SAMPLE_MODELS = [
  {
    id: 'model-spring',
    name: 'Mẫu 1 · Hương Ly',
    seasonKey: 'spring-warm',
    undertone: 'Warm Golden',
    skinType: 'Da hỗn hợp thiên khô',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    metrics: { hydration: 64, sebum: 38, pores: 88, pigmentation: 22, elasticity: 89, score: 86 }
  },
  {
    id: 'model-summer',
    name: 'Mẫu 2 · Minh Anh',
    seasonKey: 'summer-cool',
    undertone: 'Cool Pink',
    skinType: 'Da nhạy cảm, dễ mẩn đỏ',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80',
    metrics: { hydration: 78, sebum: 30, pores: 92, pigmentation: 15, elasticity: 94, score: 92 }
  },
  {
    id: 'model-autumn',
    name: 'Mẫu 3 · Thảo Vy',
    seasonKey: 'autumn-warm',
    undertone: 'Warm Olive Amber',
    skinType: 'Da dầu vùng chữ T',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80',
    metrics: { hydration: 72, sebum: 65, pores: 74, pigmentation: 34, elasticity: 85, score: 79 }
  },
  {
    id: 'model-winter',
    name: 'Mẫu 4 · Lan Khuê',
    seasonKey: 'winter-cool',
    undertone: 'Cool Porcelain',
    skinType: 'Da thường, khỏe mạnh',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    metrics: { hydration: 85, sebum: 45, pores: 95, pigmentation: 12, elasticity: 96, score: 95 }
  }
];

export const AiMirrorSimulator: React.FC = () => {
  const [selectedModel, setSelectedModel] = useState(SAMPLE_MODELS[0]);
  const [isScanning, setIsScanning] = useState(false);
  const [scanComplete, setScanComplete] = useState(true);
  const [activeTab, setActiveTab] = useState<'skin' | 'color' | 'routine'>('skin');
  const [selectedLipstick, setSelectedLipstick] = useState(0);
  const [useWebcam, setUseWebcam] = useState(false);
  const [webcamError, setWebcamError] = useState<string | null>(null);

  const videoRef = useRef<HTMLVideoElement>(null);
  const streamRef = useRef<MediaStream | null>(null);

  const currentColorData = PERSONAL_COLOR_DATA[selectedModel.seasonKey] || PERSONAL_COLOR_DATA['spring-warm'];

  const startWebcam = async () => {
    setWebcamError(null);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: 'user', width: { ideal: 640 }, height: { ideal: 640 } }
      });
      streamRef.current = stream;
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
      setUseWebcam(true);
    } catch {
      setWebcamError('Không thể mở camera. Vui lòng cấp quyền hoặc tiếp tục dùng ảnh mẫu.');
      setUseWebcam(false);
    }
  };

  const stopWebcam = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop());
      streamRef.current = null;
    }
    setUseWebcam(false);
  };

  useEffect(() => {
    return () => {
      if (streamRef.current) {
        streamRef.current.getTracks().forEach((track) => track.stop());
      }
    };
  }, []);

  const handleScan = () => {
    setIsScanning(true);
    setScanComplete(false);
    setTimeout(() => {
      setIsScanning(false);
      setScanComplete(true);
    }, 2000);
  };

  return (
    <section id="ai-experience" className="py-16 lg:py-24 bg-[#FAF9F6] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-amber-800 tracking-wider uppercase mb-2">
            <Sparkles className="w-4 h-4 text-amber-700" />
            <span>Phòng Thí Nghiệm Trực Tuyến DermaGlow AI</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-950 tracking-tight">
            Trải Nghiệm Gương Thông Minh AI Ngay Trên Web
          </h2>
          <p className="text-stone-600 text-sm sm:text-base mt-3">
            Mô phỏng chân thực hệ thống phân tích da đa phổ quang và công nghệ định vị màu sắc cá nhân Personal Color trên gương DermaGlow.
          </p>
        </div>

        {/* The Interactive Virtual Mirror Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: The Virtual Mirror Visual Display */}
          <div className="lg:col-span-5 flex flex-col items-center">
            {/* Mirror Frame */}
            <div className="relative w-full max-w-sm sm:max-w-md aspect-square rounded-full p-4 bg-gradient-to-tr from-stone-300 via-amber-200/50 to-stone-200 shadow-2xl glow-mirror border-4 border-white flex items-center justify-center">
              {/* LED Ring Glow Simulation */}
              <div className="absolute inset-2 rounded-full border-4 border-amber-100/90 shadow-[inset_0_0_20px_rgba(255,230,200,0.8)] pointer-events-none" />

              {/* Top Camera Micro-Sensor Indicator */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 flex items-center gap-1 bg-stone-900/90 text-white px-2.5 py-0.5 rounded-full text-[10px] font-mono tracking-wider z-20">
                <span className={`w-1.5 h-1.5 rounded-full ${isScanning ? 'bg-rose-500 animate-ping' : 'bg-emerald-400'}`} />
                <span>BIO-OPTIC 4K</span>
              </div>

              {/* Inner Mirror Glass Surface */}
              <div className="relative w-full h-full rounded-full overflow-hidden bg-stone-950 flex items-center justify-center">
                {useWebcam ? (
                  <video
                    ref={videoRef}
                    autoPlay
                    playsInline
                    muted
                    className="w-full h-full object-cover transform -scale-x-100"
                  />
                ) : (
                  <img
                    src={selectedModel.avatar}
                    alt={selectedModel.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                )}

                {/* Laser Scanning Animation Overlay */}
                {isScanning && (
                  <div className="absolute inset-0 bg-amber-500/15 backdrop-blur-[1px] flex flex-col items-center justify-center z-10">
                    <div className="w-full h-1 bg-gradient-to-r from-transparent via-amber-300 to-transparent shadow-[0_0_15px_#f59e0b] animate-bounce" />
                    <div className="mt-4 px-3 py-1 bg-stone-950/80 rounded-md text-amber-300 text-xs font-mono">
                      QUÉT ĐA QUANG PHỔ AI...
                    </div>
                  </div>
                )}

                {/* HUD Overlay On Mirror */}
                <div className="absolute inset-0 pointer-events-none flex flex-col justify-between p-6 text-white/90">
                  <div className="flex justify-between items-start text-[11px] font-mono">
                    <span className="bg-stone-900/60 px-2 py-0.5 rounded">98+ CRI LUX</span>
                    <span className="bg-stone-900/60 px-2 py-0.5 rounded tabular-nums">
                      {selectedModel.metrics.score}/100 ĐIỂM
                    </span>
                  </div>

                  {/* Face recognition targeting brackets */}
                  <div className="self-center w-36 h-44 border border-dashed border-amber-300/40 rounded-3xl relative flex items-center justify-center">
                    <span className="text-[10px] text-amber-200/60 font-mono">AI FACIAL GRID</span>
                  </div>

                  <div className="text-center text-[11px] bg-stone-900/70 py-1 px-3 rounded-full self-center">
                    {selectedModel.seasonKey.toUpperCase()}
                  </div>
                </div>
              </div>
            </div>

            {/* Controls Under Mirror */}
            <div className="mt-6 w-full max-w-sm sm:max-w-md flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleScan}
                  disabled={isScanning}
                  className="flex-1 py-2.5 px-4 bg-stone-900 text-white hover:bg-stone-800 disabled:opacity-50 text-xs font-semibold rounded-xl flex items-center justify-center gap-2 transition-all cursor-pointer shadow-sm"
                >
                  <RefreshCw className={`w-3.5 h-3.5 ${isScanning ? 'animate-spin' : ''}`} />
                  <span>{isScanning ? 'Đang phân tích...' : 'Bắt Đầu Quét AI Lại'}</span>
                </button>

                {!useWebcam ? (
                  <button
                    type="button"
                    onClick={startWebcam}
                    className="py-2.5 px-3 bg-white border border-stone-300 text-stone-800 hover:bg-stone-50 text-xs font-medium rounded-xl flex items-center gap-1.5 transition-colors cursor-pointer"
                    title="Bật webcam của bạn"
                  >
                    <Camera className="w-4 h-4 text-stone-700" />
                    <span>Mở Camera</span>
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={stopWebcam}
                    className="py-2.5 px-3 bg-rose-50 border border-rose-200 text-rose-800 text-xs font-medium rounded-xl flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <span>Tắt Camera</span>
                  </button>
                )}
              </div>

              {webcamError && (
                <p className="text-xs text-rose-600 text-center">{webcamError}</p>
              )}

              {/* Sample model switcher */}
              <div>
                <span className="text-xs text-stone-500 font-medium block mb-2 text-center">
                  Hoặc chọn khuôn mặt mẫu để thử nghiệm 4 nhóm tone màu da:
                </span>
                <div className="grid grid-cols-4 gap-2">
                  {SAMPLE_MODELS.map((m) => (
                    <button
                      key={m.id}
                      type="button"
                      onClick={() => {
                        setSelectedModel(m);
                        if (useWebcam) stopWebcam();
                      }}
                      className={`p-1.5 rounded-lg border text-center transition-all cursor-pointer ${
                        selectedModel.id === m.id
                          ? 'border-amber-600 bg-amber-50/70 font-semibold text-stone-950'
                          : 'border-stone-200 bg-white text-stone-600 hover:border-stone-300'
                      }`}
                    >
                      <img
                        src={m.avatar}
                        alt={m.name}
                        referrerPolicy="no-referrer"
                        className="w-8 h-8 rounded-full mx-auto object-cover mb-1 border border-stone-200"
                      />
                      <span className="text-[10px] block truncate">{m.name.split('·')[1]}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right: The AI Analysis Diagnostics & Personal Color Results */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-stone-200 shadow-sm p-6 sm:p-8">
            {/* Functional Tabs for AI Capabilities */}
            <div className="flex items-center gap-1 p-1 bg-stone-100 rounded-xl mb-6">
              <button
                type="button"
                onClick={() => setActiveTab('skin')}
                className={`flex-1 py-2 px-3 text-xs sm:text-sm font-semibold rounded-lg transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                  activeTab === 'skin'
                    ? 'bg-white text-stone-950 shadow-xs'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                <Activity className="w-4 h-4 text-amber-700" />
                <span>1. Phân Tích Da</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('color')}
                className={`flex-1 py-2 px-3 text-xs sm:text-sm font-semibold rounded-lg transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                  activeTab === 'color'
                    ? 'bg-white text-stone-950 shadow-xs'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                <Palette className="w-4 h-4 text-rose-700" />
                <span>2. Personal Color</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('routine')}
                className={`flex-1 py-2 px-3 text-xs sm:text-sm font-semibold rounded-lg transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                  activeTab === 'routine'
                    ? 'bg-white text-stone-950 shadow-xs'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                <Sparkles className="w-4 h-4 text-emerald-700" />
                <span>3. Routine Cá Nhân Hóa</span>
              </button>
            </div>

            {/* TAB 1: AI Skin Diagnostics */}
            {activeTab === 'skin' && (
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-stone-100 gap-2">
                  <div>
                    <h3 className="text-lg font-bold text-stone-900">
                      Báo Cáo Sức Khỏe Làn Da Đa Tầng
                    </h3>
                    <p className="text-xs text-stone-500">
                      Loại da ghi nhận: <span className="font-semibold text-stone-800">{selectedModel.skinType}</span> · Undertone: <span className="font-semibold text-amber-800">{selectedModel.undertone}</span>
                    </p>
                  </div>
                  <div className="flex items-center gap-2 bg-amber-50 px-3 py-1.5 rounded-lg border border-amber-200">
                    <span className="text-xs text-amber-900 font-medium">Chỉ số tổng thể:</span>
                    <span className="text-base font-bold text-amber-900 tabular-nums">
                      {selectedModel.metrics.score}/100
                    </span>
                  </div>
                </div>

                {/* 5 Core Skin Metrics Bars */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Moisture / Hydration */}
                  <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200/80">
                    <div className="flex justify-between items-center text-xs mb-1.5">
                      <span className="font-semibold text-stone-800 flex items-center gap-1">
                        <Droplets className="w-3.5 h-3.5 text-blue-500" />
                        Độ ẩm tầng biểu bì
                      </span>
                      <span className="font-mono font-bold text-blue-700 tabular-nums">
                        {selectedModel.metrics.hydration}%
                      </span>
                    </div>
                    <div className="w-full bg-stone-200 h-2 rounded-full overflow-hidden">
                      <div
                        className="bg-blue-600 h-full rounded-full transition-all duration-500"
                        style={{ width: `${selectedModel.metrics.hydration}%` }}
                      />
                    </div>
                    <p className="text-[11px] text-stone-500 mt-1.5">
                      {selectedModel.metrics.hydration >= 70
                        ? 'Làn da mọng nước lý tưởng'
                        : 'Cần bổ sung thêm Hyaluronic Acid'}
                    </p>
                  </div>

                  {/* Sebum / Dầu nhờn */}
                  <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200/80">
                    <div className="flex justify-between items-center text-xs mb-1.5">
                      <span className="font-semibold text-stone-800">Tuyến bã nhờn (T-Zone)</span>
                      <span className="font-mono font-bold text-amber-700 tabular-nums">
                        {selectedModel.metrics.sebum}%
                      </span>
                    </div>
                    <div className="w-full bg-stone-200 h-2 rounded-full overflow-hidden">
                      <div
                        className="bg-amber-500 h-full rounded-full transition-all duration-500"
                        style={{ width: `${selectedModel.metrics.sebum}%` }}
                      />
                    </div>
                    <p className="text-[11px] text-stone-500 mt-1.5">
                      {selectedModel.metrics.sebum > 60
                        ? 'Có xu hướng bóng dầu nhẹ vùng mũi'
                        : 'Mức độ tiết dầu cân bằng ổn định'}
                    </p>
                  </div>

                  {/* Pores / Lỗ chân lông */}
                  <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200/80">
                    <div className="flex justify-between items-center text-xs mb-1.5">
                      <span className="font-semibold text-stone-800">Độ mịn lỗ chân lông</span>
                      <span className="font-mono font-bold text-emerald-700 tabular-nums">
                        {selectedModel.metrics.pores}%
                      </span>
                    </div>
                    <div className="w-full bg-stone-200 h-2 rounded-full overflow-hidden">
                      <div
                        className="bg-emerald-600 h-full rounded-full transition-all duration-500"
                        style={{ width: `${selectedModel.metrics.pores}%` }}
                      />
                    </div>
                    <p className="text-[11px] text-stone-500 mt-1.5">
                      Độ mịn cao, không bị bít tắc sợi bã nhờn
                    </p>
                  </div>

                  {/* Elasticity / Độ đàn hồi */}
                  <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200/80">
                    <div className="flex justify-between items-center text-xs mb-1.5">
                      <span className="font-semibold text-stone-800">Độ săn chắc & đàn hồi</span>
                      <span className="font-mono font-bold text-purple-700 tabular-nums">
                        {selectedModel.metrics.elasticity}%
                      </span>
                    </div>
                    <div className="w-full bg-stone-200 h-2 rounded-full overflow-hidden">
                      <div
                        className="bg-purple-600 h-full rounded-full transition-all duration-500"
                        style={{ width: `${selectedModel.metrics.elasticity}%` }}
                      />
                    </div>
                    <p className="text-[11px] text-stone-500 mt-1.5">
                      Mạng lưới collagen dồi dào, ngừa nếp nhăn sớm
                    </p>
                  </div>
                </div>

                {/* AI Doctor Insight */}
                <div className="p-4 rounded-xl bg-amber-50/60 border border-amber-200 text-xs space-y-1.5">
                  <div className="flex items-center gap-1.5 font-bold text-amber-950">
                    <Sparkles className="w-4 h-4 text-amber-700" />
                    <span>Chỉ định từ Trợ lý Da liễu DermaGlow AI:</span>
                  </div>
                  <p className="text-stone-700 leading-relaxed">
                    Hôm nay độ ẩm môi trường đạt 62%, khuyến nghị duy trì bước dưỡng ẩm dạng Gel Cream mỏng nhẹ trước khi trang điểm để lớp nền tệp tự nhiên vào da, không mốc hay bong tróc.
                  </p>
                </div>
              </div>
            )}

            {/* TAB 2: Personal Color Diagnostic */}
            {activeTab === 'color' && (
              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-rose-800 uppercase tracking-wider">
                    <span>Kết Quả Chẩn Đoán Personal Color</span>
                  </div>
                  <h3 className="text-xl font-bold text-stone-900 mt-1">
                    {currentColorData.title}
                  </h3>
                  <p className="text-xs text-stone-600 mt-1">
                    {currentColorData.description}
                  </p>
                </div>

                {/* Color Palette Swatches */}
                <div>
                  <span className="text-xs font-bold text-stone-800 block mb-2">
                    Bảng Màu Trang Phục Tôn Sắc Nhất:
                  </span>
                  <div className="grid grid-cols-5 gap-2">
                    {currentColorData.palette.map((color, idx) => (
                      <div key={idx} className="flex flex-col items-center">
                        <div
                          className="w-full h-10 rounded-lg shadow-xs border border-black/10"
                          style={{ backgroundColor: color.hex }}
                        />
                        <span className="text-[10px] text-stone-600 mt-1 text-center truncate w-full">
                          {color.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Lipstick Virtual Recommendation */}
                <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                  <span className="text-xs font-bold text-stone-900 block mb-2">
                    Màu Son Gợi Ý Cho Phong Cách Này:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {currentColorData.lipstickRecommendations.map((lip, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => setSelectedLipstick(idx)}
                        className={`p-2.5 rounded-lg border text-left transition-all cursor-pointer flex items-center gap-2.5 ${
                          selectedLipstick === idx
                            ? 'bg-white border-amber-600 shadow-xs'
                            : 'bg-white/70 border-stone-200 hover:border-stone-300'
                        }`}
                      >
                        <div
                          className="w-5 h-5 rounded-full shrink-0 border border-black/15 shadow-inner"
                          style={{ backgroundColor: lip.hex }}
                        />
                        <div className="overflow-hidden">
                          <span className="text-xs font-semibold text-stone-900 block truncate">
                            {lip.shade.split('(')[0]}
                          </span>
                          <span className="text-[10px] text-stone-500 block">
                            Hiệu ứng {lip.finish}
                          </span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Fabrics & Styling Tips */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-3 rounded-lg bg-emerald-50/60 border border-emerald-200 text-stone-800">
                    <span className="font-bold text-emerald-900 block mb-1">
                      Chất liệu & Phụ kiện ưu tiên:
                    </span>
                    <ul className="space-y-0.5 text-stone-700">
                      {currentColorData.bestFabrics.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-3 rounded-lg bg-rose-50/60 border border-rose-200 text-stone-800">
                    <span className="font-bold text-rose-900 block mb-1">
                      Màu sắc nên tránh:
                    </span>
                    <ul className="space-y-0.5 text-stone-700">
                      {currentColorData.avoidColors.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-1.5">
                          <span className="text-rose-500 font-bold shrink-0">✕</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 3: Personalized Skincare Routine */}
            {activeTab === 'routine' && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-stone-900">
                    Chu Trình Skincare Cá Nhân Hóa Chuẩn Da Liễu
                  </h3>
                  <p className="text-xs text-stone-500">
                    Được AI tối ưu hóa dựa trên thông số da thực tế và điều kiện khí hậu hôm nay
                  </p>
                </div>

                {/* Morning Routine */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-amber-900 uppercase">
                    <Sun className="w-4 h-4 text-amber-600" />
                    <span>Chu Trình Buổi Sáng (Bảo Vệ & Căng Bóng)</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                    <div className="p-3 bg-stone-50 rounded-xl border border-stone-200/80">
                      <span className="text-[10px] font-mono font-bold text-stone-500">BƯỚC 1</span>
                      <h4 className="text-xs font-bold text-stone-900 mt-0.5">Sữa rửa mặt Amino Acid</h4>
                      <p className="text-[11px] text-stone-600 mt-1">Làm sạch dịu nhẹ pH 5.5 không khô căng da</p>
                    </div>
                    <div className="p-3 bg-stone-50 rounded-xl border border-stone-200/80">
                      <span className="text-[10px] font-mono font-bold text-stone-500">BƯỚC 2</span>
                      <h4 className="text-xs font-bold text-stone-900 mt-0.5">Serum Vitamin C 15%</h4>
                      <p className="text-[11px] text-stone-600 mt-1">Chống oxy hóa, mờ đốm nâu và sáng da</p>
                    </div>
                    <div className="p-3 bg-stone-50 rounded-xl border border-stone-200/80">
                      <span className="text-[10px] font-mono font-bold text-stone-500">BƯỚC 3</span>
                      <h4 className="text-xs font-bold text-stone-900 mt-0.5">KCN Phổ Rộng SPF 50+</h4>
                      <p className="text-[11px] text-stone-600 mt-1">Màng lọc quang học kháng tia UVA/UVB</p>
                    </div>
                  </div>
                </div>

                {/* Evening Routine */}
                <div className="space-y-2 pt-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-indigo-900 uppercase">
                    <Moon className="w-4 h-4 text-indigo-600" />
                    <span>Chu Trình Buổi Tối (Tái Tạo & Phục Hồi)</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                    <div className="p-3 bg-stone-50 rounded-xl border border-stone-200/80">
                      <span className="text-[10px] font-mono font-bold text-stone-500">BƯỚC 1</span>
                      <h4 className="text-xs font-bold text-stone-900 mt-0.5">Dầu Tẩy Trang Bio-Lipid</h4>
                      <p className="text-[11px] text-stone-600 mt-1">Hòa tan kem chống nắng & mascara không cay mắt</p>
                    </div>
                    <div className="p-3 bg-stone-50 rounded-xl border border-stone-200/80">
                      <span className="text-[10px] font-mono font-bold text-stone-500">BƯỚC 2</span>
                      <h4 className="text-xs font-bold text-stone-900 mt-0.5">Serum Multi-Peptide 5%</h4>
                      <p className="text-[11px] text-stone-600 mt-1">Kích thích collagen, làm đầy rãnh cười</p>
                    </div>
                    <div className="p-3 bg-stone-50 rounded-xl border border-stone-200/80">
                      <span className="text-[10px] font-mono font-bold text-stone-500">BƯỚC 3</span>
                      <h4 className="text-xs font-bold text-stone-900 mt-0.5">Kem Phục Hồi Ceramide</h4>
                      <p className="text-[11px] text-stone-600 mt-1">Khóa ẩm biểu bì, làm dịu da qua đêm</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
