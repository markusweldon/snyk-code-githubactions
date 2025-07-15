# Snyk Code GitHub Actions Demo

This repository demonstrates how to integrate Snyk Code security scanning into your GitHub Actions workflow.

## Features

- ⏱️ **Performance Tracking**: Measures and displays scan duration
- 📊 **HTML Reports**: Generates beautiful HTML reports with timestamped filenames
- 📤 **Artifacts**: Automatically uploads reports as GitHub Actions artifacts
- 🛡️ **Security Testing**: Includes sample vulnerabilities for demonstration

## Setup Instructions

1. **Fork or clone this repository**

2. **Add Snyk Token to GitHub Secrets**:
   - Get your Snyk token from [app.snyk.io](https://app.snyk.io) → Account Settings
   - In your GitHub repo: Settings → Secrets → Actions → New repository secret
   - Name: `SNYK_TOKEN`
   - Value: Your Snyk API token

3. **Optional: Enable Pipeline Failure on High/Critical Issues**:
   - By default, the pipeline continues even if security issues are found
   - To fail the pipeline when high or critical severity issues are detected:
     - Add another secret: `SNYK_CODE_FAIL_ON_ISSUES` with value `true`
     - This uses Snyk's `--severity-threshold=high` flag

4. **IMPORTANT: Check Regional API Endpoint**
   - This workflow is configured for the **default/global** Snyk API endpoint: `https://api.snyk.io`
   - If your Snyk account is in a different region, update the `SNYK_API` environment variable in `.github/workflows/snyk-code.yml`:
     - **US**: `https://api.us.snyk.io`
     - **EU**: `https://api.eu.snyk.io`
     - **AU**: `https://api.au.snyk.io`
   - Using the wrong endpoint will result in authentication failures!

5. **Push code or create a PR** to trigger the workflow

## Workflow Details

The workflow:
- Runs on every push to `main` and on pull requests
- Times only the Snyk Code scan (not setup steps)
- Generates HTML reports with repository name and timestamp
- Uploads reports as artifacts (e.g., `snyk-code-githubactions-snyk-code-report-20240115-143022.html`)

## Sample Vulnerabilities

This demo includes intentional vulnerabilities in `index.js`:
- SQL Injection
- Cross-Site Scripting (XSS)
- Path Traversal

These are for demonstration purposes only.

## Viewing Results

After the workflow runs:
1. Go to the Actions tab in your repository
2. Click on the workflow run
3. Download the artifact from the bottom of the page
4. Open the HTML file to view the detailed security report