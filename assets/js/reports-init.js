document.addEventListener("DOMContentLoaded", () => {
  renderSampleChart("pie-chart", "pie", [30, 50, 100], {
    labels: ["New", "Returning", "Referred"],
  });

  const values = [65, 59, 90, 81, 56, 55, 40];
  ["bar-chart", "bar-chart1", "bar-chart2", "bar-chart3"].forEach((id) => {
    renderSampleChart(id, "bar", values, {
      datasets: [
        { label: "This year", data: values, backgroundColor: "rgba(220, 220, 220, 0.5)", borderColor: "rgba(220, 220, 220, 1)", borderWidth: 1 },
        { label: "Last year", data: [28, 48, 40, 19, 96, 27, 100], backgroundColor: "rgba(151, 187, 205, 0.5)", borderColor: "rgba(151, 187, 205, 1)", borderWidth: 1 },
      ],
    });
  });
});
