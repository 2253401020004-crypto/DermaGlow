export interface Product {
  id: string;
  name: string;
  shape: 'round' | 'rectangle' | 'software';
  subtitle: string;
  tagline: string;
  category: 'mirror' | 'subscription' | 'combo';
  price: number;
  originalPrice?: number;
  rating: number;
  reviewsCount: number;
  image: string;
  sizes?: { name: string; dimension: string; price: number }[];
  colors: { name: string; hex: string; bgClass: string }[];
  specs: { label: string; value: string }[];
  highlightFeatures: string[];
  inStock: boolean;
  isBestSeller?: boolean;
  isNew?: boolean;
}

export interface CollectionItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  material: string;
  finishing: string;
  accentColor: string;
}

export interface BrandEvent {
  id: string;
  title: string;
  date: string;
  location: string;
  tag: string;
  description: string;
  highlights: string[];
  ctaLabel: string;
}

export interface MarketingCampaign {
  id: string;
  title: string;
  badge: string;
  duration: string;
  summary: string;
  benefits: string[];
  code?: string;
  ctaText: string;
}

export interface PersonalColorProfile {
  season: 'Spring Warm' | 'Summer Cool' | 'Autumn Warm' | 'Winter Cool';
  title: string;
  undertone: 'Warm' | 'Cool' | 'Neutral';
  contrast: 'High' | 'Medium' | 'Soft';
  description: string;
  palette: { name: string; hex: string }[];
  lipstickRecommendations: { shade: string; hex: string; finish: string }[];
  eyeshadowPalette: { shade: string; hex: string }[];
  bestFabrics: string[];
  avoidColors: string[];
}

export const BRAND_IDENTITY = {
  sloganEn: 'Understand Your Skin, Glow Your Way',
  sloganVi: 'Thấu hiểu làn da - Tỏa sáng nét riêng',
  brandColors: [
    { name: 'Champagne Gold (Vàng sâm-panh)', hex: '#E8DBB6', role: 'Màu chủ đạo điểm nhấn sang trọng, tinh tế' },
    { name: 'White (Trắng tinh khôi)', hex: '#FFFFFF', role: 'Màu nền tảng đại diện sự thuần khiết, làn da mộc' },
    { name: 'Midnight Express (Xanh đen công nghệ)', hex: '#1E293B', role: 'Màu văn bản thể hiện công nghệ vững chắc' },
    { name: 'Fairy Floss (Hồng phấn dịu nhẹ)', hex: '#EAC8C8', role: 'Màu bổ trợ tạo cảm giác nữ tính, trẻ trung Gen Z' }
  ]
};

export const PRODUCTS: Product[] = [
  {
    id: 'dermaglow-luna',
    name: 'DermaGlow Luna',
    shape: 'round',
    subtitle: 'Gương Thông Minh Dáng Tròn Tối Giản & Tinh Tế',
    tagline: 'Thiết kế mặt tròn mềm mại, biểu tượng của sự viên mãn và thuần khiết',
    category: 'mirror',
    price: 1500000,
    originalPrice: 1800000,
    rating: 4.9,
    reviewsCount: 238,
    image: '/src/assets/images/product_dermaglow_studio_1791206822164.jpg',
    sizes: [
      { name: 'Size Vừa', dimension: '30 x 35 cm', price: 1500000 },
      { name: 'Size Lớn', dimension: '35 x 40 cm', price: 1750000 }
    ],
    colors: [
      { name: 'Trắng tinh khôi (White)', hex: '#FFFFFF', bgClass: 'bg-white' },
      { name: 'Hồng phấn dịu nhẹ (Fairy Floss)', hex: '#EAC8C8', bgClass: 'bg-[#EAC8C8]' },
      { name: 'Be Champagne Gold', hex: '#E8DBB6', bgClass: 'bg-[#E8DBB6]' }
    ],
    specs: [
      { label: 'Kiểu dáng', value: 'Mặt tròn, mềm mại, decor tối giản' },
      { label: 'Kích thước', value: 'Vừa (30 x 35 cm) & Lớn (35 x 40 cm)' },
      { label: 'Chân đế & Vật liệu', value: 'Chân đế Titan, nhôm, thép không gỉ' },
      { label: 'Đèn LED', value: '5/10W xoay 360° cảm biến thông minh' },
      { label: 'Trọng lượng & Nguồn', value: '1,2 kg · Dùng điện trực tiếp' }
    ],
    highlightFeatures: [
      'Camera AI tích hợp: quét và phân tích đa thông số da siêu tốc chỉ trong 10 giây',
      'Đèn LED 360° xoay tự điều chỉnh ánh sáng chuẩn khoa học (không chói mắt, chuẩn màu)',
      'Hỗ trợ kết nối ứng dụng di động DermaglowOS qua Wi-Fi / Bluetooth',
      'Tặng kèm bản Free trọn đời và 1 tháng trải nghiệm miễn phí gói Premium Personal Color'
    ],
    inStock: true,
    isBestSeller: true,
    isNew: true
  },
  {
    id: 'dermaglow-edge',
    name: 'DermaGlow Edge',
    shape: 'rectangle',
    subtitle: 'Gương Thông Minh Dáng Chữ Nhật Hiện Đại & Cá Tính',
    tagline: 'Thiết kế góc cạnh bo viền công nghệ sắc sảo, tối ưu hóa không gian bàn trang điểm',
    category: 'mirror',
    price: 1500000,
    originalPrice: 1800000,
    rating: 4.88,
    reviewsCount: 164,
    image: '/src/assets/images/hero_dermaglow_mirror_1791206807012.jpg',
    sizes: [
      { name: 'Size Vừa', dimension: '30 x 35 cm', price: 1500000 },
      { name: 'Size Lớn', dimension: '35 x 40 cm', price: 1750000 }
    ],
    colors: [
      { name: 'Trắng tinh khôi (White)', hex: '#FFFFFF', bgClass: 'bg-white' },
      { name: 'Be Champagne Gold', hex: '#E8DBB6', bgClass: 'bg-[#E8DBB6]' },
      { name: 'Hồng phấn dịu nhẹ (Fairy Floss)', hex: '#EAC8C8', bgClass: 'bg-[#EAC8C8]' }
    ],
    specs: [
      { label: 'Kiểu dáng', value: 'Hình chữ nhật góc cạnh, phong cách công nghệ' },
      { label: 'Kích thước', value: 'Vừa (30 x 35 cm) & Lớn (35 x 40 cm)' },
      { label: 'Chân đế & Vật liệu', value: 'Chân đế Titan, nhôm, thép không gỉ' },
      { label: 'Đèn LED', value: '5/10W xoay 360° cảm biến ánh sáng' },
      { label: 'Trọng lượng & Nguồn', value: '1,2 kg · Dùng điện trực tiếp' }
    ],
    highlightFeatures: [
      'Góc nhìn mở rộng theo phương ngang, thuận tiện quan sát toàn diện khuôn mặt và góc nghiêng',
      'Công nghệ AI Computer Vision bóc tách nếp nhăn, mật độ lỗ chân lông, độ ẩm, độ tuổi sinh học',
      'Đồng bộ dữ liệu báo cáo sức khỏe làn da hàng tháng về ứng dụng di động',
      'Tặng kèm 1 tháng dùng thử Dermaglow Pro SaaS'
    ],
    inStock: true,
    isNew: true
  },
  {
    id: 'dermaglow-premium-subscription',
    name: 'Gói Dịch Vụ Số Dermaglow Pro (SaaS)',
    shape: 'software',
    subtitle: 'Nâng Cấp Phân Tích Personal Color & Chuyên Sâu Da Liễu',
    tagline: 'Mở khóa toàn bộ thuật toán trí tuệ nhân tạo chuyên sâu trên ứng dụng DermaglowOS',
    category: 'subscription',
    price: 50000,
    originalPrice: 100000,
    rating: 4.96,
    reviewsCount: 512,
    image: '/src/assets/images/feature_personal_color_1791206841188.jpg',
    colors: [
      { name: 'Gói Tháng (50k/tháng)', hex: '#1E293B', bgClass: 'bg-[#1E293B]' },
      { name: 'Gói Năm (500k/năm - Tặng 2 tháng)', hex: '#E8DBB6', bgClass: 'bg-[#E8DBB6]' }
    ],
    specs: [
      { label: 'Hình thức', value: 'Đăng ký thuê bao số In-App (Gia hạn linh hoạt)' },
      { label: 'Phân tích Personal Color', value: 'Nhận diện tone da Warm/Cool/Neutral, màu tóc & mắt' },
      { label: 'Gợi ý chuyên sâu', value: 'Layout makeup, màu son, outfit thời trang phù hợp' },
      { label: 'An toàn mỹ phẩm', value: 'Kiểm tra & đánh giá độ an toàn thành phần mỹ phẩm' },
      { label: 'Nhật ký tiến trình', value: 'Lưu trữ lịch sử & biểu đồ thay đổi làn da không giới hạn' }
    ],
    highlightFeatures: [
      'Nhận diện màu sắc cá nhân Personal Color chuẩn chuyên gia Hàn Quốc',
      'Gợi ý chu trình chăm sóc da chuyên biệt sáng & tối dựa trên độ ẩm, dầu nhờn, sắc tố',
      'Cảnh báo thành phần mỹ phẩm gây bít tắc hoặc kích ứng cho làn da của bạn',
      'Biểu đồ trực quan theo dõi tiến trình hồi phục da (ví dụ: thâm giảm 12% sau 2 tuần)'
    ],
    inStock: true
  },
  {
    id: 'dermaglow-combo-vip',
    name: 'Combo DermaGlow VIP Early Bird',
    shape: 'round',
    subtitle: 'Gương DermaGlow (Luna hoặc Edge) + 1 Năm Dermaglow Pro',
    tagline: 'Gói đặc quyền mở bán đầu tiên với ưu đãi 30% dành cho khách hàng đặt trước',
    category: 'combo',
    price: 1850000,
    originalPrice: 2400000,
    rating: 4.99,
    reviewsCount: 88,
    image: '/src/assets/images/hero_dermaglow_mirror_1791206807012.jpg',
    colors: [
      { name: 'Trắng tinh khôi', hex: '#FFFFFF', bgClass: 'bg-white' },
      { name: 'Be Champagne Gold', hex: '#E8DBB6', bgClass: 'bg-[#E8DBB6]' },
      { name: 'Hồng phấn dịu nhẹ', hex: '#EAC8C8', bgClass: 'bg-[#EAC8C8]' }
    ],
    specs: [
      { label: 'Bao gồm', value: '01 Gương DermaGlow tùy chọn (Luna/Edge)' },
      { label: 'Kèm theo', value: 'Tài khoản 12 tháng Dermaglow Pro (trị giá 600.000 VNĐ)' },
      { label: 'Quà tặng', value: 'Bộ cọ trang điểm & Serum dưỡng phục hồi' },
      { label: 'Bảo hành', value: '1 đổi 1 trong 30 ngày · Bảo hành chính hãng 6 tháng' }
    ],
    highlightFeatures: [
      'Tiết kiệm 550.000 VNĐ so với mua lẻ từng phần',
      'Được ưu tiên giao hàng đợt 1 từ dây chuyền sản xuất đầu tiên',
      'Nhận bộ quà tặng trải nghiệm và thiệp mời tham gia sự kiện ra mắt'
    ],
    inStock: true,
    isBestSeller: true
  }
];

export const COLLECTIONS: CollectionItem[] = [
  {
    id: 'dermaglow-luna-round',
    title: 'Dòng DermaGlow Luna (Dáng Tròn)',
    subtitle: 'Mềm mại, tối giản và thanh tao',
    description: 'Thiết kế mặt tròn tượng trưng cho sự trọn vẹn và thuần khiết. Phù hợp tuyệt vời cho bàn trang điểm phòng ngủ, không gian decor phong cách Bắc Âu hoặc tối giản thanh lịch.',
    material: 'Chân đế Titan, nhôm, thép không gỉ & Kính quang học phản chiếu chuẩn 100%',
    finishing: 'Sơn tĩnh điện nano mịn màng, chống bám vân tay',
    accentColor: '#E8DBB6'
  },
  {
    id: 'dermaglow-edge-rect',
    title: 'Dòng DermaGlow Edge (Dáng Chữ Nhật)',
    subtitle: 'Góc cạnh, hiện đại và cá tính mạnh',
    description: 'Thiết kế hình chữ nhật bo góc mềm mại, đại diện cho tính chuẩn xác của công nghệ AI và phong cách hiện đại. Mang lại trường nhìn rộng khi quan sát tổng thể diện mạo.',
    material: 'Khung hợp kim nhôm định hình & Chân đế chống rung trọng tâm thấp',
    finishing: 'Hairline kim loại tinh xảo với lớp phủ chống oxi hóa',
    accentColor: '#1E293B'
  },
  {
    id: 'dermaglow-champagne-gold',
    title: 'Phiên Bản Màu Champagne Gold',
    subtitle: 'Vàng Sâm-Panh (#E8DBB6) Quý Phái',
    description: 'Màu sắc chủ đạo điểm nhấn của thương hiệu DermaGlow, tôn lên nét sang trọng, tinh tế và đẳng cấp của dòng sản phẩm công nghệ làm đẹp cao cấp.',
    material: 'Khung nhôm mạ màu champagne satin',
    finishing: 'Satin Luxury Matte Finish',
    accentColor: '#E8DBB6'
  },
  {
    id: 'dermaglow-fairy-floss',
    title: 'Phiên Bản Màu Fairy Floss',
    subtitle: 'Hồng Phấn Dịu Nhẹ (#EAC8C8) Trẻ Trung',
    description: 'Màu bổ trợ tạo cảm giác ấm áp, nữ tính và ngọt ngào, gắn kết trực tiếp với ngành hàng làm đẹp và phong cách của người dùng trẻ Gen Z.',
    material: 'Hợp kim nhẹ phủ lớp men bảo vệ màu',
    finishing: 'Soft Touch Velvet Feel',
    accentColor: '#EAC8C8'
  }
];

export const EVENTS: BrandEvent[] = [
  {
    id: 'csr-embrace-your-true-skin',
    title: 'Chiến Dịch CSR Trọng Điểm: “Embrace Your True Skin”',
    date: 'Tháng 1 - Tháng 6/2026 · Xuyên suốt',
    location: 'Hợp tác cùng các phòng khám da liễu & spa đối tác tại Hà Nội và TP.HCM',
    tag: 'Chiến dịch CSR nhân văn',
    description: 'Chiến dịch trọng điểm mang thông điệp “Thấu hiểu làn da - Tỏa sáng nét riêng”. Tài trợ 100% chi phí liệu trình điều trị sẹo rỗ, mụn nặng cho các bạn trẻ Gen Z có hoàn cảnh khó khăn, kết hợp trao tặng gương DermaGlow theo dõi tiến trình phục hồi.',
    highlights: [
      'Tài trợ 100% chi phí điều trị sẹo rỗ và mụn chuyên sâu cùng bác sĩ da liễu',
      'Trao tặng mỗi ứng viên 01 gương thông minh DermaGlow để ghi nhận Time-Lapse tiến trình da',
      'Lan tỏa câu chuyện hành trình thay đổi diện mạo trên VnExpress, Dân Trí, Tuổi Trẻ'
    ],
    ctaLabel: 'Đăng Ký Tham Gia Hoặc Giới Thiệu Ứng Viên'
  },
  {
    id: 'kickoff-launch-edge-luna',
    title: 'Sự Kiện Ra Mắt Chính Thức Hai Phiên Bản DermaGlow Edge & Luna',
    date: 'Tháng 1 - Tháng 3/2026',
    location: 'Flagship Showroom (123 Quốc lộ 13, TP.HCM) & Livestream TikTok Shop Mall',
    tag: 'Sự kiện mở bán Kick-off',
    description: 'Trải nghiệm trực tiếp 2 phiên bản phần cứng DermaGlow Edge (chữ nhật) và Luna (tròn), cùng chuyên gia thử nghiệm tính năng chẩn đoán Personal Color và phân tích da AI.',
    highlights: [
      'Ưu đãi đặc biệt giảm 30% cho khách hàng đặt cọc sớm (Early Bird)',
      'Miễn phí trải nghiệm soi da cùng Bác sĩ da liễu và nhận bảng phân tích cá nhân hóa',
      'Quà tặng túi Kraft sinh thái thân thiện môi trường'
    ],
    ctaLabel: 'Đăng Ký Tham Dự Miễn Phí'
  },
  {
    id: 'b2b2c-popup-tour',
    title: 'Chuỗi Trải Nghiệm Gương DermaGlow Tại Spa & Trung Tâm Thương Mại',
    date: 'Thường niên 2026 · 09:00 - 21:00',
    location: 'Các Spa/Clinic da liễu đối tác & Pop-up Store TTTM tại TP.HCM & Hà Nội',
    tag: 'Trải nghiệm thực tế',
    description: 'Đáp ứng nhu cầu của 92,3% khách hàng muốn trải nghiệm trực tiếp trước khi mua. Khách hàng có thể soi da thực tế và đặt hàng trực tiếp qua Shopee Mall / TikTok Shop.',
    highlights: [
      'Soi da và đo lường chỉ số da miễn phí chỉ trong 10 giây',
      'Được hướng dẫn cách chọn routine skincare khoa học',
      'Nhận voucher giảm giá 100.000 VNĐ khi mua thiết bị tại sự kiện'
    ],
    ctaLabel: 'Xem Danh Sách Điểm Trải Nghiệm'
  }
];

export const CAMPAIGNS: MarketingCampaign[] = [
  {
    id: 'campaign-early-bird-vip',
    title: 'Chương Trình Đặt Hàng Trước (Early Bird) - Ưu Đãi Cọc VIP 30%',
    badge: 'Mở bán đợt đầu',
    duration: 'Áp dụng cho đợt mở bán đầu tiên năm 2026',
    summary: 'Dành riêng cho nhóm khách hàng tiên phong yêu thích công nghệ và làm đẹp cá nhân hóa. Nhận ngay mức giá ưu đãi và quà tặng độc quyền.',
    benefits: [
      'Mức giá ưu đãi đặc quyền: chỉ 1.500.000 VNĐ/chiếc (tặng kèm thời gian dùng thử gói Premium)',
      'Tặng 01 tháng miễn phí sử dụng gói dịch vụ số Dermaglow Pro (Personal Color & Routine chuyên sâu)',
      'Ưu tiên giao hàng đợt 1 từ nhà máy OEM chuẩn chất lượng',
      'Chính sách 1 đổi 1 trong vòng 30 ngày và bảo hành chính hãng phần cứng 6 tháng'
    ],
    code: 'VIPEARLYBIRD',
    ctaText: 'Đặt Cọc Sớm Nhận Ưu Đãi 30%'
  },
  {
    id: 'campaign-trade-in-circular',
    title: 'Chiến Dịch: “Trade-in - Thu Cũ Đổi Mới” Gương DermaGlow',
    badge: 'Ưu đãi đổi mới',
    duration: 'Chương trình trợ giá nâng cấp thiết bị làm đẹp thông minh',
    summary: 'Thu nhận thiết bị hoặc gương làm đẹp cũ để đổi lấy gương thông minh DermaGlow với chi phí ưu đãi tiết kiệm từ 20% đến 40%.',
    benefits: [
      'Hỗ trợ mức giá cạnh tranh thấp hơn 20% - 40% so với giá niêm yết',
      'Được kỹ thuật viên hỗ trợ kiểm tra và hướng dẫn kết nối tại nhà',
      'Đóng gói sản phẩm với bao bì giấy tái chế thân thiện môi trường',
      'Áp dụng đầy đủ chính sách bảo hành chính hãng và dùng thử gói Premium'
    ],
    code: 'TRADEIN40',
    ctaText: 'Đăng Ký Thu Cũ Đổi Mới'
  },
  {
    id: 'campaign-freemium-upgrade',
    title: 'Gói Thuê Bao Dermaglow Pro SaaS - Chỉ 50.000 VNĐ/Tháng',
    badge: 'Thuê bao phần mềm',
    duration: 'Đăng ký linh hoạt trên ứng dụng DermaglowOS',
    summary: 'Mô hình kép Freemium: Khách hàng sử dụng tính năng cơ bản miễn phí trọn đời và linh hoạt nâng cấp gói Premium khi có nhu cầu.',
    benefits: [
      'Chỉ 50.000 VNĐ/tháng (mức phí tối ưu theo khảo sát đa số người dùng sẵn lòng chi trả)',
      'Mở khóa tính năng Personal Color: Gợi ý layout makeup, màu son, màu tóc và trang phục thời trang',
      'Kiểm tra độ an toàn của bảng thành phần mỹ phẩm và cảnh báo tương thích với làn da',
      'Biểu đồ theo dõi sự thay đổi của làn da theo thời gian thực (Skin Progress Journal)'
    ],
    code: 'PRO50K',
    ctaText: 'Dùng Thử Miễn Phí 30 Ngày'
  }
];

export const PERSONAL_COLOR_DATA: Record<string, PersonalColorProfile> = {
  'spring-warm': {
    season: 'Spring Warm',
    title: 'Xuân Ấm Áp (Warm Spring) - Tươi Mới & Rạng Rỡ',
    undertone: 'Warm',
    contrast: 'Medium',
    description: 'Sắc tố da có undertone vàng ấm tươi sáng, tràn đầy năng lượng tích cực của hoa cỏ mùa xuân.',
    palette: [
      { name: 'Peach Coral', hex: '#F88379' },
      { name: 'Warm Apricot', hex: '#FBCEB1' },
      { name: 'Golden Sunlight', hex: '#FAD02C' },
      { name: 'Champagne Gold', hex: '#E8DBB6' },
      { name: 'Warm Turquoise', hex: '#40E0D0' }
    ],
    lipstickRecommendations: [
      { shade: 'San hô đào bóng (Glossy Coral Peach)', hex: '#E76F51', finish: 'Dewy Glow' },
      { shade: 'Đỏ cam tươi (Vibrant Orange Red)', hex: '#E63946', finish: 'Satin Velvet' },
      { shade: 'Hồng mơ dịu (Soft Apricot Nude)', hex: '#F4A261', finish: 'Sheer Tint' }
    ],
    eyeshadowPalette: [
      { shade: 'Champagne Shimmer', hex: '#E8DBB6' },
      { shade: 'Warm Bronze', hex: '#B08D57' },
      { shade: 'Tender Terracotta', hex: '#C86D51' }
    ],
    bestFabrics: ['Vải lụa satin màu be ngà', 'Linen màu kem be', 'Cotton màu đào pastel', 'Voan ánh nắng nhẹ'],
    avoidColors: ['Đen tuyền gắt lạnh', 'Xám tro', 'Tím thẫm lạnh']
  },
  'summer-cool': {
    season: 'Summer Cool',
    title: 'Hạ Dịu Mát (Cool Summer) - Thanh Lịch & Tinh Tế',
    undertone: 'Cool',
    contrast: 'Soft',
    description: 'Sắc tố da mang undertone hồng mát dịu dàng, trong trẻo và thanh lịch như làn sương sớm mùa hè.',
    palette: [
      { name: 'Fairy Floss Pink', hex: '#EAC8C8' },
      { name: 'Pastel Lavender', hex: '#B57EDC' },
      { name: 'Sky Blue Mist', hex: '#87CEEB' },
      { name: 'Mint Frost', hex: '#98FF98' },
      { name: 'Soft Mauve', hex: '#997A8D' }
    ],
    lipstickRecommendations: [
      { shade: 'Hồng tro cánh hoa (Dusty Rose Bloom)', hex: '#C08081', finish: 'Soft Matte' },
      { shade: 'Hồng mận nhẹ (Sheer Plum Berry)', hex: '#9E4770', finish: 'Water Tint' },
      { shade: 'Hồng phấn dịu (Fairy Floss Nude)', hex: '#EAC8C8', finish: 'Creamy Satin' }
    ],
    eyeshadowPalette: [
      { shade: 'Icy Rose Pearl', hex: '#E6D7E8' },
      { shade: 'Muted Lavender Taupe', hex: '#8E7C8D' },
      { shade: 'Cool Cocoa', hex: '#635359' }
    ],
    bestFabrics: ['Chiffon xanh khói', 'Lụa tơ tằm xám ngọc trai', 'Cashmere hồng phấn Fairy Floss'],
    avoidColors: ['Cam neon chói', 'Vàng mù tạt đất', 'Nâu đất ấm']
  },
  'autumn-warm': {
    season: 'Autumn Warm',
    title: 'Thu Trầm Ấm (Warm Autumn) - Sâu Lắng & Quý Phái',
    undertone: 'Warm',
    contrast: 'Medium',
    description: 'Làn da ấm màu hổ phách hoặc mật ong, mang nét quyến rũ, chín muồi và sang trọng như sắc lá rừng thu.',
    palette: [
      { name: 'Terracotta Rust', hex: '#CC4E46' },
      { name: 'Deep Olive', hex: '#556B2F' },
      { name: 'Warm Mustard', hex: '#E1AD01' },
      { name: 'Champagne Gold', hex: '#E8DBB6' },
      { name: 'Mocha Cream', hex: '#96715B' }
    ],
    lipstickRecommendations: [
      { shade: 'Đỏ gạch nung (Chili Terracotta)', hex: '#A63A2B', finish: 'Velvet Matte' },
      { shade: 'Nâu cam quế (Cinnamon Warm Spice)', hex: '#9B4E38', finish: 'Rich Cream' },
      { shade: 'Cam cháy đất (Burnt Amber)', hex: '#BA5336', finish: 'Satin Luxury' }
    ],
    eyeshadowPalette: [
      { shade: 'Antique Gold', hex: '#E8DBB6' },
      { shade: 'Burnished Copper', hex: '#B87333' },
      { shade: 'Forest Bark Brown', hex: '#4A3B32' }
    ],
    bestFabrics: ['Dạ len tweed ấm', 'Nhung tăm màu gạch', 'Da bò sáp tự nhiên', 'Lụa màu olive'],
    avoidColors: ['Xanh dạ quang', 'Hồng cánh sen gắt', 'Trắng tuyết lạnh']
  },
  'winter-cool': {
    season: 'Winter Cool',
    title: 'Đông Sắc Nét (Cool Winter) - Quyền Lực & Tương Phản',
    undertone: 'Cool',
    contrast: 'High',
    description: 'Sự tương phản rõ nét và sắc sảo, tôn vinh khí chất hiện đại, nổi bật giữa đám đông.',
    palette: [
      { name: 'Ruby Crimson', hex: '#9B111E' },
      { name: 'Midnight Express', hex: '#1E293B' },
      { name: 'Emerald Frost', hex: '#50C878' },
      { name: 'Pure Obsidian', hex: '#0B0B0C' },
      { name: 'White Bright', hex: '#FFFFFF' }
    ],
    lipstickRecommendations: [
      { shade: 'Đỏ ruby cổ điển (Classic Ruby Red)', hex: '#A30000', finish: 'Matte Perfection' },
      { shade: 'Hồng fuchsia lạnh (Bold Cool Fuchsia)', hex: '#C71585', finish: 'Hydra-Shine' },
      { shade: 'Đỏ rượu vang (Deep Bordeaux Wine)', hex: '#5B0E2D', finish: 'Velvet Silk' }
    ],
    eyeshadowPalette: [
      { shade: 'Frozen Diamond Shimmer', hex: '#EDF2F7' },
      { shade: 'Smoky Charcoal', hex: '#333333' },
      { shade: 'Midnight Express', hex: '#1E293B' }
    ],
    bestFabrics: ['Tuyết sa hàn đen nhánh', 'Lụa satin trắng tinh khôi', 'Kim tuyến ánh bạc', 'Dạ màu than chì'],
    avoidColors: ['Cam san hô nhờ', 'Vàng đất nhờ nhờ', 'Nâu be nhạt']
  }
};

export const HOW_IT_WORKS_STEPS = [
  {
    stepNumber: '01',
    title: 'Khởi Động & Đèn LED 360° Tự Động',
    description: 'Cảm biến ánh sáng tự động hiệu chỉnh độ sáng đèn LED 5/10W xoay 360° quanh mặt gương (tròn ở Luna hoặc chữ nhật ở Edge), mang lại góc chiếu sáng chuẩn hóa điều kiện ánh sáng môi trường.',
    techDetail: 'Phần cứng chân đế Titan, nhôm, thép không gỉ vững chãi, dùng điện trực tiếp ổn định công suất.'
  },
  {
    stepNumber: '02',
    title: 'Quét Nhanh 10 Giây Bằng Camera AI & Computer Vision',
    description: 'Hệ thống camera tích hợp trên gương chụp và xử lý bằng thị giác máy tính (Computer Vision), bóc tách các đặc điểm bề mặt da thành dữ liệu định lượng: điểm số nếp nhăn, mật độ lỗ chân lông, độ ẩm, độ tuổi sinh học.',
    techDetail: 'Bảo mật Privacy-by-design: chỉ phân tích đặc điểm làn da, mã hóa đầu cuối và không lưu trữ nhận diện khuôn mặt.'
  },
  {
    stepNumber: '03',
    title: 'Chẩn Đoán Personal Color (Gói Dermaglow Pro)',
    description: 'Thuật toán nhận diện màu sắc da, mắt, tóc (Warm/Cool/Neutral) và phân loại theo 4 mùa, từ đó đề xuất layout makeup, màu son phù hợp và cách chọn trang phục thời trang tôn sắc.',
    techDetail: 'Mở khóa qua ứng dụng DermaglowOS với mức thuê bao 50.000 VNĐ/tháng, có thể trải nghiệm miễn phí 30 ngày.'
  },
  {
    stepNumber: '04',
    title: 'Đề Xuất Routine & Theo Dõi Tiến Trình (Skin Progress Journal)',
    description: 'Tự động gợi ý chu trình skincare phù hợp, kiểm tra độ an toàn của thành phần mỹ phẩm và vẽ biểu đồ minh chứng sự thay đổi của làn da theo thời gian thực (ví dụ: thâm giảm 12% sau 2 tuần).',
    techDetail: 'Lưu trữ lịch sử an toàn trên điện toán đám mây và liên kết trực tiếp mua sắm chính hãng trên Shopee Mall, TikTok Shop.'
  }
];

export const COMPANY_INFO = {
  brandName: 'DermaGlow Mirror',
  companyName: 'Công Ty DermaGlow',
  slogan: 'Understand Your Skin, Glow Your Way',
  sloganVi: 'Thấu hiểu làn da - Tỏa sáng nét riêng',
  address: '123 Quốc lộ 13',
  addressFull: '123 Quốc lộ 13, Phường Hiệp Bình Chánh, TP. Thủ Đức, TP. Hồ Chí Minh',
  phone: '+847 7907 2980',
  hotlineFormatted: '+84 77 907 2980',
  email: 'contact@dermaglow.site',
  websiteDomain: 'dermaglow.site',
  warranty: 'Chính sách hậu mãi 1 đổi 1 trong 30 ngày cho lỗi kỹ thuật từ nhà sản xuất; bảo hành phần cứng chính hãng 3 - 6 tháng cho mạch điện, cảm biến và hệ thống đèn LED.',
  values: [
    { title: 'Chất Lượng', desc: 'Cam kết sản phẩm chất lượng cao, linh kiện cao cấp và kiểm tra nghiêm ngặt' },
    { title: 'Đổi Mới', desc: 'Tiên phong ứng dụng thị giác máy tính và AI chẩn đoán màu sắc cá nhân tại nhà' },
    { title: 'Tận Tâm', desc: 'Đặt trải nghiệm và sự an tâm của khách hàng lên hàng đầu' },
    { title: 'Sáng Tạo', desc: 'Không ngừng cải tiến giải pháp chăm sóc da thông minh, hiệu quả và tối giản' }
  ]
};

