# Vercel GitHub Integration Guide

**Date**: December 11, 2025
**Goal**: Enable automatic preview deployments for pull requests

---

## 🎯 What You'll Get

Once GitHub is connected to Vercel, you'll automatically get:

✅ **Preview deployments** for every pull request
✅ **Automatic builds** when you push commits
✅ **Comment on PRs** with preview URL
✅ **Status checks** on GitHub PRs
✅ **Production deployments** on merge to main
✅ **Rollback capability** from Vercel dashboard

---

## 📋 Step-by-Step Setup

### Step 1: Access Vercel Dashboard

1. **Open your browser** and go to: https://vercel.com
2. **Sign in** with your account (you should already be logged in)
3. You'll see your **mrs-design-system** project in the dashboard

### Step 2: Open Project Settings

1. Click on your **"mrs-design-system"** project
2. Click the **"Settings"** tab at the top
3. Look for **"Git"** in the left sidebar

### Step 3: Connect to GitHub Repository

#### Option A: If Not Yet Connected

1. In the **Git** section, click **"Connect Git Repository"**
2. Choose **GitHub** as your Git provider
3. You'll be prompted to **authorize Vercel** to access your GitHub account
4. Click **"Authorize Vercel"**
5. Select the repository: **madergk/mrs-design-system**
6. Click **"Connect"**

#### Option B: If Already Partially Connected

1. In the **Git** section, you'll see **"Connected to GitHub"**
2. Verify the repository is: **madergk/mrs-design-system**
3. If not, click **"Disconnect"** and follow Option A

### Step 4: Configure GitHub App Permissions

When you authorize Vercel, it will ask for these permissions:

✅ **Read access** to metadata and code
✅ **Write access** to deployment status
✅ **Write access** to pull request comments

**Click "Install" or "Authorize"** to grant these permissions.

### Step 5: Enable Preview Deployments

1. In **Settings → Git**, scroll to **"Preview Deployments"**
2. Make sure it's set to: **"Automatic (Recommended)"**
3. This means: Every PR gets a preview URL automatically

### Step 6: Configure Production Branch

1. In **Settings → Git**, find **"Production Branch"**
2. Set it to: **main**
3. This means: Pushes to `main` deploy to production URLs

### Step 7: Enable GitHub Integration Features

In **Settings → Git**, enable these features:

- ✅ **"Add Vercel Bot to Pull Requests"** - Vercel will comment with preview URLs
- ✅ **"Enable Preview Deployments"** - Automatic preview for every PR
- ✅ **"Enable Deployment Protection"** - Prevent accidental production deploys
- ✅ **"Require Approval for Deployments"** (optional) - Manual approval for production

---

## 🔄 How It Works After Setup

### When You Create a Pull Request

1. **Create a PR** on GitHub (e.g., `feature/new-component` → `main`)
2. **Vercel detects** the PR automatically
3. **Vercel builds** Storybook for this branch
4. **Vercel deploys** to a unique preview URL
5. **Vercel comments** on the PR with the preview URL
6. **GitHub shows** Vercel status check

**Preview URL format**: `https://mrs-design-system-git-[branch-name]-[project].vercel.app`

**Example**:
```
Pull Request #12: Add dark mode toggle
↓
Preview URL: https://mrs-design-system-git-feature-dark-mode-maders-projects.vercel.app
↓
Vercel bot comments: "✅ Preview deployment ready!"
```

### When You Push Commits to a PR

1. **Push new commits** to the PR branch
2. **Vercel rebuilds** automatically
3. **Preview URL updates** with latest changes
4. **Status check updates** on GitHub

### When You Merge to Main

1. **Merge the PR** to main branch
2. **Vercel deploys** to production URLs:
   - https://mrs-design-system.vercel.app
   - https://mrs-design-system-maders-projects-1bafd66f.vercel.app
3. **Preview deployment** is automatically deleted

---

## 🌐 Using the Vercel CLI (Already Done)

You've already connected via CLI! The deployment you just did created the project. Now you just need to connect it to GitHub in the dashboard for PR previews.

### Check Current Connection Status

```bash
# See project details
npx vercel project ls

# See current project info
cd /Users/mader/mrs-design-system
cat .vercel/project.json
```

---

## ✅ Verification Steps

After connecting GitHub, verify it's working:

### Test 1: Check Connection

1. Go to https://vercel.com/maders-projects-1bafd66f/mrs-design-system
2. You should see **"Connected to GitHub"** badge
3. Repository should show: **madergk/mrs-design-system**

### Test 2: Create a Test PR

```bash
# Create a test branch
cd /Users/mader/mrs-design-system
git checkout -b test/vercel-preview

# Make a small change
echo "# Test" >> TEST.md
git add TEST.md
git commit -m "test: Verify Vercel preview deployments"

# Push to GitHub
git push origin test/vercel-preview

# Create PR on GitHub
gh pr create --title "Test: Vercel Preview" --body "Testing automatic preview deployments"
```

### Test 3: Wait for Vercel Bot

1. Go to your PR on GitHub
2. Wait 30-60 seconds
3. **Vercel bot** should comment with preview URL
4. **Status checks** should show "Vercel - Preview"
5. Click the preview URL to verify Storybook loads

### Test 4: Clean Up

```bash
# Close the test PR (or merge it if you want)
gh pr close --delete-branch

# Return to main
git checkout main
```

---

## 🎨 GitHub Status Checks

Once connected, you'll see these status checks on PRs:

| Check | Description |
|-------|-------------|
| **Vercel - Preview** | Preview deployment status |
| **Vercel - Production** | Production deployment readiness |

**Status values**:
- ⏳ **Pending** - Building...
- ✅ **Success** - Deployed successfully
- ❌ **Failed** - Build failed (click for logs)

---

## 💬 Vercel Bot Comments

The Vercel bot will add comments like this on your PRs:

```
✅ Preview deployment ready!

Built with commit abc1234

🔍 Inspect: https://vercel.com/maders-projects/mrs-design-system/abc1234
🌍 Preview: https://mrs-design-system-git-feature-xyz.vercel.app

Latest commit: abc1234
```

---

## 🛠 Advanced Configuration (Optional)

### Ignore Specific Paths

Edit `vercel.json` to ignore certain paths:

```json
{
  "buildCommand": "npm run build-storybook",
  "outputDirectory": "storybook-static",
  "installCommand": "npm ci",
  "github": {
    "enabled": true,
    "autoAlias": true,
    "silent": false
  },
  "git": {
    "deploymentEnabled": {
      "main": true,
      "develop": true
    }
  }
}
```

### Custom Deployment Messages

In your commit messages, you can control deployments:

```bash
# Skip deployment
git commit -m "docs: Update README [skip ci]"

# Force deployment
git commit -m "feat: Add component [vercel deploy]"
```

---

## 🔐 Security & Permissions

### What Vercel Can Access

✅ **Read**: Repository code, PR info, commit history
✅ **Write**: Deployment status, PR comments
❌ **Cannot**: Modify code, merge PRs, access secrets

### Environment Variables

Production environment variables are **NOT** exposed to preview deployments by default.

To allow preview deployments to use env vars:
1. **Settings → Environment Variables**
2. Select variables
3. Check **"Preview"** in addition to "Production"

---

## 📊 Benefits of GitHub Integration

| Feature | Without GitHub | With GitHub |
|---------|---------------|-------------|
| **Preview Deployments** | Manual via CLI | ✅ Automatic |
| **PR Comments** | None | ✅ Vercel bot adds URLs |
| **Status Checks** | None | ✅ Build status on PR |
| **Production Deploys** | Manual push | ✅ Auto on merge |
| **Rollback** | Via CLI only | ✅ Dashboard + CLI |
| **Team Collaboration** | Limited | ✅ Easy sharing |

---

## 🎯 Quick Access Links

### Vercel Dashboard URLs

| Resource | URL |
|----------|-----|
| **Project Dashboard** | https://vercel.com/maders-projects-1bafd66f/mrs-design-system |
| **Deployments** | https://vercel.com/maders-projects-1bafd66f/mrs-design-system/deployments |
| **Settings** | https://vercel.com/maders-projects-1bafd66f/mrs-design-system/settings |
| **Git Settings** | https://vercel.com/maders-projects-1bafd66f/mrs-design-system/settings/git |
| **Analytics** | https://vercel.com/maders-projects-1bafd66f/mrs-design-system/analytics |

### GitHub Repository

| Resource | URL |
|----------|-----|
| **Repository** | https://github.com/madergk/mrs-design-system |
| **Pull Requests** | https://github.com/madergk/mrs-design-system/pulls |
| **Settings** | https://github.com/madergk/mrs-design-system/settings |
| **Webhooks** | https://github.com/madergk/mrs-design-system/settings/hooks |

---

## ❓ Troubleshooting

### Issue: "Failed to connect repository"

**Solution**:
1. Make sure you're logged into GitHub
2. Verify you have **admin access** to the repository
3. Try disconnecting and reconnecting
4. Check GitHub → Settings → Applications → Vercel is authorized

### Issue: No preview deployments

**Solution**:
1. Check Settings → Git → "Preview Deployments" is enabled
2. Verify branch name doesn't match ignore patterns
3. Look for `[skip ci]` in commit messages
4. Check Vercel dashboard for error logs

### Issue: Vercel bot not commenting

**Solution**:
1. Settings → Git → Enable "Add Vercel Bot to Pull Requests"
2. Verify GitHub App has PR comment permissions
3. Check that PR is from your repository (not a fork)

### Issue: Build failing on Vercel but works locally

**Solution**:
1. Check Node.js version matches (`vercel.json`)
2. Verify all dependencies in `package.json` (not global)
3. Check Vercel build logs for specific errors
4. Ensure environment variables are set (if needed)

---

## 🎉 You're All Set!

Once you complete these steps:

✅ Every PR gets automatic preview deployments
✅ Vercel bot comments with preview URLs
✅ Status checks show build status
✅ Production deploys automatically on merge
✅ Easy rollback from dashboard
✅ Team collaboration simplified

---

## 📝 Summary Checklist

- [ ] Open Vercel dashboard: https://vercel.com
- [ ] Navigate to mrs-design-system project settings
- [ ] Go to Settings → Git
- [ ] Click "Connect Git Repository"
- [ ] Authorize Vercel on GitHub
- [ ] Select madergk/mrs-design-system
- [ ] Enable "Preview Deployments"
- [ ] Set production branch to "main"
- [ ] Enable "Add Vercel Bot to Pull Requests"
- [ ] Test with a sample PR
- [ ] Verify Vercel bot comments appear
- [ ] Verify preview URL works

---

**Next Action**: Visit https://vercel.com/maders-projects-1bafd66f/mrs-design-system/settings/git to connect!

---

**Created**: December 11, 2025
**Last Updated**: December 11, 2025
