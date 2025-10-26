import React from "react";
// import { FixedSizeList as List } from "react-window";
import {FixedSizeList as List} from 'react-window';


export default function FixedSizeListExample() {
  const items = Array.from({ length: 10000 }, (_, index) => `Item ${index + 1}`);

  const Row = ({ index, style }: { index: number; style: React.CSSProperties }) => (
    <div style={{ ...style, padding: "10px", borderBottom: "1px solid #ccc" }}>
      {items[index]}
    </div>
  );

  return (
    <div style={{ padding: "20px" }}>
      <h2>⚡ Large List Optimized with react-window</h2>
      <List
        height={400}         // Height of the window (in px)
        itemCount={items.length} // Total number of items
        itemSize={35}        // Height of each row (in px)
        width={300}          // Width of the list
      >
        {Row}
      </List>
    </div>
  );
}
