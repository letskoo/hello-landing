"use client";

import StickyHeader from "@/src/components/header/StickyHeader";
import HeroIntro from "@/src/components/sections/HeroIntro";
import GallerySection from "@/src/components/sections/GallerySection";
import ConversionForm from "@/src/components/forms/ConversionForm";
import MobileCtaBar from "@/src/components/cta/MobileCtaBar";
import FloatingActionButton from "@/src/components/cta/FloatingActionButton";
import PromoTiles from "@/src/components/tiles/PromoTiles";
import MidCtaSection from "@/src/components/sections/MidCtaSection";
import SquareGallerySection from "@/src/components/sections/SquareGallerySection";
import PricingSection from "@/src/components/sections/PricingSection";
import BrandMarquee from "@/src/components/sections/BrandMarquee";
import ReviewsCarousel from "@/src/components/sections/ReviewsCarousel";

export default function Page() {
  return (
    <>
      <StickyHeader />
      
      {/* 히어로 섹션 */}
      <HeroIntro />

      {/* 갤러리 섹션 */}
      <GallerySection />

      <main className="pg-main">
        <div id="promo-tiles">
          <PromoTiles />
        </div>
        
        {/* 중간 CTA 섹션 */}
        <MidCtaSection />
        
        {/* 정사각형 포트폴리오 갤러리 */}
        <SquareGallerySection />
        
        {/* 가격표 섹션 */}
        <PricingSection />
        
        <div id="brand-marquee">
          <BrandMarquee />
        </div>

        <div id="reviews-carousel">
          <ReviewsCarousel />
        </div>

        {/* 앵커 타겟 */}
        <div id="lead-form">
          <ConversionForm />
        </div>
      </main>

      <MobileCtaBar />
      <FloatingActionButton />
    </>
  );
}
