import React from "react";
import { FixedSizeGrid as Grid } from "react-window";

export default function GridVirtualizationExample() {
  const columnCount = 1000;
  const rowCount = 1000;

  return (
    <div style={{ padding: "20px" }}>
      <h2>🧱 Virtualized Grid with react-window</h2>
      <Grid
        columnCount={columnCount}
        rowCount={rowCount}
        columnWidth={100}
        rowHeight={35}
        height={400}
        width={400}
      >
        {({ columnIndex, rowIndex, style }) => (
          <div style={{ ...style, border: "1px solid #ccc", textAlign: "center" }}>
            Cell {rowIndex},{columnIndex}
          </div>
        )}
      </Grid>
    </div>
  );
}
