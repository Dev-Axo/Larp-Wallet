# Upload to GitHub from iPhone

This repo is intentionally flat so it is easy to upload from Safari on iPhone.

## 1. Unzip
Open the ZIP in the iOS Files app. Tap it once to create the `Larp-Wallet-repo` folder.

## 2. Upload
1. In Safari, open: https://github.com/Dev-Axo/Larp-Wallet
2. If GitHub shows the mobile view and buttons are missing, tap `aA` in Safari → **Request Desktop Website**.
3. Open the repository's **Code** tab.
4. Tap **Add file** → **Upload files**.
5. Tap **choose your files** / **Choose files**.
6. Browse to the unzipped `Larp-Wallet-repo` folder in Files.
7. Select all of these files:
   - index.html
   - styles.css
   - app.js
   - manifest.webmanifest
   - sw.js
   - icon.svg
   - 404.html
   - README.md
8. Upload them at the repository ROOT. Do not put them inside another folder.
9. Commit directly to `main`.

## 3. Turn on GitHub Pages
1. In the repository, open **Settings**.
2. Open **Pages**.
3. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
4. Branch: `main`
5. Folder: `/ (root)`
6. Tap **Save**.

After GitHub finishes publishing, the site should be at:

https://dev-axo.github.io/Larp-Wallet/

It can take a couple of minutes the first time.

## 4. Add it like an app on iPhone
Open the Pages URL in Safari → Share → **Add to Home Screen**.

## Important
This is a novelty simulator. It has no real payment, NFC, bank, credential, receipt, statement, barcode, or QR functionality.
