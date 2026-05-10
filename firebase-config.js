// ─────────────────────────────────────────────────────────────
//  UDrive config — Firebase (Auth + Firestore) + Cloudinary (photos)
//
//  Photos now use Cloudinary instead of Firebase Storage.
//  Firebase Storage is NOT needed — skip it in the Firebase console.
//
//  CLOUDINARY SETUP (free, no credit card):
//  1. Create account at https://cloudinary.com/users/register_free
//  2. After sign-in your Cloud Name is shown on the dashboard (top-left).
//     Paste it below as cloudName.
//  3. Go to Settings → Upload → scroll to "Upload presets" → Add upload preset
//     - Signing mode: Unsigned
//     - Folder: udrive-cars  (optional, keeps photos organised)
//     - Save → copy the preset name → paste as uploadPreset below.
// ─────────────────────────────────────────────────────────────

export const firebaseConfig = {
  apiKey: "AIzaSyBXJNUepgPpv7e4IOMjkZAHb-w1BFEZfQU",
  authDomain: "udrive-3ced9.firebaseapp.com",
  projectId: "udrive-3ced9",
  storageBucket: "udrive-3ced9.firebasestorage.app",
  messagingSenderId: "719597134620",
  appId: "1:719597134620:web:9ccf2daebe0b24b0ce90d9",
};

// ─── Cloudinary config (for photo uploads) ───────────────────
export const cloudinaryConfig = {
  cloudName:    "drykjcnte",    // e.g. "dxyz1234a"
  uploadPreset: "ujelhuom", // e.g. "udrive_unsigned"
};

// ─── Guards ──────────────────────────────────────────────────
export const isFirebaseConfigured = () =>
  !!firebaseConfig.apiKey && !firebaseConfig.apiKey.startsWith("PASTE_");

export const isCloudinaryConfigured = () =>
  !!cloudinaryConfig.cloudName && !cloudinaryConfig.cloudName.startsWith("PASTE_");
