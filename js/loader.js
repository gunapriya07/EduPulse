// Loads Chart.js from CDN
(function() {
    var script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/chart.js';
    script.onload = function() {
        window.ChartLoaded = true;
        document.dispatchEvent(new Event('chartjs-ready'));
    };
    document.head.appendChild(script);
})();

// Loads data from JSON files and exposes to window
async function loadEduPulseData() {
    const [arith, read, map] = await Promise.all([
        fetch('data/arithmetic_proficiency.json').then(r => r.json()),
        fetch('data/reading_proficiency.json').then(r => r.json()),
        fetch('data/district_map_data.json').then(r => r.json())
    ]);
    window.eduPulseData = { arith, read, map };
    document.dispatchEvent(new Event('edupulse-data-ready'));
}

window.addEventListener('DOMContentLoaded', loadEduPulseData);