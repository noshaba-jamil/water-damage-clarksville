# 🚀 Deploy to Vercel — Step by Step

## Prerequisites
- GitHub account
- Vercel account (free at vercel.com)
- Node.js 18+ installed locally

---

## Step 1 — Push to GitHub

```bash
cd water-damage-clarksville
git init
git add .
git commit -m "Initial commit — waterdamageclarksville.com"
```

Create a new repo on GitHub (github.com/new), then:

```bash
git remote add origin https://github.com/YOUR_USERNAME/water-damage-clarksville.git
git branch -M main
git push -u origin main
```

---

## Step 2 — Import to Vercel

1. Go to **vercel.com/new**
2. Click **Import Git Repository**
3. Select your `water-damage-clarksville` repo
4. Framework: **Next.js** (auto-detected)
5. **DO NOT deploy yet** — add env vars first

---

## Step 3 — Set Environment Variables in Vercel

In Vercel → Project → Settings → Environment Variables, add:

| Variable | Value |
|---|---|
| `ADMIN_PASSWORD` | YourStrongPassword123! |
| `AUTH_SALT` | YourRandomSecretString32CharsLong!! |
| `NEXT_PUBLIC_SITE_URL` | https://waterdamageclarksville.com |

Click **Deploy** after adding all vars.

---

## Step 4 — Add Your Domain

1. Vercel → Project → Settings → Domains
2. Add: `waterdamageclarksville.com`
3. Add: `www.waterdamageclarksville.com`
4. Follow DNS instructions (add CNAME records at your domain registrar)

---

## Step 5 — After Deployment

- [ ] Visit https://waterdamageclarksville.com — confirm site loads
- [ ] Visit https://waterdamageclarksville.com/admin — confirm login works
- [ ] Visit https://waterdamageclarksville.com/sitemap.xml — confirm sitemap
- [ ] Submit sitemap to Google Search Console
- [ ] Set up Google Business Profile

---

## Admin Login

URL: `https://waterdamageclarksville.com/admin`  
Password: whatever you set as `ADMIN_PASSWORD`

---

## Important Notes

**Blog posts** — On Vercel, blog posts stored in `/tmp` are ephemeral (reset on cold start).
For permanent blog storage, connect a database:
- **Free option**: Vercel KV (Redis) — add `@vercel/kv` package
- **Easy option**: Supabase (Postgres) — free tier
- **Quick option**: Write posts locally → commit JSON files to git → deploy

**Phone number** — Replace `(931) 271-2350` with your real Ringba tracking number before going live.

