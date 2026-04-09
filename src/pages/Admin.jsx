import { useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, addDoc, getDocs, deleteDoc, doc } from "firebase/firestore";

export default function Admin() {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [cat, setCat] = useState("");
  const [file, setFile] = useState(null);

  // 🔥 FETCH PRODUCTS
  const fetchProducts = async () => {
    const snapshot = await getDocs(collection(db, "products"));
    const data = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    setProducts(data);
  };

  useEffect(() => {
    const fetchData = async () => {
      const snapshot = await getDocs(collection(db, "products"));
      const data = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setProducts(data);
    };
  
    fetchData();
  }, []);

  // 🔥 CLOUDINARY UPLOAD
  const uploadImage = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "products_upload"); // 🔁 change if needed

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dxm5ecnw2/image/upload", // 🔁 change cloud name
      {
        method: "POST",
        body: formData
      }
    );

    const data = await res.json();
    return data.secure_url;
  };

  // 🔥 ADD PRODUCT
  const addProduct = async () => {
    if (!name || !cat || !file) {
      alert("Fill all fields");
      return;
    }

    try {
      const imageUrl = await uploadImage(file);

      await addDoc(collection(db, "products"), {
        name,
        cat,
        imageUrl
      });

      alert("Product added ✅");

      setName("");
      setCat("");
      setFile(null);

      fetchProducts();
    } catch (err) {
      console.log(err);
      alert("Error adding product");
    }
  };

  // 🔥 DELETE PRODUCT
  const deleteProduct = async (id) => {
    await deleteDoc(doc(db, "products", id));
    fetchProducts();
  };

  // 🎨 STYLES
  const container = {
    maxWidth: "1100px",
    margin: "40px auto",
    padding: "20px"
  };

  const title = {
    fontSize: "32px",
    fontWeight: "700",
    marginBottom: "20px"
  };

  const form = {
    display: "flex",
    gap: "10px",
    flexWrap: "wrap",
    marginBottom: "20px"
  };

  const input = {
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "6px",
    minWidth: "200px"
  };

  const button = {
    background: "#1f3c88",
    color: "white",
    border: "none",
    padding: "10px 16px",
    borderRadius: "6px",
    cursor: "pointer"
  };

  const productBox = {
    display: "flex",
    alignItems: "center",
    gap: "15px",
    border: "1px solid #eee",
    padding: "10px",
    borderRadius: "8px",
    marginBottom: "10px"
  };

  const deleteBtn = {
    background: "#c0392b",
    color: "white",
    border: "none",
    padding: "6px 12px",
    borderRadius: "5px",
    cursor: "pointer"
  };

  return (
    <div style={container}>
      <h1 style={title}>Admin Panel</h1>

      {/* FORM */}
      <div style={form}>
        <input
          style={input}
          placeholder="Product Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          style={input}
          placeholder="Category (tablet, syrup...)"
          value={cat}
          onChange={(e) => setCat(e.target.value)}
        />

        <input
          type="file"
          style={input}
          onChange={(e) => setFile(e.target.files[0])}
        />

        <button style={button} onClick={addProduct}>
          Add Product
        </button>
      </div>

      <hr />

      {/* PRODUCTS */}
      <h2 style={{ margin: "20px 0" }}>All Products</h2>

      {products.map((p) => (
        <div key={p.id} style={productBox}>
          <img
            src={p.imageUrl}
            alt={p.name}
            style={{ width: "60px", height: "60px", objectFit: "contain" }}
          />

          <div style={{ flex: 1, fontWeight: "500" }}>
            {p.name} <span style={{ color: "#777" }}>({p.cat})</span>
          </div>

          <button style={deleteBtn} onClick={() => deleteProduct(p.id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}