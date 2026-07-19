# Clutch — Free Fire Tournaments App

This is a ready-to-deploy React + Vite project (Tailwind styled, PWA-enabled).

## Step 1 — Get this project onto GitHub
1. Go to github.com, create a free account if you don't have one.
2. Click "New repository", name it e.g. `clutch-app`, make it Public, create it.
3. Click "uploading an existing file" and drag in every file/folder from this project
   (keep the folder structure — `src/` must stay a folder).
4. Commit the files.

## Step 2 — Deploy it for free with Vercel
1. Go to vercel.com and sign up (you can sign up directly with your GitHub account).
2. Click "Add New Project", pick the `clutch-app` repo you just created.
3. Leave all settings as default (Vercel auto-detects Vite) and click "Deploy".
4. In a minute or two you'll get a live link like `https://clutch-app-yourname.vercel.app`.
   That's your hosted link.

## Step 3 — Turn the hosted link into a downloadable APK
1. Go to https://www.pwabuilder.com
2. Paste your Vercel link and click "Start".
3. Once it scans your site, choose the Android package option and download the generated APK.
4. Upload that APK file to Google Drive (or any file host), share the download link —
   anyone who opens it on Android can tap to install (they'll need to allow
   "install from unknown sources" the first time, since it's not from the Play Store).

## Notes
- Accounts and coin balances are stored in the browser's local storage on each device —
  there's no shared backend, so an account made on one phone won't show up on another.
  For real cross-device accounts you'd eventually want a proper backend (e.g. Supabase or Firebase).
- The three deposit codes are hardcoded in `src/App.jsx` (`VALID_CODES`) — for production
  these should be validated server-side instead so people can't read them from the code.
