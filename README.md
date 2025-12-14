# RAIROI Website

A comprehensive Next.js website presenting the RAIROI (Responsible AI Return on Investment) model, featuring interactive data visualizations, case studies, and an ROI simulator.

## Features

- **Home Page**: Interactive J-Curve animation and aggregate ROI ticker
- **Methodology Page**: Economic theory, 5-Dimension framework, and Swarm Architecture
- **Case Studies**: Strategic heatmaps for Air Liquide, Carrefour, Bouygues Telecom, and Banque de France
- **Results & Data**: Sortable tables with empirical evidence from CAC40, DJI, and NASDAQ
- **ROI Simulator**: Interactive tool for estimating AI transformation ROI

## Tech Stack

- **Next.js 14** (App Router)
- **React 18**
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** (Animations)
- **Recharts** (Data Visualization)
- **Lucide React** (Icons)

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn

### Installation

1. Navigate to the website directory:
```bash
cd website
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
website/
├── app/
│   ├── page.tsx              # Home page
│   ├── methodology/
│   │   └── page.tsx          # Methodology page
│   ├── case-studies/
│   │   └── page.tsx          # Case studies page
│   ├── results/
│   │   └── page.tsx          # Results & Data page
│   ├── simulator/
│   │   └── page.tsx          # ROI Simulator page
│   ├── layout.tsx            # Root layout
│   └── globals.css           # Global styles
├── components/
│   ├── Navigation.tsx        # Main navigation
│   ├── JCurveChart.tsx       # Interactive J-Curve visualization
│   ├── ROITicker.tsx         # ROI ticker component
│   └── StrategicHeatmap.tsx  # Strategic heatmap visualization
├── package.json
├── tailwind.config.js
└── tsconfig.json
```

## Design System

### Colors
- **Deep Navy**: `#0A1929` - Primary background, trust
- **Electric Blue**: `#00D4FF` - Accent, tech/AI
- **Navy Light**: `#1A2B3D` - Secondary backgrounds
- **Blue Light**: `#E6F7FF` - Light backgrounds

### Typography
- Font: Inter (Google Fonts)
- Sans-serif fallback: Roboto, system-ui

## Key Components

### JCurveChart
Interactive visualization of the Productivity J-Curve showing the initial dip (Investment Phase) followed by exponential growth (Value Realization).

### StrategicHeatmap
2D scatter plot showing initiatives plotted by Implementation Complexity (X-axis) vs. Financial Impact (Y-axis), with ROI displayed on hover.

### ROITicker
Displays aggregate value unlocked and ROI percentages for major stock indices (CAC40, Dow Jones, NASDAQ-100).

## Data Sources

The website uses hardcoded sample data based on:
- Real case studies from Air Liquide, Carrefour, Bouygues Telecom, and Banque de France
- Empirical analysis of CAC40, Dow Jones, and NASDAQ-100 companies
- Calibrated ROI calculations from the RAIROI model

## Notes

- The ROI Simulator is a "Light" version with simplified calculations
- For comprehensive analysis, refer to the full RAIROI framework
- All data visualizations are interactive and responsive

## License

Proprietary - RAIROI Project

