// Copy this file to firebase.config.js and add your Firebase config
// firebase.config.js is gitignored and will not be committed
//
// To get your config:
// 1. Go to Firebase Console: https://console.firebase.google.com/
// 2. Select project "LilaFuel" (lilafuel)
// 3. Click the gear icon → Project settings
// 4. Scroll to "Your apps" → Add app (Web) if you haven't already
// 5. Copy the firebaseConfig object

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "lilafuel.firebaseapp.com",
  projectId: "lilafuel",
  storageBucket: "lilafuel.appspot.com",
  messagingSenderId: "966551842181",
  appId: "YOUR_APP_ID"
};

// Expose for use in index.html
if (typeof window !== "undefined") {
  window.firebaseConfig = firebaseConfig;
}
