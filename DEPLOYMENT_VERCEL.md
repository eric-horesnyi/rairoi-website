# Vercel Deployment Guide for RAIROI Website

This guide will walk you through deploying the RAIROI Next.js website to Vercel with your custom domain `rairoi.com`.

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Step 1: Prepare Your Repository](#step-1-prepare-your-repository)
3. [Step 2: Create GitHub Repository](#step-2-create-github-repository)
4. [Step 3: Push Code to GitHub](#step-3-push-code-to-github)
5. [Step 4: Sign Up for Vercel](#step-4-sign-up-for-vercel)
6. [Step 5: Deploy to Vercel](#step-5-deploy-to-vercel)
7. [Step 6: Configure Custom Domain](#step-6-configure-custom-domain)
8. [Step 7: DNS Configuration](#step-7-dns-configuration)
9. [Step 8: Verify Deployment](#step-8-verify-deployment)
10. [Troubleshooting](#troubleshooting)
11. [Continuous Deployment](#continuous-deployment)

---

## Prerequisites

- ✅ GitHub account
- ✅ Vercel account (free tier is sufficient)
- ✅ Domain `rairoi.com` registered (you mentioned you already have this)
- ✅ Access to your domain's DNS settings (via OVHCloud or your domain registrar)

---

## Step 1: Prepare Your Repository

### 1.1 Create `.gitignore` file (if it doesn't exist)

Create a `.gitignore` file in the `website/` directory:

```bash
cd website
cat > .gitignore << 'EOF'
# Dependencies
node_modules/
/.pnp
.pnp.js

# Testing
/coverage

# Next.js
/.next/
/out/

# Production
/build

# Misc
.DS_Store
*.pem

# Debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Local env files
.env*.local
.env

# Vercel
.vercel

# TypeScript
*.tsbuildinfo
next-env.d.ts

# IDE
.vscode/
.idea/
*.swp
*.swo
*~

# Archive and temporary files
archive/
stitch_rairoi_website*/
bio-input/
*.pdf
*.xlsx
*.csv
EOF
```

### 1.2 Verify Build Works Locally

Test that your site builds correctly:

```bash
cd website
npm install
npm run build
```

If the build succeeds, you're ready to deploy!

---

## Step 2: Create GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the **"+"** icon in the top right → **"New repository"**
3. Repository settings:
   - **Name**: `rairoi-website` (or your preferred name)
   - **Description**: "RAIROI - Responsible AI Return on Investment Website"
   - **Visibility**: Choose **Public** (for free Vercel) or **Private** (requires Vercel Pro)
   - **Initialize**: Don't add README, .gitignore, or license (we already have these)
4. Click **"Create repository"**

---

## Step 3: Push Code to GitHub

### 3.1 Initialize Git (if not already done)

```bash
cd website

# Initialize git repository
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: RAIROI website"
```

### 3.2 Connect to GitHub and Push

```bash
# Add GitHub remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/rairoi-website.git

# Rename branch to main (if needed)
git branch -M main

# Push to GitHub
git push -u origin main
```

**Note**: If you haven't set up Git credentials, GitHub will prompt you for authentication. You may need to use a Personal Access Token instead of a password.

---

## Step 4: Sign Up for Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click **"Sign Up"**
3. Choose **"Continue with GitHub"** (recommended for easy integration)
4. Authorize Vercel to access your GitHub account
5. Complete the signup process

---

## Step 5: Deploy to Vercel

### 5.1 Import Your Project

1. In Vercel dashboard, click **"Add New..."** → **"Project"**
2. You'll see a list of your GitHub repositories
3. Find and click **"Import"** next to `rairoi-website`
4. Vercel will auto-detect it's a Next.js project

### 5.2 Configure Project Settings

Vercel should auto-detect these settings:
- **Framework Preset**: Next.js
- **Root Directory**: `./` (or `website` if your repo root is the parent directory)
- **Build Command**: `npm run build` (or `cd website && npm run build`)
- **Output Directory**: `.next` (auto-detected)
- **Install Command**: `npm install` (or `cd website && npm install`)

**If your repository root is NOT the website folder**, you need to:
- Set **Root Directory** to `website`
- Or move all website files to the repository root

### 5.3 Environment Variables

If your site uses environment variables (check for `.env` files), add them in Vercel:
- Go to **Settings** → **Environment Variables**
- Add each variable (e.g., `NEXT_PUBLIC_API_URL`, etc.)

**For this project**: You likely don't need environment variables unless you add API integrations later.

### 5.4 Deploy

1. Click **"Deploy"**
2. Wait 2-3 minutes for the build to complete
3. Once deployed, you'll get a URL like: `rairoi-website.vercel.app`

🎉 **Your site is now live!** But we need to add your custom domain.

---

## Step 6: Configure Custom Domain

### 6.1 Add Domain in Vercel

1. In your Vercel project dashboard, go to **Settings** → **Domains**
2. Enter your domain: `rairoi.com`
3. Click **"Add"**
4. Vercel will show you DNS configuration instructions

### 6.2 Vercel DNS Records

Vercel will provide you with DNS records. You'll typically see:

**Option A: Root Domain (rairoi.com)**
- **Type**: A
- **Name**: `@` or `rairoi.com`
- **Value**: `76.76.21.21` (Vercel's IP - this may change, use what Vercel shows)

**Option B: CNAME (Recommended for subdomains)**
- **Type**: CNAME
- **Name**: `@` or `www`
- **Value**: `cname.vercel-dns.com.`

**Note**: For root domains, some registrars require A records, while others support CNAME flattening. Vercel will guide you.

---

## Step 7: DNS Configuration

### 7.1 Access OVHCloud DNS Settings

1. Log in to your OVHCloud account
2. Go to **Web Cloud** → **Domain names**
3. Click on `rairoi.com`
4. Go to **DNS Zone** tab

### 7.2 Add DNS Records

Add the DNS records that Vercel provided:

**For Root Domain (rairoi.com):**

1. **A Record** (if Vercel requires it):
   - **Subdomain**: `@` or leave blank
   - **TTL**: 3600 (or default)
   - **Target**: `76.76.21.21` (use the IP Vercel provides)

2. **CNAME Record** (for www subdomain):
   - **Subdomain**: `www`
   - **TTL**: 3600
   - **Target**: `cname.vercel-dns.com.` (note the trailing dot)

**Alternative: Use Vercel's Nameservers (Easier)**

If OVHCloud allows nameserver changes:
1. In Vercel, go to **Settings** → **Domains** → `rairoi.com`
2. Copy the nameservers Vercel provides (e.g., `ns1.vercel-dns.com`, `ns2.vercel-dns.com`)
3. In OVHCloud, go to **DNS Servers** and update to Vercel's nameservers
4. This delegates all DNS management to Vercel (easier, but less control)

### 7.3 Wait for DNS Propagation

- DNS changes can take **5 minutes to 48 hours** to propagate
- Usually takes **15-30 minutes**
- Check propagation status: [whatsmydns.net](https://www.whatsmydns.net)

---

## Step 8: Verify Deployment

### 8.1 Check Vercel Status

1. In Vercel dashboard, go to **Deployments**
2. Your latest deployment should show **"Ready"** status
3. Click on the deployment to see the live URL

### 8.2 Test Your Domain

1. Wait for DNS propagation (check with `dig rairoi.com` or [whatsmydns.net](https://www.whatsmydns.net))
2. Visit `https://rairoi.com` in your browser
3. You should see your RAIROI website!

### 8.3 SSL Certificate

- Vercel automatically provisions **free SSL certificates** (HTTPS)
- This happens automatically once DNS is configured
- No additional setup needed!

---

## Troubleshooting

### Build Fails

**Error**: "Module not found" or build errors

**Solution**:
1. Check that all dependencies are in `package.json`
2. Ensure `node_modules` is in `.gitignore` (don't commit it)
3. Try building locally: `npm run build`
4. Check Vercel build logs for specific errors

### Domain Not Working

**Error**: Domain shows "Not configured" or doesn't resolve

**Solutions**:
1. **Verify DNS records**: Double-check the DNS records in OVHCloud match Vercel's requirements
2. **Check propagation**: Use [whatsmydns.net](https://www.whatsmydns.net) to see if DNS has propagated globally
3. **Wait longer**: DNS can take up to 48 hours (usually much faster)
4. **Check Vercel domain status**: In Vercel dashboard, check if domain shows as "Valid Configuration"

### 404 Errors on Routes

**Error**: Homepage works but other routes return 404

**Solution**: This is normal for Next.js on Vercel. Vercel handles Next.js routing automatically. If you see this, it might be a caching issue - try:
1. Clear browser cache
2. Check Vercel deployment logs
3. Ensure you're using Next.js App Router (which you are)

### Images Not Loading

**Error**: Images return 404

**Solution**:
1. Ensure images are in the `public/` directory
2. Use Next.js Image component or reference as `/image.png` (not `/public/image.png`)
3. Check that `next.config.js` has `images: { unoptimized: true }` (you already have this)

### Environment Variables Not Working

**Error**: Environment variables are undefined

**Solution**:
1. In Vercel, go to **Settings** → **Environment Variables**
2. Add variables with correct names
3. **Important**: For client-side variables, prefix with `NEXT_PUBLIC_`
4. Redeploy after adding variables

---

## Continuous Deployment

### Automatic Deployments

Once set up, Vercel will automatically:
- ✅ Deploy when you push to `main` branch
- ✅ Create preview deployments for pull requests
- ✅ Run builds automatically

### Manual Deployment

If you need to trigger a manual deployment:
1. Go to **Deployments** tab in Vercel
2. Click **"Redeploy"** on the latest deployment
3. Or push a new commit to GitHub

### Branch Deployments

- **Production**: Deploys from `main` branch → `rairoi.com`
- **Preview**: Each PR gets a unique URL like `rairoi-website-git-feature-branch.vercel.app`

---

## Next Steps

### Performance Optimization

1. **Enable Image Optimization**: Consider using Vercel's image optimization (remove `unoptimized: true` in `next.config.js` if you want)
2. **Analytics**: Add Vercel Analytics (free) in project settings
3. **Speed Insights**: Enable Web Vitals monitoring

### Custom Configuration

Create `vercel.json` in your website root if you need custom settings:

```json
{
  "buildCommand": "npm run build",
  "devCommand": "npm run dev",
  "installCommand": "npm install",
  "framework": "nextjs",
  "regions": ["iad1"]
}
```

### Monitoring

- **Vercel Dashboard**: Monitor deployments, performance, and errors
- **Logs**: View real-time logs in Vercel dashboard
- **Analytics**: Enable in project settings for traffic insights

---

## Summary Checklist

- [ ] Code pushed to GitHub
- [ ] Vercel account created
- [ ] Project imported to Vercel
- [ ] Initial deployment successful
- [ ] Custom domain added in Vercel
- [ ] DNS records configured in OVHCloud
- [ ] DNS propagated (checked via whatsmydns.net)
- [ ] Site accessible at `https://rairoi.com`
- [ ] SSL certificate active (automatic)
- [ ] Continuous deployment working

---

## Support Resources

- **Vercel Documentation**: [vercel.com/docs](https://vercel.com/docs)
- **Next.js Deployment**: [nextjs.org/docs/deployment](https://nextjs.org/docs/deployment)
- **Vercel Support**: [vercel.com/support](https://vercel.com/support)
- **DNS Troubleshooting**: [whatsmydns.net](https://www.whatsmydns.net)

---

**Congratulations!** Your RAIROI website should now be live at `https://rairoi.com` 🎉

