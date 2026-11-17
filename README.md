# Swaad Express (Project Tadka) · Digital Food Ordering Platform

[![CI Checks](https://github.com/forbesayush/swaadexpress/actions/workflows/checks.yml/badge.svg)](https://github.com/forbesayush/swaadexpress/actions)
[![Live Site](https://img.shields.io/badge/Live_Site-GitHub_Pages-2ea44f?style=flat&logo=github)](https://forbesayush.github.io/swaadexpress/)
[![Release Gate](https://img.shields.io/badge/Release_Gate-Protected_main-blue)](https://github.com/forbesayush/swaadexpress/pulls?q=is%3Apr)
[![AIP3 Phase 2](https://img.shields.io/badge/Course-AIP%C2%B3_Phase_2_Day_2-orange)](https://github.com/forbesayush/swaadexpress)

A production-grade, customer-ready digital food ordering web application built for the restaurant chain **Swaad Express (Project Tadka)** as part of **AIP³ Phase 2, Day 2: "Run it"**. 

This repository demonstrates complete agile engineering hygiene: automated CI/CD pipelines, strict branch protection release gates, peer PR code reviews, unit test suites, statutory GST compliance, dynamic order tracking, and quantitative sprint forecasting with burndown charts.

---

## 🔗 Public Access Links

- 🌐 **Live Deployed Application (GitHub Pages):** [https://forbesayush.github.io/swaadexpress/](https://forbesayush.github.io/swaadexpress/)
- 📦 **GitHub Source Repository:** [https://github.com/forbesayush/swaadexpress](https://github.com/forbesayush/swaadexpress)
- 🔀 **CR2 Merged Pull Request (GST Line):** [PR #11](https://github.com/forbesayush/swaadexpress/pull/11)
- 🔀 **CR1 Merged Pull Request (Veg/Non-Veg Tags):** [PR #10](https://github.com/forbesayush/swaadexpress/pull/10)

---

## 👥 Team & Roles

| Contributor | GitHub Username | Roll Number | Role |
| :--- | :--- | :--- | :--- |
| **Ayush Chatterjee** | [`forbesayush`](https://github.com/forbesayush) | `2506247040` | Lead Developer & Product Manager |
| **Aditi Pradhan** | [`aditipradhan`](https://github.com/aditipradhan) | `2506247005` | QA Engineer & Peer Approver |

---

## 🚀 Implemented Features & Change Requests

All features were developed on dedicated feature branches, passed automated unit checks in CI, underwent mandatory peer review, and were merged into `main` to trigger automated deployment:

| Card ID | Feature Description | Story Points | Branch | Pull Request | Status |
| :---: | :--- | :---: | :---: | :---: | :---: |
| **F1** | **Digital Menu:** Added *Dal Bati Churma* (`₹299`, id: 13) under Thali category | 21 pts | `f1-menu` | [#7](https://github.com/forbesayush/swaadexpress/pull/7) | Merged ✅ |
| **F2** | **Cart & Checkout:** Max 10 portions per dish (`MAX_PER_DISH = 10`) | 26 pts | `f2-cart` | [#8](https://github.com/forbesayush/swaadexpress/pull/8) | Merged ✅ |
| **F3** | **Payment Reassurance:** Added *"Payments are processed securely by PayKaro."* notice | 34 pts | `f3-payment` | [#9](https://github.com/forbesayush/swaadexpress/pull/9) | Merged ✅ |
| **CR1** | **Change Request 1:** Veg / Non-veg tagging (`veg: true/false`) and green/red dots across all 15 dishes | 5 pts | `cr1-veg` | [#10](https://github.com/forbesayush/swaadexpress/pull/10) | Merged ✅ |
| **CR2** | **Change Request 2:** Statutory 5% Restaurant GST line on the bill (`food * 0.05`) | 8 pts | `cr2-gst` | [#11](https://github.com/forbesayush/swaadexpress/pull/11) | Merged ✅ |
| **F5** | **Festive Specials:** Added Diwali Combo Feasts (Royal Veg ₹499 & Nawabi Non-Veg ₹599) | 18 pts | `f5-diwali-combos` | [#14](https://github.com/forbesayush/swaadexpress/pull/14) | Merged ✅ |
| **F4** | **Order Tracking:** Integrated live order status with RideDost Express on confirmation screen | 29 pts | `f4-order-tracking` | [#15](https://github.com/forbesayush/swaadexpress/pull/15) | Merged ✅ |

---

## 🛡️ The Release Gate & CI/CD Pipeline

Our delivery pipeline is guarded by a two-factor release gate configured under GitHub Branch Protection:
1. **Automated Factory Line:** The GitHub Actions workflow (`.github/workflows/checks.yml`) executes `node tests/run.js` on every commit and pull request.
2. **Peer Review Mandate:** Branch protection on `main` requires passing automated checks and formal approval from partner `@aditipradhan`.

### The CR2 Red-to-Green Story (Catching AI Error)
When initially implementing Card CR2 (GST calculation), the AI draft generated `const GST_RATE = 0.18;` (applying standard 18% services tax instead of statutory 5% restaurant GST).

- **RED Run ([#43235019367](https://github.com/forbesayush/swaadexpress/actions/runs/43235019367)):** The CI runner immediately failed with:
  ```text
  FAIL  CR2: GST is 5% of the food total
        Problem: On a food total of ₹827.00, GST should be 5% = ₹41.35, but the bill shows ₹148.86 (that is 18%). Restaurant GST is 5%.
  9 passed, 1 failed, 0 waiting (not built yet)
  ```
  The release gate blocked the merge, preventing customers from being overcharged.
- **GREEN Run ([#43235213024](https://github.com/forbesayush/swaadexpress/actions/runs/43235213024)):** After updating `GST_RATE` to `0.05`, the workflow passed 10/10 checks:
  ```text
  10 passed, 0 failed, 0 waiting (not built yet)
  ```
  The pull request was formally approved by `@aditipradhan` and safely merged into `main`.

---

## 📈 Quantitative Sprint Forecast & Burndown Analysis

Based on historical sprint velocity across Sprints 1 to 5 (`D2_forecast_workbook.xlsx`):

| Metric | Measured Value | Notes |
| :--- | :---: | :--- |
| **Original Backlog (F1 to F5)** | 128 pts | Initial planned scope |
| **Mid-sprint Change Requests (CR1 + CR2)** | 13 pts | Unplanned compliance scope (5 pts + 8 pts) |
| **Total Backlog** | **141 pts** | $128 + 5 + 8$ |
| **Points Completed (S1–S5)** | **77 pts** | S1: 14, S2: 17, S3: 15, S4: 13, S5: 18 |
| **Points Remaining** | **64 pts** | $141 - 77$ |
| **Average Velocity** | **15.4 pts / sprint** | $77 / 5$ sprints |
| **Sprints Needed to Finish** | **4.2 sprints** | $64 / 15.4$ |
| **Sprints Remaining in Plan (S6–S8)** | **3.0 sprints** | Scheduled launch: 22 October 2027 |
| **Forecast Schedule Gap** | **+1.2 sprints late** | **~2.4 weeks late (RED FLAG)** |

### Executive Recommendation for Managing Director Rajesh Agarwal:
- **Verdict:** The scheduled 22 October 2027 launch date **will slip into mid-November** if current conditions continue, missing the high-revenue Diwali festive window.
- **Recovery Lever 1 (Scope Reduction):** Postpone Card F4 (Live Order Tracking, 29 pts) or Card F5 (Diwali combos, 18 pts) to Phase 2.1 post-launch. This drops remaining work below 45 points, ensuring a 100% on-time release.
- **Recovery Lever 2 (Capacity Augmentation):** Onboard a senior contract developer to boost team velocity from 15.4 to 21.3 points/sprint for S6–S8.
- **Sprint 4 Velocity Dip:** Sana's 3-day leave (18 focused hours lost) accounted for an ~8% capacity reduction; however, velocity dropped by 13% (from 15 to 13 points) due to the compounding friction of mid-sprint context switching between planned tasks and incoming change requests.

---

## 📁 Repository Structure & Deliverables

```text
├── .github/
│   ├── ISSUE_TEMPLATE/       # GitHub issue templates for F1-F5, CR1, CR2
│   └── workflows/
│       └── checks.yml        # CI/CD automated test & GitHub Pages deploy workflow
├── css/
│   └── style.css             # Responsive styling for mobile and desktop screens
├── demo/                     # Live demonstration sample snippets
├── docs/                     # Submission documents, workbook, and verified screenshots
│   ├── 2506247040_P2D2_Chatterjee.pdf        # Official Phase 2 Day 2 Submission Report
│   ├── 2506247040_P2D2_Chatterjee.xlsx       # Completed Forecast & Burndown Workbook
│   ├── 2506247040_P2D2_Chatterjee_AI_SOP.pdf # Team AI Standard Operating Procedure
│   ├── burndown_chart.png                    # Burndown chart visualizing velocity & gap
│   ├── screenshot_assignment_tab.png         # Excel Assignment tab results block
│   ├── screenshot_a_red_run.png              # RED run error evidence (18% GST)
│   ├── screenshot_b_green_run.png            # GREEN run passing evidence (5% GST)
│   ├── screenshot_c_release_gate.png         # Blocked merge release gate evidence
│   └── screenshot_d_live_bill.png            # Verified live bill with 5% GST
├── js/
│   ├── app.js                # Application screen wiring and routing
│   ├── cart.js               # Cart state, item cap (MAX_PER_DISH=10), 5% GST math
│   ├── menu.js               # 15 menu items with prices, categories, veg/nonveg flags
│   ├── payment.js            # PayKaro reassurance notice and payment options
│   └── render.js             # UI rendering engine (veg dots, cart rows, bill summary)
├── tests/
│   └── run.js                # 10 automated acceptance tests
├── cards.md                  # Specification cards for F1 to F5, CR1, CR2
├── index.html                # Single-page web application markup
└── README.md                 # Project documentation
```

---

## 🛠️ Local Development & Running Checks

To run the automated acceptance test suite locally:
```bash
git clone https://github.com/forbesayush/swaadexpress.git
cd swaadexpress
node tests/run.js
```

Expected output:
```text
SWAAD EXPRESS CHECKS

  PASS  Every menu item has a name
  PASS  Every menu item has a price that starts with ₹
  PASS  Every price after the ₹ sign is a real number
  PASS  The cart total equals the sum of the items
  PASS  The payment screen offers UPI and card
  PASS  CR1: every menu item has a veg or non-veg tag
  PASS  CR1: every menu item shows a green or red dot on the menu screen
  PASS  CR2: GST is 5% of the food total
  PASS  CR2: GST is shown on its own line on the bill
  PASS  CR2: grand total = food total + GST

10 passed, 0 failed, 0 waiting (not built yet)
```
