document.addEventListener("DOMContentLoaded", () => {
  renderSampleChart("area-chart", "line", [65, 59, 90, 81, 56, 55, 40], {
    datasets: [
      {
        label: "This year",
        data: [65, 59, 90, 81, 56, 55, 40],
        fill: true,
        backgroundColor: "rgba(220, 220, 220, 0.5)",
        borderColor: "rgba(220, 220, 220, 1)",
        borderWidth: 2,
        pointBackgroundColor: "rgba(220, 220, 220, 1)",
        pointBorderColor: "#fff",
        pointBorderWidth: 1,
        pointRadius: 3,
        pointHoverRadius: 3,
        tension: 0.4,
      },
      {
        label: "Last year",
        data: [28, 48, 40, 19, 96, 27, 100],
        fill: true,
        backgroundColor: "rgba(151, 187, 205, 0.5)",
        borderColor: "rgba(151, 187, 205, 1)",
        borderWidth: 2,
        pointBackgroundColor: "rgba(151, 187, 205, 1)",
        pointBorderColor: "#fff",
        pointBorderWidth: 1,
        pointRadius: 3,
        pointHoverRadius: 3,
        tension: 0.4,
      },
    ],
    chartOptions: {
      scales: {
        x: { grid: { color: "rgba(0, 0, 0, .05)" } },
        y: {
          beginAtZero: false,
          min: 15,
          max: 100,
          ticks: { stepSize: 5, autoSkip: false },
          grid: { color: "rgba(0, 0, 0, .05)" },
        },
      },
    },
  });

  const calendarElement = document.getElementById("calendar");
  if (!calendarElement || !window.FullCalendar) return;

  const modalElement = document.getElementById("calendar-event-modal");
  const eventForm = document.getElementById("calendar-event-form");
  const eventTitle = document.getElementById("calendar-event-title");
  const selectionDetails = document.getElementById("calendar-event-selection");
  if (!modalElement || !eventForm || !eventTitle || !selectionDetails || !window.bootstrap?.Modal) return;

  const eventModal = window.bootstrap.Modal.getOrCreateInstance(modalElement);
  let pendingSelection = null;

  modalElement.addEventListener("shown.bs.modal", () => eventTitle.focus());
  modalElement.addEventListener("hidden.bs.modal", () => {
    pendingSelection = null;
    eventForm.reset();
    selectionDetails.textContent = "";
    calendar.unselect();
  });
  eventForm.addEventListener("submit", (event) => {
    event.preventDefault();
    eventTitle.value = eventTitle.value.trim();
    if (!pendingSelection || !eventForm.reportValidity()) return;

    calendar.addEvent({
      title: eventTitle.value.trim(),
      start: pendingSelection.start,
      end: pendingSelection.end,
      allDay: pendingSelection.allDay,
    });
    eventModal.hide();
  });

  const today = new Date();
  const formatLocalDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };
  const dateOffset = (days) => {
    const date = new Date(today);
    date.setDate(date.getDate() + days);
    return formatLocalDate(date);
  };
  const dateTimeOffset = (days, hours, minutes = 0) => {
    const date = new Date(today);
    date.setDate(date.getDate() + days);
    date.setHours(hours, minutes, 0, 0);
    return `${formatLocalDate(date)}T${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:00`;
  };
  const dateOnMonthDay = (day) =>
    formatLocalDate(new Date(today.getFullYear(), today.getMonth(), day));
  const calendar = new FullCalendar.Calendar(calendarElement, {
    initialView: "dayGridMonth",
    height: "auto",
    dayCellClass: "legacy-dashboard-day",
    dayCellInnerClass: "legacy-dashboard-day-inner",
    dayCellTopInnerClass: "legacy-dashboard-day-number",
    dayHeaderInnerClass: "legacy-dashboard-day-header",
    headerToolbar: {
      left: "prev,next today",
      center: "title",
      right: "dayGridMonth,timeGridWeek,timeGridDay",
    },
    buttons: {
      today: { text: "today" },
      dayGridMonth: { text: "month" },
      timeGridWeek: { text: "week" },
      timeGridDay: { text: "day" },
    },
    eventClass: "legacy-dashboard-event",
    selectable: true,
    editable: true,
    events: [
      { title: "All Day Event", start: dateOnMonthDay(1), allDay: true },
      {
        title: "Long Event",
        start: dateOffset(5),
        end: dateOffset(7),
        className: "legacy-dashboard-long-event",
      },
      {
        id: 999,
        title: "Repeating Event",
        start: dateTimeOffset(-3, 16),
        allDay: false,
        className: "legacy-dashboard-repeating-event",
      },
      {
        id: 999,
        title: "Repeating Event",
        start: dateTimeOffset(4, 16),
        allDay: false,
        className: "legacy-dashboard-repeating-event",
      },
      {
        title: "Meeting",
        start: dateTimeOffset(0, 10, 30),
        allDay: false,
        className: "legacy-dashboard-meeting",
      },
      {
        title: "Lunch",
        start: dateTimeOffset(0, 12),
        end: dateTimeOffset(0, 14),
        allDay: false,
        className: "legacy-dashboard-lunch",
      },
      {
        title: "Birthday Party",
        start: dateTimeOffset(1, 19),
        end: dateTimeOffset(1, 22, 30),
        allDay: false,
        className: "legacy-dashboard-birthday",
      },
      {
        title: "EGrappler.com",
        start: dateOnMonthDay(28),
        end: dateOnMonthDay(29),
        url: "https://EGrappler.com/",
      },
    ],
    select(info) {
      pendingSelection = {
        start: info.start,
        end: info.end,
        allDay: info.allDay,
      };
      const selectedStart = info.allDay
        ? new Intl.DateTimeFormat(undefined, { dateStyle: "full" }).format(info.start)
        : new Intl.DateTimeFormat(undefined, { dateStyle: "medium", timeStyle: "short" }).format(info.start);
      selectionDetails.textContent = info.allDay
        ? `All-day event · ${selectedStart}`
        : `Selected start · ${selectedStart}`;
      eventForm.reset();
      eventModal.show();
    },
  });
  calendar.render();
});
