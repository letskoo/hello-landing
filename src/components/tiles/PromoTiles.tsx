"use client";

import type { CSSProperties } from "react";
import styles from "./PromoTiles.module.css";

type Tile = {
  title: string;
  subtitle: string;

  // 카드 전체 링크
  href: string;

  // 버튼 전용
  buttonLabel: string;
  buttonHref: string;

  // 단색 테마 (선택)
  theme?: "yellow" | "lime" | "blue" | "pink";

  // 사진 배경 (선택) — public/images/... 에 넣고 "/images/xxx.jpg"
  imageUrl?: string;
};

const TILES: Tile[] = [
  {
    title: "Whisk",
    subtitle: "지금 바로 사용해 보세요",
    href: "https://example.com/whisk",
    buttonLabel: "WHISK 실행 ↗",
    buttonHref: "https://example.com/whisk/run",
    theme: "yellow",
  },
  {
    title: "Spark",
    subtitle: "새로운 아이디어를 켜세요",
    href: "https://example.com/spark",
    buttonLabel: "아이디어 열기 ↗",
    buttonHref: "https://example.com/spark/start",
    theme: "lime",
  },
  {
    title: "Flow",
    subtitle: "장면을 자연스럽게 이어요",
    href: "https://example.com/flow",
    buttonLabel: "문의하기 ↗",
    buttonHref: "#lead-form",
    theme: "blue",
  },
  {
    title: "Studio",
    subtitle: "콘텐츠를 빠르게 완성",
    href: "https://example.com/studio",
    buttonLabel: "전화문의 ↗",
    buttonHref: "tel:01065461864",
    imageUrl: "/images/studio.jpg", // ⭐ 사진 카드
  },
];

function themeClass(theme?: Tile["theme"]) {
  switch (theme) {
    case "lime":
      return styles.lime;
    case "blue":
      return styles.blue;
    case "pink":
      return styles.pink;
    case "yellow":
    default:
      return styles.yellow;
  }
}

export default function PromoTiles() {
  return (
    <section id="promo-tiles" className={styles.section}>
      <div className={styles.grid}>
        {TILES.map((t) => {
          const styleVars: CSSProperties = {};

          // 사진 카드일 경우 CSS 변수로 강제 주입
          if (t.imageUrl) {
            (styleVars as any)["--tile-bg-image"] = `url(${t.imageUrl})`;
          }

          return (
            <div
              key={t.title}
              className={`${styles.card} ${themeClass(t.theme)} ${
                t.imageUrl ? styles.hasImage : ""
              }`}
              style={t.imageUrl ? styleVars : undefined}
            >
              {/* 카드 전체 클릭 레이어 */}
              <a
                href={t.href}
                className={styles.cardLink}
                aria-label={`${t.title} 이동`}
              />

              {/* 우상단 패턴 */}
              <div className={styles.pattern} aria-hidden="true">
                <span className={styles.scribble} />
                <span className={styles.spark1} />
                <span className={styles.spark2} />
              </div>

              {/* 좌하단 콘텐츠 */}
              <div className={styles.content}>
                <div className={styles.title}>{t.title}</div>
                <div className={styles.subtitle}>{t.subtitle}</div>

                <div className={styles.btnRow}>
                  <a
                    href={t.buttonHref}
                    className={styles.btn}
                    onClick={(e) => e.stopPropagation()}
                  >
                    {t.buttonLabel}
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
