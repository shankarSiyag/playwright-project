# 🎭 Playwright E2E Test Suite

A robust end-to-end testing framework built with [Playwright](https://playwright.dev/) and **TypeScript**, integrated with **GitHub Actions** for fully automated CI/CD testing across multiple browsers.

---

## 📋 Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Running Tests](#running-tests)
- [GitHub Actions CI/CD](#github-actions-cicd)
- [Test Reports](#test-reports)
- [Configuration](#configuration)
- [Environment Variables](#environment-variables)
- [Contributing](#contributing)

---

## Overview

This project provides a comprehensive E2E test suite that:

- Runs tests across **Chromium**, **Firefox**, and **WebKit**
- Triggers automatically on **push**, **pull requests**, **manual dispatch**, and **scheduled runs**
- Generates detailed **HTML reports** with screenshots, traces, and videos on failure
- Sends **Slack notifications** on main branch failures

---

## Tech Stack

| Tool        | Version                          | Purpose               |
|-------------|----------------------------------|-----------------------|
| [Playwright](https://playwright.dev/) | Latest | E2E Testing Framework |
| TypeScript  | ^5.x   | Language       |
| Node.js     | 20.x   | Runtime        |
| GitHub Actions |                               |     CI/CD Pipeline    |

---

## Project Structure

```
├── .github/
│   └── workflows/
│       └── playwright.yml       # GitHub Actions workflow
├── tests/
│   ├── example.spec.ts          # Example test file
│   └── ...                      # Your test files
├── pages/                       # Page Object Models (POM)
│   └── ...
├── fixtures/                    # Custom fixtures
│   └── ...
├── playwright.config.ts         # Playwright configuration
├── tsconfig.json                # TypeScript configuration
├── package.json
└── README.md
```

---

## Getting Started

### Prerequisites

- **Node.js** v20 or higher
- **npm** v9 or higher

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/<your-username>/<your-repo>.git
   cd <your-repo>
   ```

2. **Install dependencies**

   ```bash
   npm ci
   ```

3. **Install Playwright browsers**

   ```bash
   npx playwright install --with-deps
   ```

4. **Set up environment variables**

   ```bash
   cp .env.example .env
   # Fill in your values in .env
   ```

---

## Running Tests

### Run all tests

```bash
npx playwright test
```

### Run tests on a specific browser

```bash
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
```

### Run a specific test file

```bash
npx playwright test tests/example.spec.ts
```

### Run tests in headed mode (visible browser)

```bash
npx playwright test --headed
```

### Run tests in UI mode (interactive)

```bash
npx playwright test --ui
```

### Debug a test

```bash
npx playwright test --debug
```

### View the last HTML report

```bash
npx playwright show-report
```

---

## GitHub Actions CI/CD

The workflow file is located at `.github/workflows/playwright.yml`.

### Triggers

| Event | Details |
|---|---|
| **Push** | On every push to `main` or `master` |
| **Pull Request** | On PRs targeting `main` or `master` |
| **Manual** | Via GitHub UI — select browser & environment |
| **Scheduled** | Daily at **midnight UTC** |

### Pipeline Overview

```
┌─────────────────────────────────────────────┐
│              GitHub Actions                  │
│                                             │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  │
│  │ Chromium │  │ Firefox  │  │ WebKit   │  │
│  │  Tests   │  │  Tests   │  │  Tests   │  │
│  └────┬─────┘  └────┬─────┘  └────┬─────┘  │
│       │              │              │        │
│       └──────────────┴──────────────┘        │
│                      │                       │
│            ┌─────────▼──────────┐            │
│            │   Merge Reports    │            │
│            └─────────┬──────────┘            │
│                      │                       │
│            ┌─────────▼──────────┐            │
│            │  Notify on Failure │            │
│            └────────────────────┘            │
└─────────────────────────────────────────────┘
```

### Manual Trigger Options

Navigate to **Actions → Playwright Tests → Run workflow** and select:

- **Browser:** `all` | `chromium` | `firefox` | `webkit`
- **Environment:** `staging` | `production`

---

## Test Reports

After each workflow run, reports are available under the **Actions → Artifacts** section:

| Artifact | Contents | Retention |
|---|---|---|
| `playwright-report-<browser>` | Per-browser HTML report | 30 days |
| `test-results-<browser>` | Screenshots, traces, videos (failures only) | 7 days |
| `playwright-merged-report` | Combined report for all browsers | 30 days |

---

## Configuration

Playwright is configured via `playwright.config.ts`. Key settings:

```ts
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    baseURL: process.env.BASE_URL || 'http://localhost:3000',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
    { name: 'firefox',  use: { ...devices['Desktop Firefox'] } },
    { name: 'webkit',   use: { ...devices['Desktop Safari'] } },
  ],
});
```

---

## Environment Variables

Configure these in your `.env` file locally, and in **GitHub → Settings → Secrets and variables → Actions** for CI:

| Variable | Type | Description | Required |
|---|---|---|---|
| `BASE_URL` | Variable | Target app URL | ✅ |
| `TEST_USERNAME` | Secret | Login username for tests | Optional |
| `TEST_PASSWORD` | Secret | Login password for tests | Optional |
| `SLACK_WEBHOOK_URL` | Variable | Slack incoming webhook for alerts | Optional |

---

## Contributing

1. Create a feature branch: `git checkout -b feat/your-feature`
2. Write your tests in the `tests/` directory
3. Run tests locally to verify: `npx playwright test`
4. Commit and push: `git push origin feat/your-feature`
5. Open a Pull Request — the CI pipeline will run automatically

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
