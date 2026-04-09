import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <>
      <div className="breadcrumb">
        <div className="breadcrumb-inner">
          <Link to="/">Home</Link> &nbsp;›&nbsp; Contact Us
        </div>
      </div>
      <div className="products-header">
        <div className="section-inner">
          <div className="section-label" style={{ color: "#7dcea0" }}>Get in Touch</div>
          <h2>Contact Us</h2>
          <p>For product enquiries, distribution partnerships, and bulk orders — we're here to help</p>
        </div>
      </div>

      <section>
        <div className="section-inner">
          <div className="contact-grid">
            <div>
              <div className="contact-info-card">
                <h4>📍 Registered Office</h4>
                <div className="contact-detail">
                  <div className="contact-detail-icon">🏢</div>
                  <div className="contact-detail-text">
                    <strong>Tandish Pharmaceuticals Pvt. Ltd.</strong>
                    <p>215,A - Bajrang Nagar Dewas <br />Bhopal — 455001, Madhya Pradesh, India</p>
                  </div>
                </div>
              </div>

              <div className="contact-info-card">
                <h4>📞 Phone &amp; Email</h4>
                <div className="contact-detail">
                  <div className="contact-detail-icon">📞</div>
                  <div className="contact-detail-text">
                    <strong>Main Office</strong>
                    <p>+91 70114 56805</p>
                  </div>
                </div>
                <div className="contact-detail">
                  <div className="contact-detail-icon">✉️</div>
                  <div className="contact-detail-text">
                    <strong>General Enquiries</strong>
                    <p>tandishpharmainfo@gmail.com</p>
                  </div>
                </div>
              </div>

              <div className="contact-info-card">
                <h4>🕐 Business Hours</h4>
                <div className="contact-detail">
                  <div className="contact-detail-icon">📅</div>
                  <div className="contact-detail-text">
                    <strong>Monday to Saturday</strong>
                    <p>9:00 AM – 6:00 PM IST</p>
                  </div>
                </div>
                <div className="contact-detail">
                  <div className="contact-detail-icon">📅</div>
                  <div className="contact-detail-text">
                    <strong>Sunday</strong>
                    <p>Closed</p>
                  </div>
                </div>
              </div>

              <div className="map-placeholder">
                <div>
                  <div style={{ fontSize: "32px", marginBottom: "8px" }}>🗺️</div>
                  <p><strong>215,A - Bajrang Nagar Dewas, Bhopal</strong><br />MP — 455001</p>
                </div>
              </div>
            </div>

            <div className="form-card">
              <h3>Send Us an Enquiry</h3>
              <p>Fill in the form and our team will get back to you within 1 business day.</p>
              <div className="form-grid2">
                <div className="form-group">
                  <label>First Name *</label>
                  <input type="text" placeholder="Dr. Rajesh" />
                </div>
                <div className="form-group">
                  <label>Last Name *</label>
                  <input type="text" placeholder="Sharma" />
                </div>
              </div>
              <div className="form-group">
                <label>Email Address *</label>
                <input type="email" placeholder="rajesh.sharma@clinic.com" />
              </div>
              <div className="form-group">
                <label>Phone Number *</label>
                <input type="tel" placeholder="+91 98765 43210" />
              </div>
              <div className="form-group">
                <label>You are a *</label>
                <select>
                  <option>Select your profile</option>
                  <option>Doctor / Physician</option>
                  <option>Chemist / Pharmacist</option>
                  <option>Distributor / Stockist</option>
                  <option>Hospital / Clinic</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="form-group">
                <label>State / Region</label>
                <select>
                  <option>Select your state</option>
                  <option>Uttar Pradesh</option>
                  <option>Delhi NCR</option>
                  <option>Rajasthan</option>
                  <option>Haryana</option>
                  <option>Punjab</option>
                  <option>Bihar</option>
                  <option>Madhya Pradesh</option>
                  <option>Maharashtra</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="form-group">
                <label>Products / Subject of Interest</label>
                <input type="text" placeholder="e.g. Paracetol-500, Amoxinol Suspension" />
              </div>
              <div className="form-group">
                <label>Your Message</label>
                <textarea placeholder="Please describe your requirements, including quantities, product names, or any specific queries..."></textarea>
              </div>
              <button
                className="btn-primary"
                style={{ width: "100%", padding: "14px", backgroundColor: "var(--blue)", color: "var(--white)" }}
                onClick={() => alert("Thank you for your enquiry. Our team will contact you within 1 business day.")}
              >Submit Enquiry</button>
              <p style={{ fontSize: "11.5px", color: "var(--grey-text)", marginTop: "12px" }}>
                By submitting this form, you agree to our Privacy Policy. Your information will not be shared with third parties.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}