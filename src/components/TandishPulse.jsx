import { useState, useRef } from "react";
import { appConfig } from "../config/appConfig";
import "./TandishPulse.css";

export default function TandishPulse({ showInstallGuide = true }) {
  const [selectedScreenshot, setSelectedScreenshot] = useState(null);
  const [activeGuideTab, setActiveGuideTab] = useState("steps");
  const [guideOpen, setGuideOpen] = useState(false);
  const [qrModalOpen, setQrModalOpen] = useState(false);
  const [downloading, setDownloading] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);
  const [copied, setCopied] = useState(false);

  const galleryRef = useRef(null);

  // Dynamic QR Code link
  const currentOrigin = typeof window !== "undefined" ? window.location.origin : "";
  const fullDownloadUrl = appConfig.apkDownloadUrl.startsWith("http")
    ? appConfig.apkDownloadUrl
    : `${currentOrigin}${appConfig.apkDownloadUrl}`;

  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=220x220&margin=10&data=${encodeURIComponent(fullDownloadUrl)}`;

  const handleDownload = () => {
    setDownloading(true);
    setDownloadSuccess(false);

    setTimeout(() => {
      setDownloading(false);
      setDownloadSuccess(true);
    }, 1200);
  };

  const handleCopyLink = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(fullDownloadUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const scrollGallery = (direction) => {
    if (galleryRef.current) {
      const scrollAmount = direction === "left" ? -320 : 320;
      galleryRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="tandish-pulse-section" id="tandish-pulse">
      {/* Ambient background glows */}
      <div className="gp-ambient-teal"></div>
      <div className="gp-ambient-blue"></div>

      <div className="pulse-inner">

        {/* GOOGLE PLAY STORE HEADER CARD */}
        <div className="gp-store-card">
          
          <div className="gp-header-top">
            
            {/* APP ICON */}
            <div className="gp-app-icon-wrapper">
              <div className="gp-app-icon">
                <div className="gp-app-icon-inner">
                  <span className="gp-icon-symbol">🧰</span>
                  <span className="gp-icon-plus">+</span>
                </div>
              </div>
            </div>

            {/* APP TITLES & DEVELOPER */}
            <div className="gp-app-info">
              <div className="gp-badge-verified">
                <span className="gp-verified-check">✓</span> Official Enterprise App
              </div>
              <h1 className="gp-app-title">{appConfig.appName}</h1>
              <p className="gp-developer-name">{appConfig.developer}</p>
              <div className="gp-sub-badges">
                <span className="gp-tag-pill">{appConfig.category}</span>
                <span className="gp-tag-dot">•</span>
                <span className="gp-tag-text">Contains no ads</span>
                <span className="gp-tag-dot">•</span>
                <span className="gp-tag-text">No in-app purchases</span>
              </div>
            </div>

          </div>

          {/* GOOGLE PLAY STATS ROW */}
          <div className="gp-stats-row">
            <div className="gp-stat-item">
              <div className="gp-stat-val">
                {appConfig.rating} <span className="gp-star">★</span>
              </div>
              <div className="gp-stat-lbl">{appConfig.reviewCount}</div>
            </div>

            <div className="gp-stat-divider"></div>

            <div className="gp-stat-item">
              <div className="gp-stat-val">{appConfig.downloads}</div>
              <div className="gp-stat-lbl">Downloads</div>
            </div>

            <div className="gp-stat-divider"></div>

            <div className="gp-stat-item">
              <div className="gp-stat-val gp-rating-box">
                <span>3+</span>
              </div>
              <div className="gp-stat-lbl">{appConfig.contentRating}</div>
            </div>

            <div className="gp-stat-divider"></div>

            <div className="gp-stat-item">
              <div className="gp-stat-val">{appConfig.fileSize}</div>
              <div className="gp-stat-lbl">Download Size</div>
            </div>

            <div className="gp-stat-divider"></div>

            <div className="gp-stat-item">
              <div className="gp-stat-val" style={{ color: "#7dcea0" }}>
                🛡️ Safe
              </div>
              <div className="gp-stat-lbl">Virus Scanned</div>
            </div>
          </div>

          {/* DOWNLOAD & ACTION BUTTONS */}
          <div className="gp-action-bar">
            <a
              href={appConfig.apkDownloadUrl}
              download={appConfig.apkFileName}
              className={`gp-btn-install ${downloading ? "loading" : ""} ${downloadSuccess ? "success" : ""}`}
              onClick={handleDownload}
              title="Download Tandish Pulse APK (66.5 MB)"
            >
              <span className="gp-btn-icon">
                {downloadSuccess ? "✓" : downloading ? "⏳" : "📥"}
              </span>
              <span className="gp-btn-text">
                {downloadSuccess
                  ? "APK Download Started!"
                  : downloading
                  ? "Initializing Download..."
                  : `Install APK (${appConfig.fileSize})`}
              </span>
            </a>

            <button
              type="button"
              className="gp-btn-secondary"
              onClick={() => setQrModalOpen(true)}
              title="Scan QR Code to download on smartphone"
            >
              <span>📱</span> Scan QR
            </button>

            {showInstallGuide && (
              <button
                type="button"
                className="gp-btn-secondary"
                onClick={() => setGuideOpen(!guideOpen)}
              >
                <span>📖</span> {guideOpen ? "Close Guide" : "Install Help"}
              </button>
            )}

            <button
              type="button"
              className="gp-btn-secondary"
              onClick={handleCopyLink}
              title="Copy APK Download Link"
            >
              <span>🔗</span> {copied ? "Link Copied!" : "Share Link"}
            </button>
          </div>

          {/* COMPATIBILITY NOTICE */}
          <div className="gp-device-compat">
            <span className="gp-compat-icon">📱</span>
            <span>
              This app is compatible with all your devices running <strong>{appConfig.minAndroid}</strong> (Samsung, Xiaomi, Vivo, Oppo, OnePlus).
            </span>
          </div>

          {/* DOWNLOAD SUCCESS ALERT */}
          {downloadSuccess && (
            <div className="gp-download-alert">
              <div className="gp-alert-icon">🎉</div>
              <div className="gp-alert-content">
                <strong>Downloading <code>tandish-pulse.apk</code> ({appConfig.fileSize})!</strong>
                <p>
                  Check your phone notification tray or Downloads folder. When the download completes, tap the file to install.
                </p>
              </div>
              <button
                className="gp-alert-close"
                onClick={() => setDownloadSuccess(false)}
              >
                ✕
              </button>
            </div>
          )}

        </div>

        {/* SCREENSHOTS CAROUSEL SECTION (GOOGLE PLAY STORE STYLE) */}
        <div className="gp-screenshots-section">
          <div className="gp-section-header">
            <div>
              <h3 className="gp-section-title">App Screenshots &amp; Preview</h3>
              <p className="gp-section-subtitle">
                Swipe or scroll through real screenshots of the Tandish Pulse sales force platform
              </p>
            </div>
            <div className="gp-carousel-controls">
              <button
                className="gp-arrow-btn"
                onClick={() => scrollGallery("left")}
                aria-label="Scroll left"
              >
                ‹
              </button>
              <button
                className="gp-arrow-btn"
                onClick={() => scrollGallery("right")}
                aria-label="Scroll right"
              >
                ›
              </button>
            </div>
          </div>

          {/* HORIZONTAL SCROLL GALLERY */}
          <div className="gp-screenshots-gallery" ref={galleryRef}>
            {appConfig.screenshots.map((shot, idx) => (
              <div
                key={shot.id}
                className="gp-screenshot-card"
                onClick={() => setSelectedScreenshot(shot)}
              >
                <div className="gp-phone-bezel">
                  <img
                    src={shot.image}
                    alt={shot.title}
                    className="gp-screenshot-img"
                    loading="lazy"
                  />
                  <div className="gp-screenshot-overlay">
                    <span>🔍 Tap to Expand</span>
                  </div>
                </div>
                <div className="gp-screenshot-caption">
                  <h5>{shot.title}</h5>
                  <p>{shot.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ABOUT THIS APP (GOOGLE PLAY STYLE) */}
        <div className="gp-about-section">
          <div className="gp-about-header">
            <h3>About this app</h3>
            <span className="gp-category-pill">Field Force Automation (SFA)</span>
          </div>

          <p className="gp-about-desc">
            {appConfig.shortDesc}
          </p>

          {/* PLAY STORE TAGS */}
          <div className="gp-tags-cloud">
            {appConfig.tags.map((tag, idx) => (
              <span key={idx} className="gp-keyword-tag">
                #{tag}
              </span>
            ))}
          </div>

          {/* KEY MODULE HIGHLIGHTS */}
          <div className="gp-features-grid">
            {appConfig.features.map((feat, idx) => (
              <div key={idx} className="gp-feat-card">
                <div className="gp-feat-top">
                  <span className="gp-feat-icon">{feat.icon}</span>
                  <span className="gp-feat-tag">{feat.tag}</span>
                </div>
                <h4>{feat.title}</h4>
                <p>{feat.description}</p>
              </div>
            ))}
          </div>

          {/* DATA SAFETY ACCORDION (PLAY STORE SPECIFIC) */}
          <div className="gp-safety-box">
            <div className="gp-safety-header">
              <span className="gp-safety-icon">🛡️</span>
              <div>
                <h4>Data Safety &amp; Trust</h4>
                <p>Safety starts with understanding how developers collect and share your data</p>
              </div>
            </div>

            <div className="gp-safety-items">
              <div className="gp-safety-item">
                <span className="safety-check">✓</span>
                <div>
                  <strong>No data shared with third parties</strong>
                  <p>All visit logs, doctor calls, and order books belong exclusively to Tandish Pharmaceuticals.</p>
                </div>
              </div>

              <div className="gp-safety-item">
                <span className="safety-check">✓</span>
                <div>
                  <strong>Data encrypted in transit</strong>
                  <p>Your field punches, MPIN, and daily call reports are transferred over secure SSL/TLS connections.</p>
                </div>
              </div>

              <div className="gp-safety-item">
                <span className="safety-check">✓</span>
                <div>
                  <strong>High-Precision GPS &amp; Biometrics</strong>
                  <p>GPS tracking is strictly bound to approved field routes (e.g. Metro North HQ) during active work hours.</p>
                </div>
              </div>
            </div>
          </div>

          {/* APP INFO SPECIFICATIONS TABLE */}
          <div className="gp-specs-table">
            <div className="gp-spec-row">
              <span className="spec-name">Version</span>
              <span className="spec-val">{appConfig.version} (Build {appConfig.buildNumber})</span>
            </div>
            <div className="gp-spec-row">
              <span className="spec-name">Updated on</span>
              <span className="spec-val">{appConfig.releaseDate}</span>
            </div>
            <div className="gp-spec-row">
              <span className="spec-name">Requires Android</span>
              <span className="spec-val">{appConfig.minAndroid}</span>
            </div>
            <div className="gp-spec-row">
              <span className="spec-name">Package</span>
              <span className="spec-val">tandish_pulse_everywhere</span>
            </div>
            <div className="gp-spec-row">
              <span className="spec-name">Offered by</span>
              <span className="spec-val">{appConfig.developer}</span>
            </div>
          </div>

        </div>

        {/* EXPANDABLE INSTALLATION GUIDE */}
        {guideOpen && (
          <div className="gp-install-guide">
            <div className="gp-guide-nav">
              <h3>📲 Step-by-Step Android Installation Guide</h3>
              <div className="gp-tab-group">
                <button
                  className={`gp-tab-btn ${activeGuideTab === "steps" ? "active" : ""}`}
                  onClick={() => setActiveGuideTab("steps")}
                >
                  Quick Steps
                </button>
                <button
                  className={`gp-tab-btn ${activeGuideTab === "brands" ? "active" : ""}`}
                  onClick={() => setActiveGuideTab("brands")}
                >
                  Samsung / Redmi / Vivo Help
                </button>
              </div>
            </div>

            {activeGuideTab === "steps" && (
              <div className="gp-steps-row">
                {appConfig.installSteps.map((s) => (
                  <div key={s.step} className="gp-step-box">
                    <div className="gp-step-num">{s.step}</div>
                    <h5>{s.title}</h5>
                    <p>{s.desc}</p>
                  </div>
                ))}
              </div>
            )}

            {activeGuideTab === "brands" && (
              <div className="gp-brands-row">
                {appConfig.deviceGuides.map((g, idx) => (
                  <div key={idx} className="gp-brand-card">
                    <h5>{g.brand}</h5>
                    <p>{g.steps}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

      </div>

      {/* MODAL: FULL SCREENSHOT LIGHTBOX VIEWER */}
      {selectedScreenshot && (
        <div
          className="gp-modal-backdrop"
          onClick={() => setSelectedScreenshot(null)}
        >
          <div
            className="gp-modal-card"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="gp-modal-close"
              onClick={() => setSelectedScreenshot(null)}
            >
              ✕
            </button>
            <div className="gp-modal-body">
              <img
                src={selectedScreenshot.image}
                alt={selectedScreenshot.title}
                className="gp-modal-img"
              />
              <div className="gp-modal-info">
                <h4>{selectedScreenshot.title}</h4>
                <p>{selectedScreenshot.subtitle}</p>
                <a
                  href={appConfig.apkDownloadUrl}
                  download={appConfig.apkFileName}
                  className="gp-btn-install"
                  style={{ display: "inline-flex", marginTop: "14px" }}
                >
                  <span>📥</span> Install App
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* MODAL: SCAN QR CODE TO SMARTPHONE */}
      {qrModalOpen && (
        <div
          className="gp-modal-backdrop"
          onClick={() => setQrModalOpen(false)}
        >
          <div
            className="gp-qr-modal-card"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="gp-modal-close"
              onClick={() => setQrModalOpen(false)}
            >
              ✕
            </button>
            <div className="gp-qr-modal-body">
              <span className="gp-qr-icon">📱</span>
              <h3>Scan to Download on Phone</h3>
              <p>
                Point your smartphone camera at this QR code to download <strong>Tandish-Pulse.apk</strong> directly onto your device.
              </p>
              <div className="gp-qr-code-img-box">
                <img
                  src={qrCodeUrl}
                  alt="QR Code"
                  className="gp-qr-image"
                />
              </div>
              <button
                type="button"
                className="gp-btn-secondary"
                style={{ width: "100%", justifyContent: "center", marginTop: "12px" }}
                onClick={handleCopyLink}
              >
                {copied ? "✓ Link Copied!" : "🔗 Copy Direct Download Link"}
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
