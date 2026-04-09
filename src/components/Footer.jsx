import { Link } from "react-router-dom";
export default function Footer() {

  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-brand">
          <h3>Tandish Pharmaceuticals Pvt. Ltd.</h3>
          <div className="tagline">Quality · Integrity · Innovation</div>
        </div>
        <div>
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Use</a></li>
          </ul>
        </div>
        <div>
          <h4>Products</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/products">Tablets & Capsules</Link></li>
            <li><Link to="/products">Syrups & Suspensions</Link></li>
            <li><Link to="/products">Injectables</Link></li>
            <li><Link to="/products">Nutraceuticals</Link></li>
            <li><a href="#">Product Catalogue</a></li>
          </ul>
        </div>
        <div>
          <h4>Contact</h4>
          <div className="footer-contact-item"><span>📍</span><span>215,A - Bajrang Nagar, Dewas Madhya Pradesh-455001</span></div>
          <div className="footer-contact-item"><span>📞</span><span>+91 70114 56805</span></div>
          <div className="footer-contact-item"><span>✉</span><span>tandishpharmainfo@gmail.com</span></div>
          <div className="footer-contact-item"><span>⏰</span><span>Mon–Sat: 9:00 AM – 6:00 PM</span></div>
        </div>
      </div>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
        <div
          className="footer-bottom-inner"
          style={{
            borderTop: "1px solid rgba(255,255,255,0.08)",
            marginTop: "44px",
            paddingTop: "20px",
            paddingBottom: "8px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "12px",
          }}
        >
          <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.4)" }}>
            © 2025 Tandish Pharmaceuticals Pvt. Ltd. All Rights Reserved.
          </p>
          <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.4)" }}>
            Registered in India · Made with ❤️ for Healthcare
          </p>
        </div>
        <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.28)", lineHeight: "1.7", textAlign: "center", padding: "16px 0 24px" }}>
          <strong style={{ color: "rgba(255,255,255,0.4)" }}>Disclaimer:</strong> The information provided on this website is for informational and trade purposes only and is intended for registered healthcare professionals, licensed chemists, and authorised distributors. Products displayed are prescription medicines (Rx) and should only be dispensed against a valid prescription from a registered medical practitioner. Tandish Pharmaceuticals Pvt. Ltd. does not promote self-medication. All drug information, compositions, and indications are subject to prescribing information and applicable regulations under the Drugs and Cosmetics Act, 1940. For medical advice, please consult a qualified physician.
        </p>
      </div>
    </footer>
  );
}