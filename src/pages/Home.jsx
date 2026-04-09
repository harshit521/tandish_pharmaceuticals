export default function Home() {
  return (
    <>
      {/* HERO */}
      <div className="hero">
        <div className="hero-contact">
          <p>
            Phone No: +91 70114 56805
            &nbsp;&nbsp;|&nbsp;&nbsp;
            Email: tandishpharmainfo@gmail.com
          </p>
        </div>
        <div className="hero-content">
          <h1>Welcome to Tandish Pharma</h1>
          <p>
            At Tandish Pharma, we are committed to delivering high-quality pharmaceutical solutions that improve lives and promote better healthcare outcomes. With a strong focus on innovation, safety, and reliability, we strive to meet the evolving needs of patients and healthcare professionals.
            We believe that healthcare is not just about medicines but about building a healthier future for communities. Our dedicated team works tirelessly to research, develop, and supply a wide range of pharmaceutical products that cater to diverse medical needs. From essential medicines to advanced healthcare solutions, Tandish Pharma stands as a symbol of quality and integrity.
            Customer satisfaction and ethical practices are at the core of everything we do. We aim to create long-term relationships with our partners, clients, and customers by consistently delivering excellence. As we continue to grow, our mission remains clear — to provide accessible, affordable, and innovative healthcare solutions that make a meaningful difference in people's lives.
          </p>
        </div>
      </div>

      {/* HIGHLIGHTS STRIP */}
      <div className="highlights">
        <div className="highlights-inner">
          <div className="highlight-item">
            <div className="highlight-icon">📜</div>
            <div><h4>ISO 9001:2015</h4><p>Quality Management System</p></div>
          </div>
          <div className="highlight-item">
            <div className="highlight-icon">🩺</div>
            <div><h4>500+ Doctors &amp; Clinics</h4><p>Trusted Healthcare Partners</p></div>
          </div>
          <div className="highlight-item">
            <div className="highlight-icon">🚚</div>
            <div><h4>Pan India Distribution</h4><p>18+ States Covered</p></div>
          </div>
        </div>
      </div>

      {/* BUSINESS SEGMENTS */}
      <section className="segments">
        <div className="section-inner">
          <div className="section-header center">
            <div className="section-label">Our Portfolio</div>
            <div className="section-title">Business Segments</div>
            <p className="section-subtitle">Comprehensive range of pharmaceutical formulations across all major therapeutic categories</p>
          </div>
          <div className="segments-grid">
            <div className="segment-card">
              <div className="segment-icon">💊</div>
              <h3>Tablets &amp; Capsules</h3>
              <p>Wide range of solid dosage forms including immediate release, sustained release, and enteric coated tablets across therapeutic categories.</p>
              <div className="segment-count">70+ SKUs Available</div>
            </div>
            <div className="segment-card">
              <div className="segment-icon">🧴</div>
              <h3>Syrups &amp; Suspensions</h3>
              <p>Paediatric and adult oral liquid formulations including cough syrups, antacid suspensions, nutritional supplements, and antibiotics.</p>
              <div className="segment-count">40+ SKUs Available</div>
            </div>
            <div className="segment-card">
              <div className="segment-icon">💉</div>
              <h3>Injectables</h3>
              <p>Sterile parenteral preparations including small volume parenterals (SVPs), LVPs, lyophilized products and ready-to-use vials.</p>
              <div className="segment-count">30+ SKUs Available</div>
            </div>
            <div className="segment-card">
              <div className="segment-icon">🌿</div>
              <h3>Nutraceuticals</h3>
              <p>FSSAI-approved health supplements, vitamins, minerals, antioxidants, protein supplements, and functional food ingredients.</p>
              <div className="segment-count">60+ SKUs Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section>
        <div className="section-inner">
          <div className="two-col">
            <div>
              <div className="section-label">Our Advantage</div>
              <div className="section-title">Why Choose Tandish Pharmaceuticals?</div>
              <p className="section-subtitle">We combine cutting-edge technology with decades of pharmaceutical expertise to deliver consistent quality at every step.</p>
              <div style={{ marginTop: "28px" }}>
                <ul className="list-check">
                  <li>Dedicated Quality Assurance &amp; Quality Control labs</li>
                  <li>Experienced team of pharmacists and chemists</li>
                  <li>Transparent pricing with no hidden charges</li>
                  <li>Dedicated customer support for distributors &amp; chemists</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section className="certs">
        <div className="section-inner">
          <div className="section-header center">
            <div className="section-label" style={{ color: "#7dcea0" }}>Our Accreditations</div>
            <div className="section-title" style={{ color: "#fff" }}>Certifications &amp; Regulatory Compliance</div>
            <p className="section-subtitle" style={{ color: "rgba(255,255,255,0.7)" }}>Our manufacturing facility and quality systems are audited and certified by leading regulatory bodies</p>
          </div>
          <div className="certs-grid">
            <div className="cert-card">
              <div className="cert-badge">📜</div>
              <h4>ISO 9001:2015</h4>
              <p>Quality Management System certified by Bureau Veritas</p>
            </div>
            <div className="cert-card">
              <div className="cert-badge">🌿</div>
              <h4>FSSAI Licensed</h4>
              <p>Food Safety and Standards Authority of India</p>
            </div>
            <div className="cert-card">
              <div className="cert-badge">🔬</div>
              <h4>Drug License (Schedule M)</h4>
              <p>Central Drugs Standard Control Organization</p>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST NUMBERS */}
      <section className="bg-grey">
        <div className="section-inner">
          <div className="section-header center">
            <div className="section-label">Our Reach</div>
            <div className="section-title">Trusted Across India</div>
          </div>
          <div className="trust-grid">
            <div className="trust-card">
              <div className="trust-num">3000<span>+</span></div>
              <p>Registered Doctors &amp; Chemist across India trust Tandish for their prescription requirements</p>
            </div>
            <div className="trust-card">
              <div className="trust-num">300<span>+</span></div>
              <p>Medicines available all across India</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}