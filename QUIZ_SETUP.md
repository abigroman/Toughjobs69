# Toughjobs Trade Quiz — Supabase Setup Guide

## Why Supabase?
Without setup: scores save only on the player's device (good for testing).  
With Supabase: scores post to a shared database so everyone sees the same leaderboard (production-ready).

## Step-by-Step Setup (5 minutes)

### 1. Create a Free Supabase Account
- Go to https://supabase.com
- Click **"Start your project"**
- Sign up with email or GitHub
- Click **"New project"** → give it a name (e.g. "Toughjobs Quiz")
- Choose a region closest to you
- Create a strong password, confirm
- Wait ~2 minutes for it to deploy

### 2. Create the Database Tables
- In your Supabase dashboard, click **"SQL Editor"** (left sidebar)
- Click **"New query"**
- Paste this entire block:

- Paste this SQL (copy everything between the lines — do NOT include any ``` marks):

--------------------------------------------------------------------
-- Create scores table
create table scores (
  id bigint generated always as identity primary key,
  name text,
  city text,
  trade text,
  trade_name text,
  avatar text,
  score int,
  correct int,
  created_at timestamptz default now()
);

-- Create leads table
create table leads (
  id bigint generated always as identity primary key,
  payload jsonb,
  created_at timestamptz default now()
);

-- Enable Row Level Security (public read/write, no auth needed for demo)
alter table scores enable row level security;
alter table leads enable row level security;

-- Policy: anyone can read scores
create policy "public_read_scores" on scores for select using (true);

-- Policy: anyone can insert scores
create policy "public_insert_scores" on scores for insert with check (true);

-- Policy: anyone can insert leads
create policy "public_insert_leads" on leads for insert with check (true);
--------------------------------------------------------------------

- Click **"Run"** (the blue play button)
- You should see "Success" and table names appear in the left sidebar

### 3. Get Your API Keys
- Click **"Settings"** (bottom of left sidebar)
- Click **"API"**
- Under **"Project API keys"**, copy:
  - **Project URL** (looks like `https://abcd1234.supabase.co`)
  - **anon public key** (a long string starting with `eyJ...`)

### 4. Paste Keys into Your Quiz
- Open `quiz-store.js` in your project
- Find this section at the top:
```javascript
window.QUIZ_DB = {
  url: "",   // paste here
  key: ""    // paste here
};
```
- Paste your URL and key:
```javascript
window.QUIZ_DB = {
  url: "https://abcd1234.supabase.co",
  key: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9..."
};
```
- **Save the file**

### 5. Test It
- Open `quiz-hub.html` in a browser
- Pick a trade and take the quiz
- Enter your name, email, pick an avatar, finish
- Open `quiz-leaderboard.html` — your score should appear
- If you open it in a different browser or device, the same score shows (that's the live database!)

## Troubleshooting

**"No scores showing"**
- Check your keys are pasted correctly (no extra spaces)
- Reload the page
- Check browser console (F12 → Console) for errors

**"400 Bad Request"**
- Your keys are likely wrong or incomplete
- Re-copy them from Supabase Settings → API

**"CORS error"**
- Normal — Supabase is already CORS-enabled for public access
- This error shouldn't block the quiz; check the Network tab in dev tools

## Optional: Add More Players
Once live, share the quiz link with your team:
- Desktop: `quiz-hub.html`
- Mobile: same link, it's responsive

Scores auto-save and everyone sees the leaderboard in real time.

---

**Questions?** The Supabase docs are at https://supabase.com/docs — they're very friendly.
