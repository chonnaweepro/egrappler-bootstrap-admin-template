(function () {
  "use strict";

  const palette = ["#F38630", "#E0E4CC", "#69D2E7", "#46BFBD", "#949FB1"];
  const months = ["January", "February", "March", "April", "May", "June", "July"];
  const axis = {
    x: { grid: { display: false } },
    y: { beginAtZero: true, grid: { color: "rgba(0, 0, 0, .08)" } },
  };

  window.renderSampleChart = function (id, type, values, options = {}) {
    const canvas = document.getElementById(id);
    if (!canvas || !window.Chart) return null;

    const data = Array.isArray(values) ? values : [65, 59, 90, 81, 56, 55, 40];
    const labels = options.labels || (type === "doughnut" || type === "pie" || type === "polarArea"
      ? ["New", "In progress", "Completed", "On hold"]
      : months);
    const datasets = options.datasets || [{
      label: options.label || "Current period",
      data,
      backgroundColor: type === "line"
        ? "rgba(70, 191, 189, .25)"
        : labels.map((_, index) => palette[index % palette.length]),
      borderColor: type === "line"
        ? "#46BFBD"
        : labels.map((_, index) => palette[index % palette.length]),
      borderWidth: 1,
      pointBackgroundColor: "#46BFBD",
      fill: type === "line",
      tension: 0.3,
    }];

    canvas.setAttribute("role", "img");
    canvas.setAttribute("tabindex", "0");
    canvas.setAttribute(
      "aria-label",
      `${datasets.map((dataset) => dataset.label).join(", ")} chart`
    );

    let summary = document.getElementById(`${id}-summary`);
    if (!summary) {
      summary = document.createElement("p");
      summary.id = `${id}-summary`;
      summary.className = "visually-hidden chart-summary";
      canvas.insertAdjacentElement("afterend", summary);
    }
    summary.textContent = datasets
      .map((dataset) => `${dataset.label}: ${dataset.data.join(", ")}`)
      .join(". ");

    return new Chart(canvas, {
      type,
      data: { labels, datasets },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: datasets.length > 1, position: "bottom" },
          tooltip: { mode: "index", intersect: false },
        },
        scales: ["doughnut", "pie", "polarArea"].includes(type) ? {} : axis,
        ...(window.matchMedia("(prefers-reduced-motion: reduce)").matches ? { animation: false } : {}),
        ...options.chartOptions,
      },
    });
  };
})();
