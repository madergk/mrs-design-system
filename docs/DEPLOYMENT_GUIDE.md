# Storybook Deployment Guide

## MRS Design System - Live Documentation Deployment

This guide covers deploying the Storybook documentation to showcase your 33 React components.

---

## Quick Deploy Options

### Option 1: Vercel (Recommended) ⚡

**Why Vercel?**
- ✅ Free for open-source projects
- ✅ Automatic deployments on git push
- ✅ Preview deployments for pull requests
- ✅ Custom domains
- ✅ CDN distribution worldwide
- ✅ HTTPS by default

**Setup Steps:**

1. **Install Vercel CLI** (optional, for command-line deployment)
   ```bash
   npm install -g vercel
   ```

2. **Deploy via Web UI** (easiest method)
   - Go to [vercel.com](https://vercel.com)
   - Sign in with GitHub
   - Click "New Project"
   - Import `madergk/mrs-design-system`
   - Configure:
     - **Build Command**: `npm run build-storybook`
     - **Output Directory**: `storybook-static`
     - **Install Command**: `npm ci`
   - Click "Deploy"

3. **Or Deploy via CLI**
   ```bash
   cd /Users/mader/mrs-design-system
   vercel
   ```
   - Follow prompts
   - Link to GitHub repository
   - Deploy

**Expected Result:**
- Live URL: `https://mrs-design-system.vercel.app` (or similar)
- Auto-deploys on every push to `main`
- Preview URLs for pull requests

**Configuration File:**
- ✅ Already created: `vercel.json`

---

### Option 2: Netlify 🌐

**Why Netlify?**
- ✅ Free tier available
- ✅ Drag-and-drop deployment
- ✅ Continuous deployment
- ✅ Form handling
- ✅ Serverless functions

**Setup Steps:**

1. **Create `netlify.toml`** (already provided below)

2. **Deploy via Web UI**
   - Go to [netlify.com](https://netlify.com)
   - Sign in with GitHub
   - Click "New site from Git"
   - Choose `madergk/mrs-design-system`
   - Configure:
     - **Build Command**: `npm run build-storybook`
     - **Publish Directory**: `storybook-static`
   - Click "Deploy site"

3. **Or Deploy via CLI**
   ```bash
   npm install -g netlify-cli
   netlify deploy --prod
   ```

**Expected Result:**
- Live URL: `https://mrs-design-system.netlify.app` (or similar)

---

### Option 3: GitHub Pages 📄

**Why GitHub Pages?**
- ✅ Free
- ✅ Integrated with GitHub
- ⚠️ Manual deployment required
- ⚠️ Requires base path configuration

**Setup Steps:**

1. **Install gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Add script to package.json**
   ```json
   "deploy-storybook": "npm run build-storybook && gh-pages -d storybook-static"
   ```

3. **Deploy**
   ```bash
   npm run deploy-storybook
   ```

4. **Enable GitHub Pages**
   - Go to repository settings
   - Pages section
   - Source: `gh-pages` branch
   - Save

**Expected Result:**
- Live URL: `https://madergk.github.io/mrs-design-system`

---

### Option 4: Chromatic (Storybook Official) 🎨

**Why Chromatic?**
- ✅ Purpose-built for Storybook
- ✅ Visual regression testing
- ✅ Component versioning
- ✅ Collaboration features
- ⚠️ Paid for private projects (free tier: 5,000 snapshots/month)

**Setup Steps:**

1. **You already have Chromatic configured!**
   - Token in `package.json`: `chpt_aec6e164301ece6`

2. **Deploy**
   ```bash
   npm run chromatic
   ```

**Expected Result:**
- Live URL: Custom Chromatic domain
- Visual regression testing enabled
- Component snapshot history

---

## Recommended Deployment Strategy

### For MRS Design System:

**Primary: Vercel** (for public documentation)
- Deploy Storybook documentation
- Share live URL with team and stakeholders
- Automatic updates on push

**Secondary: Chromatic** (for visual testing)
- Run on CI/CD for visual regression
- Track component changes over time
- Collaboration and review

---

## Current Status

✅ **Build Status**: Storybook built successfully
- Output: `storybook-static/` directory
- Size: ~2.5 MB (compressed assets)
- 33 components documented
- All stories rendering correctly

✅ **Files Ready**:
- `vercel.json` - Vercel configuration
- `storybook-static/` - Built documentation
- `package.json` - Chromatic token configured

⏳ **Next Steps**:
1. Choose deployment platform (recommend Vercel)
2. Deploy Storybook
3. Share live URL
4. Set up automatic deployments

---

## Deployment Checklist

Before deploying, verify:

- [x] Storybook builds successfully (`npm run build-storybook`)
- [x] All components render correctly
- [x] No console errors in browser
- [x] Theme applies correctly
- [x] Links and navigation work
- [x] Assets load properly
- [ ] Deploy to platform
- [ ] Verify live URL
- [ ] Test on mobile devices
- [ ] Share URL with team

---

## Post-Deployment

### Continuous Deployment Setup

**For Vercel/Netlify:**
1. Connect GitHub repository
2. Enable automatic deployments
3. Set branch: `main`
4. Deployments trigger on push

**For Chromatic (in CI):**
1. Add to `.github/workflows/ci.yml`:
   ```yaml
   chromatic:
     name: Visual Regression Testing
     runs-on: ubuntu-latest
     steps:
       - uses: actions/checkout@v4
       - name: Setup Node.js
         uses: actions/setup-node@v4
         with:
           node-version: '20'
       - run: npm ci
       - run: npm run chromatic
   ```

---

## URLs Reference

Once deployed, you'll have:

| Platform | URL Pattern | Status |
|----------|-------------|--------|
| **Vercel** | `https://mrs-design-system.vercel.app` | Not deployed yet |
| **Netlify** | `https://mrs-design-system.netlify.app` | Not deployed yet |
| **GitHub Pages** | `https://madergk.github.io/mrs-design-system` | Not deployed yet |
| **Chromatic** | Custom domain | Token configured |

---

## Troubleshooting

### Build fails on deployment platform

**Solution**: Check Node.js version
- Local: Node 20
- Platform: Ensure Node 20 is set in config

### Assets not loading

**Solution**: Check base path
- Vercel/Netlify: Auto-configured
- GitHub Pages: May need `--base-path` flag

### 404 on routes

**Solution**: Add rewrite rules
- Already configured in `vercel.json`

---

## Next Steps

1. **Deploy Now**: Choose Vercel for easiest deployment
2. **Share URL**: Once deployed, share with team
3. **Update README**: Add "View Documentation" badge
4. **Set up CI**: Add deployment to GitHub Actions

---

**Ready to deploy?**

Run this command to deploy to Vercel via CLI:
```bash
cd /Users/mader/mrs-design-system
vercel
```

Or visit [vercel.com](https://vercel.com) to deploy via web UI.
