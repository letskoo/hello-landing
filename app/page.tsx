"use client";

import StickyHeader from "@/src/components/header/StickyHeader";
import ConversionForm from "@/src/components/forms/ConversionForm";
import MobileCtaBar from "@/src/components/cta/MobileCtaBar";
import FloatingActionButton from "@/src/components/cta/FloatingActionButton";
import PromoTiles from "@/src/components/tiles/PromoTiles";
import PhotoSlideSection from "@/src/components/sections/PhotoSlideSection";

export default function Page() {
  return (
    <>
      <StickyHeader />

      <main className="pg-main">
        <PromoTiles />
        <PhotoSlideSection />

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
