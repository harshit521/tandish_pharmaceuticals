import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";

// 🔥 Firebase imports
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

export default function Products() {
  const [products, setProducts] = useState([]); // 🔥 now dynamic
  const [activeFilter, setActiveFilter] = useState("all");

  // 🔥 FETCH FROM FIREBASE
  useEffect(() => {
    const fetchProducts = async () => {
      const snapshot = await getDocs(collection(db, "products"));
      const data = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setProducts(data);
    };

    fetchProducts();
  }, []);

  // 🔥 FILTER LOGIC (same as before)
  const filtered =
    activeFilter === "all"
      ? products
      : products.filter((p) => p.cat === activeFilter);

  const filters = [
    { key: "all", label: "All Products" },
    { key: "tablet", label: "Tablets" },
    { key: "syrup", label: "Syrups & Suspensions" },
    { key: "capsule", label: "Capsules" },
    { key: "injectable", label: "Injectables" },
    { key: "nutra", label: "Nutraceuticals" },
  ];

  return (
    <>
      <div className="breadcrumb">
        <div className="breadcrumb-inner">
          <Link to="/">Home</Link> &nbsp;›&nbsp; Products
        </div>
      </div>

      <div className="products-header">
        <div className="section-inner">
          <div className="section-label" style={{ color: "#7dcea0" }}>
            Our Portfolio
          </div>
          <h2>Product Catalogue</h2>
          <p>Prescription &amp; OTC Range</p>
        </div>
      </div>

      <section>
        <div className="section-inner">
          

          <div className="products-filter">
            {filters.map((f) => (
              <button
                key={f.key}
                className={`filter-btn${
                  activeFilter === f.key ? " active" : ""
                }`}
                onClick={() => setActiveFilter(f.key)}
              >
                {f.label}
              </button>
            ))}
          </div>

          <div className="products-grid">
            {filtered.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}