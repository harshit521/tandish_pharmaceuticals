import { Link } from "react-router-dom";
import TandishPulse from "../components/TandishPulse";
import { appConfig } from "../config/appConfig";

export default function TandishPulsePage() {
  return (
    <>
      {/* BREADCRUMB */}
      <div className="breadcrumb">
        <div className="breadcrumb-inner">
          <Link to="/">Home</Link> &nbsp;›&nbsp; Tandish Pulse Mobile App
        </div>
      </div>

      {/* HERO / INTERACTIVE APP SHOWCASE */}
      <TandishPulse showInstallGuide={true} />

      {/* DETAILED ENTERPRISE CAPABILITIES */}
      <section className="pulse-full-features">
        <div className="section-inner">
          <div className="section-header center">
            <div className="section-label">Enterprise Field Technology</div>
            <div className="section-title">Why Healthcare Leaders Choose Tandish Pulse</div>
            <p className="section-subtitle">
              Designed specifically for pharmaceutical supply chains, medical representatives, stockists, and hospital procurement officers.
            </p>
          </div>

          <div className="pulse-full-grid">
            {appConfig.features.map((feat, idx) => (
              <div key={idx} className="pulse-full-card">
                <div className="card-icon">{feat.icon}</div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
                  <h4 style={{ margin: 0 }}>{feat.title}</h4>
                  <span className="pulse-feat-tag">{feat.tag}</span>
                </div>
                <p>{feat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INSTALLATION SAFETY & FAQ */}
      <section>
        <div className="section-inner">
          <div className="section-header center">
            <div className="section-label">Safe &amp; Verified Distribution</div>
            <div className="section-title">Frequently Asked Questions</div>
          </div>

          <div className="why-grid">
            <div className="why-card">
              <div className="why-num">1</div>
              <div>
                <h4>Is the Tandish Pulse APK safe to install on my phone?</h4>
                <p>
                  Yes, 100%. The APK is built, signed, and distributed directly by Tandish Pharmaceuticals Pvt. Ltd. from our production codebase. It contains zero third-party ads or spyware.
                </p>
              </div>
            </div>

            <div className="why-card">
              <div className="why-num">2</div>
              <div>
                <h4>Why does Chrome/Android show "File might be harmful"?</h4>
                <p>
                  This is a standard default security notice shown by Android when downloading ANY <code>.apk</code> installer from a web browser instead of Google Play. Tap <strong>"Download anyway"</strong> to proceed safely.
                </p>
              </div>
            </div>

            <div className="why-card">
              <div className="why-num">3</div>
              <div>
                <h4>Which Android devices are supported?</h4>
                <p>
                  Tandish Pulse supports Android 7.0 and all newer Android versions (Android 10, 11, 12, 13, 14, and 15). Compatible with Samsung, Xiaomi, Redmi, Vivo, Oppo, Realme, OnePlus, and Motorola devices.
                </p>
              </div>
            </div>

            <div className="why-card">
              <div className="why-num">4</div>
              <div>
                <h4>How do I update when a new version is released?</h4>
                <p>
                  You can download the new APK file from this page at any time and install it over the existing app — all your offline data and login credentials will remain intact.
                </p>
              </div>
            </div>
          </div>

          {/* FINAL BOTTOM CTA */}
          <div style={{ textAlign: "center", marginTop: "50px" }}>
            <a
              href={appConfig.apkDownloadUrl}
              download={appConfig.apkFileName}
              className="btn-download-apk"
              style={{ display: "inline-flex" }}
            >
              <span className="btn-icon">📥</span>
              <span className="btn-text">
                <span className="btn-text-sub">Ready to install?</span>
                <span className="btn-text-main">Download {appConfig.appName} APK ({appConfig.fileSize})</span>
              </span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

