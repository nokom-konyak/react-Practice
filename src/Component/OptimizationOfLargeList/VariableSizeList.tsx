import React, { useRef } from "react";
import { VariableSizeList as List } from "react-window";

export default function VariableSizeListExample() {
  const items = Array.from({ length: 1000 }, (_, i) => `Item ${i}`);

  const getItemSize = (index: number) => (index % 2 === 0 ? 50 : 80); // Different heights

  const Row = ({ index, style }: { index: number; style: React.CSSProperties }) => (
    <div
      style={{
        ...style,
        background: index % 2 ? "#f9f9f9" : "#fff",
        padding: "10px",
        borderBottom: "1px solid #ddd",
      }}
    >
      {items[index]}
    </div>
  );

  return (
    <div style={{ padding: "20px" }}>
      <h2>📏 Variable Height List (react-window)</h2>
      <List
        height={400}
        width={300}
        itemCount={items.length}
        itemSize={getItemSize}
      >
        {Row}
      </List>
    </div>
  );
}
