# Toughjobs Trade Quiz — Firebase Setup Guide

## Why Firebase?
Without setup: scores save only on the player's device (good for testing).
With Firebase: scores post to a shared database so everyone sees the same leaderboard (production-ready).

This same database also backs the **Leads** screen in the CRM (`CRM Ops Studio.html`), which reads quiz leads via `quiz-store.js` and Business Assessment / email-gate leads via `leads-store.js`.

## Step-by-Step Setup (5 minutes)

### 1. Create a Free Firebase Project
- Go to https://console.firebase.google.com
- Click **"Create a project"** (or **"Add project"**)
- Sign in with a Google account
- Give it a name (e.g. "Toughjobs Quiz") → continue through the prompts
- Google Analytics is optional — skip it if you don't need it
- Wait ~30 seconds for it to provision

### 2. Create the Realtime Database
- In the left sidebar, under **Build**, click **"Realtime Database"**
- Click **"Create Database"**
- Pick a location, then choose **"Start in locked mode"**
- Click **"Rules"** (tab at the top) and replace the contents with:

--------------------------------------------------------------------
```json
{
  "rules": {
    "scores": { ".read": true, ".write": true },
    "leads":  { ".write": true },
    "assessment_leads": { ".write": true }
  }
}
```
--------------------------------------------------------------------

- Click **"Publish"**

This opens public read+write for `scores` (needed so every visitor's browser can post a score and load the leaderboard), and write-only for `leads` / `assessment_leads` (so visitors can submit but can't browse other people's leads through the app).

**Want the CRM's Leads screen to pull leads live instead of reading them in the Firebase console?** Add `"leads": {".read": true}` and `"assessment_leads": {".read": true}` too. That makes those rows (names, emails, quiz/assessment answers) readable by anyone who has your database URL, since there's no login system on this static site — it's a reasonable tradeoff for an internal ops tool, just worth doing knowingly.

### 3. Get Your Database URL
- Click **"Project settings"** (gear icon, top left, next to "Project Overview")
- Under **"General"**, scroll to **"Your apps"**
- If no web app exists yet, click the **`</>`** icon to register one (nickname doesn't matter, skip Firebase Hosting)
- Copy the **Realtime Database URL** — it looks like `https://toughjobs-quiz-default-rtdb.firebaseio.com`

### 4. Paste the URL Into Your Files
- Open `quiz-store.js`, find this section near the top:
```javascript
window.QUIZ_DB = {
  url: ""   // paste here
};
```
- Paste your URL:
```javascript
window.QUIZ_DB = {
  url: "https://toughjobs-quiz-default-rtdb.firebaseio.com"
};
```
- Open `leads-store.js` and do the same for `window.LEADS_DB` — reuse the **same URL** (one Firebase project backs both scores and leads):
```javascript
window.LEADS_DB = {
  url: "https://toughjobs-quiz-default-rtdb.firebaseio.com"
};
```
- **Save both files**

### 5. Test It
- Open `quiz-hub.html` in a browser
- Pick a trade and take the quiz
- Enter your name, email, pick an avatar, finish
- Open `quiz-leaderboard.html` — your score should appear
- If you open it in a different browser or device, the same score shows (that's the live database!)
- Submit the Business Assessment (`intake.html`) or the free-tools email gate, then open `CRM Ops Studio.html` → **Leads** — the submission should appear there too (only if you added the `.read` rules in step 2)

## Troubleshooting

**"No scores showing"**
- Check the URL is pasted correctly (no extra spaces, no trailing slash)
- Reload the page
- Check browser console (F12 → Console) for errors

**"PERMISSION_DENIED" in the console**
- Your Realtime Database Rules don't match step 2 — open the Rules tab and re-check them
- Rule changes take effect immediately after clicking Publish, no redeploy needed

**"Failed to fetch" / CORS error**
- Firebase's REST API is CORS-enabled by default for all origins — this usually means the URL itself is wrong (e.g. missing `-default-rtdb`) rather than a real CORS block; double check it against Project settings → General

## Optional: Add More Players
Once live, share the quiz link with your team:
- Desktop: `quiz-hub.html`
- Mobile: same link, it's responsive

Scores auto-save and everyone sees the leaderboard in real time.

---

**Questions?** The Firebase Realtime Database docs are at https://firebase.google.com/docs/database — the REST API section covers exactly what these files use.
