# Quick Deployment Guide

## 🚀 Fastest Way to Deploy (GitHub Pages)

### 1. Create Repository
- Go to GitHub.com and create new repository
- Name: `yourusername.github.io`
- Make it public

### 2. Upload Files
- Click "uploading an existing file"
- Drag & drop: `index.html`, `styles.css`, `script.js`
- Commit changes

### 3. Enable Pages
- Go to Settings → Pages
- Source: "Deploy from a branch"
- Branch: "main", Folder: "/ (root)"
- Save

### 4. Your Site is Live!
- URL: `https://yourusername.github.io`
- Wait 2-5 minutes for activation

## 🌐 Alternative: Netlify (Drag & Drop)

1. Go to [netlify.com](https://netlify.com)
2. Drag your project folder to the deploy area
3. Your site is instantly live with a random URL
4. Customize the URL in site settings

## 📱 Test Your Site


## ▲ Vercel Deployment

1. Install the Vercel CLI if you do not have it already:
	- `npm i -g vercel`
2. Sign in:
	- `vercel login`
3. Deploy from this folder:
	- `vercel`
4. Add these environment variables in the Vercel project settings:
	- `SMTP_HOST`
	- `SMTP_PORT`
	- `SMTP_USER`
	- `SMTP_PASS`
	- `CONTACT_TO_EMAIL`
	- `CONTACT_FROM_EMAIL`
5. Publish production:
	- `vercel --prod`

## ✏️ Customize Before Deploying

- Update name, bio, and contact info in `index.html`
- Replace sample projects with your real work
- Update skills and achievements
- Add your actual profile photo
- Link to your real social media accounts

## 🔗 Custom Domain (Optional)

- Buy domain from Namecheap, GoDaddy, etc.
- In hosting settings, add your domain
- Update DNS records as instructed
- Wait 24-48 hours for propagation

---

**Need Help?** Check the full README.md for detailed instructions!
