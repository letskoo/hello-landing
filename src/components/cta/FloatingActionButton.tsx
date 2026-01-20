"use client";

export default function FloatingActionButton() {
  const phone = "01065461864";
  const kakao = "http://pf.kakao.com/_zRMZj/chat";

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
