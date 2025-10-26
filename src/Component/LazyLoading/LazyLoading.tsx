import React, { Suspense, useState } from "react";

// Lazy load the component
const LazyComponent = React.lazy(() => import("./LazyComponent.tsx"));

export default function LazyLoadingExample() {
  const [show, setShow] = useState(false);

  return (
    <div>
      <h2>Lazy Loading Component Example</h2>
      <button onClick={() => setShow(!show)}>
        {show ? "Hide" : "Show"} Component
      </button>

      <Suspense fallback={<p>Loading component...</p>}>
        {show && <LazyComponent />}
      </Suspense>
    </div>
  );
}
