document.addEventListener("DOMContentLoaded", () => {
  const months = ["January", "February", "March", "April", "May", "June", "July"];
  const firstSeries = [65, 59, 90, 81, 56, 55, 40];
  const secondSeries = [28, 48, 40, 19, 96, 27, 100];
  const firstFill = "rgba(220, 220, 220, 0.5)";
  const firstStroke = "rgba(220, 220, 220, 1)";
  const secondFill = "rgba(151, 187, 205, 0.5)";
  const secondStroke = "rgba(151, 187, 205, 1)";
  const gridColor = "rgba(0, 0, 0, .05)";
  const cartesianScales = {
    x: { grid: { display: true, color: gridColor } },
    y: { beginAtZero: true, grid: { display: true, color: gridColor } },
  };
  const radialSegmentStyle = { borderColor: "#fff", borderWidth: 2 };

  renderSampleChart("donut-chart", "doughnut", [30, 50, 100, 40, 120], {
    labels: [],
    datasets: [{
      data: [30, 50, 100, 40, 120],
      backgroundColor: ["#F7464A", "#46BFBD", "#FDB45C", "#949FB1", "#4D5360"],
      ...radialSegmentStyle,
    }],
  });

  renderSampleChart("area-chart", "line", firstSeries, {
    labels: months,
    datasets: [
      {
        data: firstSeries,
        fill: true,
        backgroundColor: firstFill,
        borderColor: firstStroke,
        borderWidth: 2,
        pointBackgroundColor: firstStroke,
        pointBorderColor: "#fff",
        pointRadius: 4,
        pointBorderWidth: 2,
        tension: 0.4,
      },
      {
        data: secondSeries,
        fill: true,
        backgroundColor: secondFill,
        borderColor: secondStroke,
        borderWidth: 2,
        pointBackgroundColor: secondStroke,
        pointBorderColor: "#fff",
        pointRadius: 4,
        pointBorderWidth: 2,
        tension: 0.4,
      },
    ],
    chartOptions: { scales: cartesianScales },
  });

  renderSampleChart("bar-chart", "bar", firstSeries, {
    labels: months,
    datasets: [
      { data: firstSeries, backgroundColor: firstFill, borderColor: firstStroke, borderWidth: 2 },
      { data: secondSeries, backgroundColor: secondFill, borderColor: secondStroke, borderWidth: 2 },
    ],
    chartOptions: { scales: cartesianScales },
  });

  renderSampleChart("pie-chart", "pie", [30, 50, 100], {
    labels: [],
    datasets: [{
      data: [30, 50, 100],
      backgroundColor: ["#F38630", "#E0E4CC", "#69D2E7"],
      ...radialSegmentStyle,
    }],
  });

  const polarValues = Array.from({ length: 6 }, () => Math.random());
  renderSampleChart("line-chart", "polarArea", polarValues, {
    labels: [],
    datasets: [{
      data: polarValues,
      backgroundColor: ["#D97041", "#C7604C", "#21323D", "#9D9B7F", "#7D4F6D", "#584A5E"],
      ...radialSegmentStyle,
    }],
  });
});
