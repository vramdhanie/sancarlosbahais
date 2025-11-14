# GitHub Actions Workflows

This repository includes automated deployment workflows for Firebase Hosting.

## ✅ Configuration Complete

The workflows are pre-configured to use the existing `FIREBASE_SERVICE_ACCOUNT_SANCARLOSBAHAIS` secret in your repository.

## Workflows

### 1. Preview Deploy (`.github/workflows/preview-deploy.yml`)
- **Trigger**: Runs on push to any branch except `main`, or manually via workflow_dispatch
- **Purpose**: Creates preview deployments on Firebase Hosting
- **Features**:
  - Deploys to a preview channel with the branch name
  - Automatically creates pull request comments with preview links
  - Only runs on non-main branches

### 2. Production Deploy (`.github/workflows/production-deploy.yml`)
- **Trigger**: Runs on push to `main` branch, or manually via workflow_dispatch
- **Purpose**: Deploys to production Firebase Hosting
- **Features**:
  - Builds the Next.js static site
  - Deploys to the production Firebase Hosting site

## Setup Instructions

### 1. Create Firebase Service Account

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project
3. Go to **Project Settings** → **Service Accounts**
4. Click **Generate New Private Key**
5. Save the JSON file

### 2. Configure GitHub Secrets

Go to your repository **Settings** → **Secrets and variables** → **Actions** and add these secrets:

- **`FIREBASE_SERVICE_ACCOUNT`**: Paste the entire contents of the service account JSON file from step 1
- **`FIREBASE_PROJECT_ID`**: Your Firebase project ID (found in Firebase Console)

### 3. Enable Firebase Hosting

1. In Firebase Console, go to **Hosting** and click **Get Started**
2. Follow the setup wizard
3. The GitHub Actions will handle all deployments automatically

## How It Works

### Preview Deployments
- When you push to a branch other than `main`, a preview deployment is created
- The preview URL will be posted as a comment on any open pull request
- Each branch gets its own preview URL

### Production Deployments
- When code is pushed to or merged into `main`, a production deployment is triggered
- The site deploys to your production Firebase Hosting domain

## Manual Triggers

Both workflows can be triggered manually:
1. Go to the **Actions** tab in your repository
2. Select the workflow you want to run
3. Click **Run workflow** and choose the branch

## Troubleshooting

- **Build fails**: Check the Actions logs for specific error messages
- **Deploy fails**: Verify that your Firebase secrets are configured correctly
- **Preview not showing**: Ensure the pull request is open when pushing changes

