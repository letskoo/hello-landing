"use client";

import Image from "next/image";

export default function StickyHeader() {
  return (
    <header className="pg-header">
      <div
        className="header-wrapper"
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "12px 20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* 로고 */}
        <div className="header-logo" style={{ display: "flex", alignItems: "center" }}>
          <Image
            src="/images/logo.png"
            alt="PhotoGroove"
            width={160}
            height={40}
            priority
            style={{ objectFit: "contain" }}
          />
        </div>

        {/* 메뉴 */}
        <nav style={{ display: "flex", gap: 24, fontWeight: 700 }}>
          <a href="#">홈</a>
          <a href="#">예비부부</a>
          <a href="#">결혼식장</a>
          <a href="#">제휴</a>
        </nav>

        {/* 버튼 */}
        <div className="header-actions" style={{ display: "flex", gap: 10 }}>
          <a
            href="#lead-form"
            style={{
              padding: "8px 16px",
              borderRadius: 10,
              border: "1px solid #ccc",
              fontWeight: 700,
            }}
          >
            상담하기
          </a>
          <a
            href="tel:01000000000"
            style={{
              padding: "8px 16px",
              borderRadius: 10,
              background: "#000",
              color: "#fff",
              fontWeight: 700,
            }}
          >
            전화
          </a>
        </div>
      </div>
    </header>
  );
}
