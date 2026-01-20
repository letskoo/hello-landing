"use client";

export default function MobileCtaBar() {
  const phone = "01000000000";
  const kakao = "#";

  return (
    <div className="mobile-cta-bar desktop-cta-bar">
      <div className="cta-buttons-wrapper">
        <a href={`tel:${phone}`} className="mobile-cta-btn">
          📞 전화
        </a>

        <a href={kakao} className="mobile-cta-btn">
          💬 카톡
        </a>

        <a href="#lead-form" className="mobile-cta-btn">
          ✍️ 문의
        </a>
      </div>
    </div>
  );
}
