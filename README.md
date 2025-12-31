<div align="center">

# 📉 Slippage Tracker Client — Execution Quality Monitor

[![Next.js](https://img.shields.io/badge/Next.js-13-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)

**A purpose-built analytical dashboard for visualizing trade execution latency and price slippage across Forex brokers.**

*Analytical • Real-time • Data-Driven*

[Report Bug](https://github.com/sajidmahamud835/slippage-tracker-client/issues) · [Request Feature](https://github.com/sajidmahamud835/slippage-tracker-client/issues)

</div>

---

## 🔬 About The Project

**Slippage Tracker Client** provides the visualization layer for a broader research initiative into **Broker Execution Quality**. In high-frequency and algorithmic trading (like the strategies employed in *MarketSync-EA*), "slippage"—the difference between expected and executed price—can erode potential alpha significantly.

This frontend application consumes data from trading terminals to present a clear, actionable dashboard. It allows researchers and traders to audit their broker's performance, identifying liquidity gaps and potential manipulation.

### 🎯 Key Implementations
1.  **Data Visualization**: Rendering complex time-series data of trade fills versus requested prices.
2.  **Authentication**: Secure user access to private trading history.
3.  **Component Architecture**: Modular design using Next.js App Router for server-side optimization of initial data loads.

---

## ⚙️ Technical Architecture

The client is built using the specific advantages of Next.js 14:

-   **Routing**: App Router using `(user)` groups for protected dashboard routes.
-   **Styling**: utility-first CSS with Tailwind for rapid, consistent layout development.
-   **State Management**: React Hooks handling client-side interactions within the dashboard components.

---

## ✨ Features

### 🟢 Implemented Capabilities

| Component | Feature Description |
|-----------|---------------------|
| **Dashboard** | Comprehensive view of account metrics (Positive/Negative Slippage) |
| **Login portal** | Secure entry point for authorized users |
| **Interactive Tabs** | Easy switching between different accounts or timeframe views |
| **Responsive Design** | Optimized for desktop analysis and mobile checking |

### 🗓️ Research & Development Plan (Todo)

- [ ] **Chart.js Integration**: Replace tabular data with visual scatter plots showing slippage distribution.
- [ ] **Real-time WebSockets**: Upgrade from static fetching to live streaming of trade events as they happen.
- [ ] **Export Functionality**: Ability to download CSV reports for external analysis in Python/Pandas.
- [ ] **Broker Comparison**: Feature to overlay execution data from multiple sources side-by-side.

---

## 🚀 Getting Started

### Prerequisites

-   **Node.js**: v18.0 or higher
-   **Slippage Backend**: (Optional) Fully functional with mock data if backend is offline.

### Installation

1.  **Clone the Repository**
    ```bash
    git clone https://github.com/sajidmahamud835/slippage-tracker-client.git
    cd slippage-tracker-client
    ```

2.  **Install Dependencies**
    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Run Development Server**
    ```bash
    npm run dev
    ```

4.  **View Application**
    Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🤝 Related Projects

Explore other components of the research portfolio:

1.  **[MarketSync-EA](../MarketSync-EA)** - The primary data source; the trading bot that generates the execution data.
2.  **[GridMaster Pro](../grid-master-pro-mt5-ea)** - Another EA where slippage monitoring is critical for profitability.
3.  **[BankSync](../banksync)** - Related financial dashboarding technology.

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

---

<div align="center">

**[Sajid Mahamud](https://github.com/sajidmahamud835)**

*Full-Stack Engineer • Trading Systems Architect*

</div>
