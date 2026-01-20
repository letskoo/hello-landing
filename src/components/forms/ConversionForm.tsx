"use client";

export default function ConversionForm() {
  return (
    <section
      id="lead-form"
      style={{
        width: "100%",
        padding: "80px 16px",          // 모바일 좌우 여백 복구
        boxSizing: "border-box",
        display: "flex",
        justifyContent: "center",      // 데스크탑 가운데 정렬
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 520,               // 폼 폭 고정
          background: "#fff",
          borderRadius: 16,
          padding: "32px 24px",
          boxShadow: "0 12px 30px rgba(0,0,0,0.08)",
          boxSizing: "border-box",
        }}
      >
        <h3
          style={{
            fontSize: 22,
            fontWeight: 900,
            marginBottom: 20,
          }}
        >
          문의하기
        </h3>

        <form>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <input
              type="text"
              placeholder="이름 *"
              style={inputStyle()}
            />

            <input
              type="text"
              placeholder="연락처 *"
              style={inputStyle()}
            />

            <input
              type="text"
              placeholder="지역"
              style={inputStyle()}
            />

            <textarea
              placeholder="문의 내용"
              rows={4}
              style={{
                ...inputStyle(),
                resize: "none",
              }}
            />

            <button
              type="submit"
              style={{
                marginTop: 10,
                height: 52,
                borderRadius: 12,
                border: "none",
                background: "#777",
                color: "#fff",
                fontWeight: 800,
                fontSize: 15,
                cursor: "pointer",
              }}
            >
              제출하기
            </button>

            <span
              style={{
                fontSize: 12,
                color: "#999",
                marginTop: 4,
              }}
            >
              * 필수 입력
            </span>
          </div>
        </form>
      </div>
    </section>
  );
}

function inputStyle(): React.CSSProperties {
  return {
    width: "100%",
    height: 44,
    borderRadius: 10,
    border: "1px solid #e3e3e3",
    padding: "0 12px",
    fontSize: 14,
    boxSizing: "border-box",
  };
}
