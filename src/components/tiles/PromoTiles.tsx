"use client";

import type { CSSProperties } from "react";
import styles from "./PromoTiles.module.css";

type Tile = {
  label: string;  // 라벨 (나은 제목 등)
  title: string;  // 크게 나타나는 본문 텍스트
  link?: string;  // 클릭 링크

  // 단색 테마 (선택)
  theme?: "yellow" | "lime" | "blue" | "pink";

  // 사진 배경 (선택) — public/images/... 에 넣고 "/images/xxx.jpg"
  imageUrl?: string;
};

const TILES: Tile[] = [
  {
    label: "브랜드 샷",
    title: "WHISK",
    link: "http://pf.kakao.com/_zRMZj/chat",
    theme: "yellow",
  },
  {
    label: "아이디어 도구",
    title: "Spark",
    link: "http://pf.kakao.com/_zRMZj/chat",
    theme: "lime",
  },
  {
    label: "영상 전환",
    title: "Flow",
    link: "http://pf.kakao.com/_zRMZj/chat",
    theme: "blue",
  },
  {
    label: "에디팅 스튜디오",
    title: "Studio",
    link: "http://pf.kakao.com/_zRMZj/chat",
    imageUrl: "/images/studio.jpg",
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

function PromoTiles() {
  return (
    <section id="promo-tiles" className={styles.section}>
      <div className={styles.container}>
        {/* 타일 위 텍스트 */}
        <div className={styles.sectionText}>
          단 14일, 빠르게 만들면 퀄리티가<br />
          떨어진다는 편견 깨버리겠습니다
        </div>

        {/* 타일 그리드 */}
        <div className={styles.grid}>
          {TILES.map((tile) => {
            const styleVars: CSSProperties = {};

            if (tile.imageUrl) {
              (styleVars as any)["--tile-bg-image"] = `url(${tile.imageUrl})`;
            }

            return (
              <a
                key={tile.title}
                href={tile.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.card} ${themeClass(tile.theme)} ${
                  tile.imageUrl ? styles.hasImage : ""
                }`}
                style={tile.imageUrl ? styleVars : undefined}
              >
                {/* 배경 이미지 타일에만 오버레이 적용 */}
                {tile.imageUrl && <div className={styles.overlay}></div>}

                {/* 타일 내용 (상단 배치) */}
                <div className={styles.content}>
                  <div className={styles.labelWithArrow}>
                    <span className={styles.label}>{tile.label}</span>
                    <span className={styles.arrow}></span>
                  </div>
                  <div className={styles.title}>{tile.title}</div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default PromoTiles;
