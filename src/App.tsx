import React, { useState } from 'react';
import { Header } from './components/Header';
import { MenuDrawer } from './components/MenuDrawer';
import { HeroSection } from './components/HeroSection';
import { AiMirrorSimulator } from './components/AiMirrorSimulator';
import { ProductSection } from './components/ProductSection';
import { EventsAndCampaigns } from './components/EventsAndCampaigns';
import { CartDrawer, CartItem } from './components/CartDrawer';
import { UserAccountModal } from './components/UserAccountModal';
import { SearchModal } from './components/SearchModal';
import { UserGuideModal } from './components/UserGuideModal';
import { CompanyModal } from './components/CompanyModal';
import { CollectionModal } from './components/CollectionModal';
import { Footer } from './components/Footer';
import { PRODUCTS, Product } from './data/dermaData';
import { Check, Sparkles, X } from 'lucide-react';

export default function App() {
  // Navigation & Modals State
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isAccountOpen, setIsAccountOpen] = useState(false);
  const [isGuideOpen, setIsGuideOpen] = useState(false);
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);
  const [isCollectionOpen, setIsCollectionOpen] = useState(false);
  const [selectedCollectionId, setSelectedCollectionId] = useState<string | undefined>();

  // Cart & Orders State
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 'cart-init-1',
      product: PRODUCTS[0], // DermaGlow Luna (1.500.000 VNĐ)
      selectedColor: PRODUCTS[0].colors[0].name,
      selectedSize: 'Size Vừa (30 x 35 cm)',
      quantity: 1,
    },
  ]);
  const [appliedPromoCode, setAppliedPromoCode] = useState<string | null>('VIPEARLYBIRD');

  // User & Loyalty Points State (Requirement iii)
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [userName, setUserName] = useState('Phạm Hoàng An');
  const [userPhone, setUserPhone] = useState('0779072980');
  const [userPoints, setUserPoints] = useState(1250);

  // Toast Notification State
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((current) => (current === msg ? null : current));
    }, 3500);
  };

  // Add to cart
  const handleAddToCart = (product: Product, selectedColor: string, selectedSize?: string) => {
    setCartItems((prev) => {
      const existing = prev.find(
        (item) =>
          item.product.id === product.id &&
          item.selectedColor === selectedColor &&
          item.selectedSize === selectedSize
      );
      if (existing) {
        return prev.map((item) =>
          item.id === existing.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [
        ...prev,
        {
          id: `item-${Date.now()}`,
          product,
          selectedColor,
          selectedSize: selectedSize || (product.sizes ? product.sizes[0].name : undefined),
          quantity: 1,
        },
      ];
    });
    showToast(`Đã thêm "${product.name} (${selectedColor})" vào giỏ hàng!`);
  };

  // Buy Now
  const handleBuyNow = (product: Product, selectedColor: string, selectedSize?: string) => {
    handleAddToCart(product, selectedColor, selectedSize);
    setIsCartOpen(true);
  };

  // Cart item management
  const handleUpdateQuantity = (id: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveCartItem = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
    showToast('Đã xóa sản phẩm khỏi giỏ hàng.');
  };

  // Checkout success
  const handleCheckoutSuccess = (orderInfo: { code: string; total: number; pointsEarned: number }) => {
    setUserPoints((prev) => prev + orderInfo.pointsEarned);
    setCartItems([]);
    showToast(`Chúc mừng! Đơn hàng ${orderInfo.code} đã xác nhận. Bạn nhận được +${orderInfo.pointsEarned} GlowPoints!`);
  };

  // User auth actions
  const handleLogin = (name: string, phone: string) => {
    setIsLoggedIn(true);
    setUserName(name);
    setUserPhone(phone);
    setUserPoints((prev) => (prev === 0 ? 500 : prev));
    setIsAccountOpen(false);
    showToast(`Chào mừng ${name} trở lại với DermaGlow VIP Club!`);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setIsAccountOpen(false);
    showToast('Đã đăng xuất khỏi tài khoản.');
  };

  // Redeem rewards
  const handleRedeemReward = (pointsCost: number, rewardTitle: string) => {
    setUserPoints((prev) => Math.max(0, prev - pointsCost));
    showToast(`Đã đổi ${pointsCost} điểm lấy "${rewardTitle}".`);
  };

  // Section jumping
  const handleSelectSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-stone-900 flex flex-col font-sans">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-stone-950 text-white text-xs sm:text-sm px-4 py-3 rounded-xl shadow-2xl border border-stone-700 flex items-center justify-between gap-3 animate-in slide-in-from-bottom duration-300 max-w-sm">
          <div className="flex items-center gap-2.5">
            <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
              <Check className="w-3.5 h-3.5" />
            </div>
            <span>{toastMessage}</span>
          </div>
          <button
            type="button"
            onClick={() => setToastMessage(null)}
            aria-label="Đóng thông báo"
            className="p-1 text-stone-400 hover:text-white hover:bg-stone-800 rounded-lg transition-colors cursor-pointer shrink-0"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Top Header */}
      <Header
        onOpenMenu={() => setIsMenuOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenAccount={() => setIsAccountOpen(true)}
        cartCount={cartItems.reduce((sum, item) => sum + item.quantity, 0)}
        userPoints={userPoints}
        isLoggedIn={isLoggedIn}
      />

      {/* Main Page Body */}
      <main className="flex-1">
        {/* (i) Màn hình chính đầu tiên: Hình ảnh sản phẩm + Tính năng nổi bật + Sự kiện + Chiến dịch marketing */}
        <HeroSection
          onExploreAi={() => handleSelectSection('ai-experience')}
          onExploreProducts={() => handleSelectSection('products')}
          onOpenEventDetail={() => handleSelectSection('events')}
          onOpenCampaignDetail={() => {
            setAppliedPromoCode('VIPEARLYBIRD');
            setIsCartOpen(true);
            showToast('Đã áp dụng mã ưu đãi Early Bird VIP giảm 30% vào giỏ hàng!');
          }}
        />

        {/* Interactive Virtual Mirror & AI Skin / Personal Color Simulator */}
        <AiMirrorSimulator />

        {/* Product Catalog & Finishes */}
        <ProductSection
          onAddToCart={handleAddToCart}
          onBuyNow={handleBuyNow}
        />

        {/* Detailed Events & Marketing Campaigns Section */}
        <EventsAndCampaigns
          onRegisterEventSuccess={(name) => {
            showToast(`Đã nhận đăng ký tham dự sự kiện "${name}" thành công!`);
          }}
          onApplyPromoCode={(code) => {
            setAppliedPromoCode(code);
            showToast(`Đã áp dụng mã "${code}" vào đơn hàng của bạn!`);
          }}
        />
      </main>

      {/* (iv) Phía dưới cùng: Footer với tên công ty DermaGlow, địa chỉ 123 Quốc lộ 13, điện thoại +847 7907 2980 */}
      <Footer
        onOpenGuide={() => setIsGuideOpen(true)}
        onOpenCompany={() => setIsCompanyOpen(true)}
        onOpenCollections={() => {
          setSelectedCollectionId(undefined);
          setIsCollectionOpen(true);
        }}
      />

      {/* (ii) Bên trái: Dấu 3 gạch (Mục lục) */}
      <MenuDrawer
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        onSelectSection={handleSelectSection}
        onOpenGuideModal={() => setIsGuideOpen(true)}
        onOpenCompanyModal={() => setIsCompanyOpen(true)}
        onOpenCollectionModal={(colId) => {
          setSelectedCollectionId(colId);
          setIsCollectionOpen(true);
        }}
      />

      {/* (iii) Phía trên cùng bên phải Modals: Giỏ hàng, Tìm kiếm, Tài khoản */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveCartItem}
        onCheckoutSuccess={handleCheckoutSuccess}
        appliedPromoCode={appliedPromoCode}
        onApplyPromoCode={(code) => {
          setAppliedPromoCode(code);
          showToast(`Đã áp dụng mã "${code}"!`);
        }}
      />

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectProduct={(productId) => {
          handleSelectSection('products');
        }}
        onSelectSection={handleSelectSection}
      />

      <UserAccountModal
        isOpen={isAccountOpen}
        onClose={() => setIsAccountOpen(false)}
        userPoints={userPoints}
        isLoggedIn={isLoggedIn}
        onLogin={handleLogin}
        onLogout={handleLogout}
        onRedeemReward={handleRedeemReward}
      />

      {/* Modals from Menu: Hướng dẫn sử dụng, Về công ty, Bộ sưu tập */}
      <UserGuideModal
        isOpen={isGuideOpen}
        onClose={() => setIsGuideOpen(false)}
      />

      <CompanyModal
        isOpen={isCompanyOpen}
        onClose={() => setIsCompanyOpen(false)}
      />

      <CollectionModal
        isOpen={isCollectionOpen}
        onClose={() => setIsCollectionOpen(false)}
        initialCollectionId={selectedCollectionId}
        onSelectCollectionToShop={() => handleSelectSection('products')}
      />
    </div>
  );
}
