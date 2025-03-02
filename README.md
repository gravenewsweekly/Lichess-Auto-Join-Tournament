# Lichess Auto-Join Extension

Automatically joins upcoming Lichess tournaments and notifies you before they start.


---

# Features

✅ Automatically detects and joins upcoming Lichess tournaments.
✅ Sends a notification before joining.
✅ Manual "Join Next Tournament" button in the popup.
✅ Runs every 5 minutes to check for new tournaments.


---

# 📂 Folder Structure

lichess-auto-join/
│── manifest.json
│── background.js
│── content.js
│── popup.html
│── popup.js
│── styles.css
│── icons/


---

# 🔧 Installation

1️⃣ Get Lichess API Token

1. Go to Lichess API → Create Token


2. Enable "Tournament Join" permission


3. Copy the token




---

# 2️⃣ Add Token to the Extension

Replace "YOUR_LICHESS_TOKEN" in background.js and popup.js

📌 In background.js:

const success = await joinTournament(firstTournament.id, "YOUR_LICHESS_TOKEN");

<button onclick="copyToClipboard('const success = await joinTournament(firstTournament.id, "YOUR_LICHESS_TOKEN");')">📋 Copy Code</button>

# 📌 In popup.js:

const success = await joinTournament(firstTournament.id, "YOUR_LICHESS_TOKEN");

<button onclick="copyToClipboard('const success = await joinTournament(firstTournament.id, "YOUR_LICHESS_TOKEN");')">📋 Copy Code</button>


---

# 🖥️ Load Extension in Chrome

1. Open chrome://extensions/


2. Enable Developer Mode (top right)


3. Click Load Unpacked → Select your lichess-auto-join folder


4. Done! ✅




---

# 🏆 Usage

🔹 Automatic Join: Runs every 5 minutes and joins tournaments.
🔹 Manual Join: Click the extension icon → Press "Join Next Tournament".


---

# 🛠 Debugging Issues?

📌 Open Service Worker Console:

1. Go to chrome://extensions/


2. Find your extension → Click "Service Worker" → "Inspect"


3. Look for errors in the console



# 📌 Test API Manually:

fetch("https://lichess.org/api/tournament", { 
    headers: { "Authorization": "Bearer YOUR_LICHESS_TOKEN" } 
})
.then(res => res.json())
.then(data => console.log(data))
.catch(err => console.error(err));

<button onclick="copyToClipboard('fetch("https://lichess.org/api/tournament", { headers: { "Authorization": "Bearer YOUR_LICHESS_TOKEN" } }).then(res => res.json()).then(data => console.log(data)).catch(err => console.error(err));')">📋 Copy Code</button>


---

# 🎯 Next Features (Optional)

✅ Add filters (Blitz, Bullet, Rapid).
✅ Auto-withdraw if inactive.
✅ Show tournament leaderboard in popup.


---

# 💡 Contributing

Feel free to contribute by submitting a pull request or reporting issues!


---

# 🔗 Useful Links

🔹 Lichess API Docs: https://lichess.org/api

🔹 Chrome Extensions Guide: https://developer.chrome.com/docs/extensions/
