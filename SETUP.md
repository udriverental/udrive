# UDrive Admin — Firebase Setup Guide

This walks you through setting up your admin login + database. **One-time setup, ~10 minutes.**

After this, your site will:
- Show cars from a live database (instead of a hardcoded list)
- Let you log in at `/admin.html` to add/edit/delete cars and prices
- Show changes to visitors instantly — no re-deploying

---

## Step 1 — Create a Firebase project

1. Go to **https://console.firebase.google.com** and sign in with your Google account.
2. Click **"Add project"**.
3. Name it `udrive`. Click **Continue**.
4. **Disable Google Analytics** (you don't need it). Click **Create project** and wait ~30 seconds.

## Step 2 — Add a Web App

1. On the project home page, click the **`</>`** (web) icon to add a web app.
2. Nickname it `udrive-web`. **Don't** check "Firebase Hosting". Click **Register app**.
3. Firebase shows you a code snippet. Find the part that looks like:
   ```js
   const firebaseConfig = {
     apiKey: "AIza...",
     authDomain: "udrive-xxxx.firebaseapp.com",
     projectId: "udrive-xxxx",
     storageBucket: "udrive-xxxx.appspot.com",
     messagingSenderId: "123456789",
     appId: "1:123456789:web:abcdef"
   };
   ```
4. **Copy those 6 values** into [firebase-config.js](firebase-config.js) — replace each `PASTE_…` string with the matching real value.
5. Click **Continue to console**.

## Step 3 — Enable the three services

In the Firebase console sidebar (left side):

### 3a. Firestore Database
- Click **Build → Firestore Database → Create database**
- Pick **"Start in production mode"** (we'll add rules in step 5)
- Pick a location near you (e.g. `eur3 (europe-west)`) → **Enable**

### 3b. ~~Storage~~ — Skip this step
Firebase Storage is **not needed** — photos go to Cloudinary (set up in Step 3c below).

### 3c. Authentication
- Click **Build → Authentication → Get started**
- Click the **Sign-in method** tab
- Click **Email/Password** → toggle **Enable** → **Save**

## Step 3d — Set up Cloudinary (for photos — free, no credit card)

Cloudinary handles your car photos. It's free and more reliable than Firebase Storage.

1. Go to **https://cloudinary.com/users/register_free** and create a free account
2. After signing in, your **Cloud Name** is shown in the top-left of the dashboard (e.g. `dxyz1234a`)
3. Click **Settings** (gear icon) → **Upload** tab → scroll to **"Upload presets"** → click **Add upload preset**
   - **Signing mode:** Unsigned
   - **Folder:** `udrive-cars` (keeps photos organised)
   - Click **Save**
   - The preset name is shown in the list (e.g. `ml_default` or `udrive_unsigned`)
4. Open [firebase-config.js](firebase-config.js) and paste your values:
   ```js
   cloudName:    "dxyz1234a",           // ← your cloud name
   uploadPreset: "udrive_unsigned",     // ← your preset name
   ```

## Step 4 — Create your admin account

1. In **Authentication**, click the **Users** tab → **Add user**
2. Enter your email + a strong password (write it down somewhere safe)
3. Click **Add user**

This is the only login that will work for `admin.html`.

## Step 5 — Set security rules

These rules make sure visitors can read your cars but only **you** (logged in) can change them.

### Firestore rules
1. **Build → Firestore Database → Rules** tab
2. Replace everything with:
   ```
   rules_version = '2';
   service cloud.firestore {
     match /databases/{database}/documents {
       match /cars/{carId} {
         allow read: if true;
         allow write: if request.auth != null;
       }
     }
   }
   ```
3. Click **Publish**.

### Storage rules — Skip
Firebase Storage is not used. No storage rules needed.

## Step 6 — Run the migration (uploads your existing 30 cars)

1. Make sure your local server is running: `node serve.mjs`
2. Open **http://localhost:3000/migrate.html**
3. Sign in with the admin email + password from Step 4
4. Click **"Start migration →"** — wait while it uploads each car and its photos (a few minutes)
5. When you see "Migration complete!", you're done. **Delete `migrate.html`** — you won't need it again.

## Step 7 — Try it!

1. Open **http://localhost:3000/admin.html** → sign in
2. Edit one car's price — save
3. Open **http://localhost:3000** in another tab → refresh → the new price should appear

🎉 Done.

---

## Day-to-day usage

- **Edit a car / change a price:** open `admin.html`, click **Edit** on the car
- **Add a new car:** click **+ Add new car**, fill in the fields, drag in photos, save
- **Delete a car:** click **Delete** on the row
- **Photos:** drag JPG/PNG/WebP files onto the upload area in the edit form

Visitors see your changes within a few seconds of you saving — no need to upload anything to GitHub.

## Hosting the site

Both **GitHub Pages** and **Vercel** work the same — just upload the project files. Once Firebase is configured, the site uses the database wherever it's hosted.

After hosting:
- Add your live domain (e.g. `udrive.com` or `your-name.github.io`) under **Firebase Console → Authentication → Settings → Authorized domains** so login works on the live site too.

## Troubleshooting

- **"Firebase isn't configured"** → you haven't pasted your config into `firebase-config.js`, or the values still start with `PASTE_`.
- **Login says "Email or password is incorrect"** → check that you added your user under **Authentication → Users**.
- **Photos don't show after migration** → check that your Cloudinary upload preset is set to **Unsigned** (Step 3d).
- **Site shows old cars after configuring Firebase** → the site falls back to the built-in list when Firestore is empty. Run the migration (Step 6) to populate it.
