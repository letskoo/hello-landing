"use client";

import StickyHeader from "@/src/components/header/StickyHeader";
import HeroIntro from "@/src/components/sections/HeroIntro";
import GallerySection from "@/src/components/sections/GallerySection";
import ConversionForm from "@/src/components/forms/ConversionForm";
import MobileCtaBar from "@/src/components/cta/MobileCtaBar";
import FloatingActionButton from "@/src/components/cta/FloatingActionButton";
import PromoTiles from "@/src/components/tiles/PromoTiles";
import PhotoSlideSection from "@/src/components/sections/PhotoSlideSection";

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
        <div id="photo-slide">
          <PhotoSlideSection />
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
