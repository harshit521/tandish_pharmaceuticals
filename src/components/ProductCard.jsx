import { catLabel } from "../data/products";

export default function ProductCard({ product: p }) {
  return (
    <div className="product-card">
    {p.imageUrl && p.imageUrl !== "test" && (
        <div style={{ textAlign: "center", padding: "10px" }}>
          <img
            src={p.imageUrl}
            alt={p.name}
            style={{
              width: "100%",
              maxHeight: "150px",
              objectFit: "contain",
              borderRadius: "8px"
            }}
          />
        </div>
      )}
      <div className="product-card-header">
        <div>
          <div className="product-category-tag">{catLabel(p.cat)}</div>
          <div className="product-icon" style={{ fontSize: "32px", marginTop: "8px" }}>
            {!p.imageUrl || p.imageUrl === "test" ? "💊" : null}
          </div>
          <div className="product-icon" style={{ fontSize: "32px", marginTop: "8px" }}>{p.icon}</div>
        </div>
      </div>
      <div className="product-card-body">
        <div className="product-name">{p.name}</div>
      </div>
    </div>
  );
}