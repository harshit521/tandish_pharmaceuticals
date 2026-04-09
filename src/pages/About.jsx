import { Link } from "react-router-dom";

export default function About() {
  return (
    <>
      <div className="breadcrumb">
        <div className="breadcrumb-inner">
          <Link to="/">Home</Link> &nbsp;›&nbsp; About Us
        </div>
      </div>
      <div className="products-header">
        <div className="section-inner">
          <div className="section-label" style={{ color: "#7dcea0" }}>Who We Are</div>
          <h2>About Tandish Pharmaceuticals</h2>
          <p>Two decades of pharmaceutical excellence — from lab to last mile</p>
        </div>
      </div>

      <section>
        <div className="section-inner">
          <div className="about-overview">
            <div>
              <div className="section-label">Company Overview</div>
              <div className="section-title">Building Trust Through Quality Since 2017</div>
              <p style={{ fontSize: "14px", color: "var(--grey-text)", lineHeight: "1.8" }}>
                We partner with doctors, chemists, distributors, and hospitals, offering a full portfolio of over 200 pharmaceutical products across diverse therapeutic areas including anti-infectives, cardiovascular, dermatology, gastroenterology, and more.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-grey">
        <div className="section-inner">
          <div className="section-header center">
            <div className="section-label">Our Direction</div>
            <div className="section-title">Mission &amp; Vision</div>
          </div>
          <div className="mv-grid">
            <div className="mv-card mission">
              <h4>🎯 Our Mission</h4>
              <p>To provide high-quality, safe, and affordable medicines to patients across India by maintaining the highest standards of pharmaceutical manufacturing, regulatory compliance, and ethical business conduct. We are committed to improving health outcomes through innovation and responsible practices.</p>
            </div>
            <div className="mv-card vision">
              <h4>🌟 Our Vision</h4>
              <p>To become a leading pharmaceutical company in India, recognized for our commitment to quality, innovation, and accessibility. We envision expanding our reach to every corner of the country and eventually establishing a presence in regulated international markets.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-grey">
        <div className="section-inner">
          <div className="two-col">
            <div>
              <div className="section-label">Our Journey</div>
              <div className="section-title">Key Milestones</div>
              <p className="section-subtitle">From a small API-based unit to a full-scale pharmaceutical manufacturer — our growth story.</p>
            </div>
            <div className="timeline mt-8">
              <div className="timeline-item">
                <div className="timeline-year">2017</div>
                <h4>Company Incorporation</h4>
                <p>Tandish Pharmaceuticals Pvt. Ltd. incorporated in Bhopal. Initial product range of 20 tablets and capsules launched.</p>
              </div>
              <div className="timeline-item">
                <div className="timeline-year">2019</div>
                <h4>ISO 9001:2015 Certification</h4>
                <p>Achieved ISO 9001:2015 certification. Crossed 100+ product portfolio milestone. Pan-India distribution network established.</p>
              </div>
              <div className="timeline-item">
                <div className="timeline-year">2022</div>
                <h4>Nutraceuticals Division Launch</h4>
                <p>Launched dedicated nutraceuticals division under FSSAI licence. Added 60+ health supplement SKUs.</p>
              </div>
              <div className="timeline-item">
                <div className="timeline-year">2024</div>
                <h4>8+ Years of Excellence</h4>
                <p>Celebrated 8 years. Serving 500+ doctors, 1,200+ chemists, and 75+ distributors across India.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}