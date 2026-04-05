# EduPulse Dashboard

## Features

- **State & National Dashboard**: Visualizes Grade 3 Reading and Grade 5 Arithmetic proficiency using real ASER data (2018-2024).
- **Dynamic Data Loading**: Loads and processes data from JSON files for arithmetic, reading, and district/state mapping.
- **Stats Cards**: Key metrics for Math drops, average proficiency, and more.
- **Interactive Table**: Filter states by risk, see trends, and log interventions.
- **Trends Chart**: Bar chart comparing Math and Reading proficiency across states.
- **State Time Series**: Line chart showing Math and Reading progress (2018-2024) for any selected state.
- **State Performance Highlights**: Top 5 and Bottom 5 states for Math and Reading (2024) for quick insights.
- **District Map (Beta)**: Bar chart for district/division values by state (shows state-level if district data not available).
- **Responsive UI**: Modern, clean, and mobile-friendly design.

## How to Use

1. Open `index.html` in your browser (use a local server for best results).
2. Use the dashboard controls to filter, explore, and analyze the data.
3. Select states in the time series or district map to drill down into trends.

## Data Sources

- `data/arithmetic_proficiency.json`
- `data/reading_proficiency.json`
- `data/district_map_data.json`

## Customization & Extensibility

- Add more features such as drill-downs, export options, AI recommendations, or map visualizations as needed.

---

_Built with HTML, CSS, JavaScript, and Chart.js. Data: ASER 2018-2024._
