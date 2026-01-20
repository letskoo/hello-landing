"use client";

export default function FloatingActionButton() {
  const phone = "01000000000";
  const kakao = "#";

  return (
    <div className="mobile-fab">
      <a href={kakao} className="fab-btn">
        💬
      </a>
      <a href={`tel:${phone}`} className="fab-btn">
        📞
      </a>
    </div>
  );
}
