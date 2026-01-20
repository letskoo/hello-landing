"use client";

import { useState } from "react";

const tabs = ["홈", "예비부부", "결혼식장", "제휴"];

export default function CategoryTabs() {
  const [active, setActive] = useState("홈");

  return (
    <div
      style={{
        display: "flex",
        gap: 18,
        height: 40,                 // ✅ StickyHeader의 TABS_HEIGHT와 동일
        alignItems: "flex-end",
      }}
    >
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActive(tab)}
          style={{
            height: 40,
            padding: "0 6px",
            background: "transparent",
            border: "none",          // ✅ 테두리 삭제
            outline: "none",
            cursor: "pointer",
            fontSize: 14,
            whiteSpace: "nowrap",
            color: "#000",
            fontWeight: active === tab ? 800 : 500,
          }}
        >
          {tab}
        </button>
      ))}

      {/*
      <div style={{ marginTop: "20px" }}>
        <strong>{active}</strong> 선택됨
      </div>
      */}
    </div>
  );
}
