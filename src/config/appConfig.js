/**
 * Tandish Pulse Mobile App Configuration
 * Google Play Store style metadata & real app screenshots
 */

export const appConfig = {
  appName: "Tandish Pulse",
  appSubtitle: "Field Force Automation & Healthcare Operations",
  developer: "Tandish Pharmaceuticals Pvt. Ltd.",
  category: "Medical & Business",
  tagline: "Field force. One pulse.",
  shortDesc: "The official sales force automation (SFA) and distribution app for Tandish Pharmaceuticals. Clock-in with high-precision GPS geofencing, manage doctor calls, book POB orders, track chemist accounts, and sync offline seamlessly.",
  
  // App specifications
  version: "1.0.0",
  buildNumber: "1",
  fileSize: "66.5 MB",
  minAndroid: "Android 7.0 (Nougat) and up",
  releaseDate: "14 Oct 2026",
  apkFileName: "tandish-pulse.apk",
  apkDownloadUrl: "/tandish-pulse.apk",
  
  // Google Play style statistics
  rating: "4.8",
  reviewCount: "1.2K+ reviews",
  downloads: "10K+",
  contentRating: "Rated for 3+",
  verifiedStatus: "Verified Safe • Direct Enterprise APK",

  // Real App Screenshots (from WhatsApp build)
  screenshots: [
    {
      id: "dashboard",
      title: "Field Dashboard & Daily Targets",
      subtitle: "Track daily calls, duty status, POB bookings and field targets at a glance",
      image: "/app-screenshots/screenshot-dashboard.jpg"
    },
    {
      id: "geo",
      title: "Geo-Attendance & Route Plan",
      subtitle: "High-precision GPS map pinning, route selection, and field selfie clock-in",
      image: "/app-screenshots/screenshot-geo.jpg"
    },
    {
      id: "menu",
      title: "SFA Modules & Master Directory",
      subtitle: "Attendance, TP, DCR, e-Detailing, POB orders, and Doctor/Chemist master directories",
      image: "/app-screenshots/screenshot-menu.jpg"
    },
    {
      id: "login",
      title: "MPIN & Biometric Unlock",
      subtitle: "Quick and secure fingerprint or 4-digit MPIN access to your field workspace",
      image: "/app-screenshots/screenshot-login.jpg"
    },
    {
      id: "profile",
      title: "Field Profile & Settings",
      subtitle: "MR credentials, employee code, territory route, and account configuration",
      image: "/app-screenshots/screenshot-profile.jpg"
    },
    {
      id: "splash",
      title: "Tandish Pulse Welcome",
      subtitle: "Field force. One pulse. Specially engineered for Tandish field teams",
      image: "/app-screenshots/screenshot-splash.jpg"
    }
  ],

  // Google Play style tags
  tags: [
    "Medical SFA",
    "Field Force Automation",
    "POB Order Booking",
    "GPS Geo-Attendance",
    "Doctor DCR",
    "Offline Sync (Hive)"
  ],

  features: [
    {
      icon: "📍",
      title: "Geo-Attendance & Route Execution",
      description: "High-precision GPS map pinning with geofencing. Clock in, select your approved route (e.g. Metro North HQ), capture field selfies, and log working style with zero falsification.",
      tag: "GPS Accurate"
    },
    {
      icon: "🛍️",
      title: "POB Order Booking for Stockists",
      description: "Book Chemist and Stockist orders instantly right from the field. Track pending orders, order values, and dispatch consignment status in real time.",
      tag: "Instant POB"
    },
    {
      icon: "📋",
      title: "Daily Call Reports (DCR) & e-Detailing",
      description: "Log doctor and chemist calls with one tap. Integrated e-VA (Visual Aid) player allows digital presentation of 300+ Tandish formulations on mobile.",
      tag: "e-Detailing"
    },
    {
      icon: "📇",
      title: "HCP & Master Directories",
      description: "Complete database of Doctors, Chemists, and Stockists with specialty, contact details, preferred calling times, and purchase history.",
      tag: "Directory"
    },
    {
      icon: "🔄",
      title: "100% Offline-First Storage",
      description: "Works seamlessly without internet in remote hospital corridors and rural clinics. Automatically syncs with cloud when connectivity returns.",
      tag: "Zero Data Loss"
    },
    {
      icon: "🔐",
      title: "Biometric Fingerprint & MPIN Security",
      description: "Fast, frictionless unlock using hardware biometric fingerprint scanner or 4-digit custom MPIN for complete data privacy.",
      tag: "Biometric Safe"
    }
  ],

  installSteps: [
    {
      step: 1,
      title: "Tap Install / Download",
      desc: "Tap the green 'Download APK' button. The 66.5 MB official Tandish Pulse file will download to your phone."
    },
    {
      step: 2,
      title: "Tap Downloaded Notification",
      desc: "When download finishes, tap the notification or open your 'Downloads' folder and tap 'tandish-pulse.apk'."
    },
    {
      step: 3,
      title: "Allow Unknown Apps & Open",
      desc: "If Android asks for permission, tap 'Settings' -> 'Allow from this source'. Tap 'Install', then open the app and log in with your MPIN!"
    }
  ],

  deviceGuides: [
    {
      brand: "Samsung Galaxy (One UI)",
      steps: "Open APK in Downloads > Tap 'Settings' on prompt > Toggle 'Allow from this source' > Tap Install."
    },
    {
      brand: "Xiaomi / Redmi / POCO (HyperOS / MIUI)",
      steps: "Open APK > In security scan, tap 'Install' > Check 'I am aware of possible risks' > Tap OK."
    },
    {
      brand: "Vivo / iQOO / Oppo / Realme (Funtouch / ColorOS)",
      steps: "Open APK > Security prompt > Tap 'Settings' > Enable 'Allow app installs from this source' > Tap Install."
    },
    {
      brand: "OnePlus / Google Pixel / Motorola (OxygenOS / Stock Android)",
      steps: "Open APK from notification > Settings > Turn on 'Allow from this source' > Back button > Install."
    }
  ]
};
