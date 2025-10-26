export default function LazyComponent() {
  return (
    <div style={{ marginTop: "20px", padding: "10px", border: "1px solid #ccc" }}>
      <h3>🚀 I am a lazily loaded component!</h3>
      <p>This component was loaded only when you requested it.</p>
    </div>
  );
}