document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".faq-list").forEach((list) => {
    const items = Array.from(list.querySelectorAll(":scope > li"));
    const container = document.createElement("div");
    container.className = "faq-container";
    list.before(container);
    container.append(list);

    const form = document.createElement("form");
    form.className = "faq-search";
    form.setAttribute("role", "search");
    form.addEventListener("submit", (event) => event.preventDefault());

    const input = document.createElement("input");
    input.type = "text";
    input.name = "search";
    input.placeholder = "Search by Keyword";
    input.setAttribute("aria-label", "Search frequently asked questions");

    form.append(input);
    list.before(form);

    const toc = document.createElement("nav");
    toc.className = "faq-toc";
    toc.setAttribute("aria-label", "Questions on this page");
    const tocList = document.createElement("ol");
    toc.append(tocList);
    list.before(toc);

    const empty = document.createElement("p");
    empty.className = "faq-empty";
    empty.textContent = "Nothing Found";
    empty.hidden = true;
    container.append(empty);

    const entries = items.map((item, index) => {
      const id = `faq-${index + 1}`;
      item.id = id;
      const text = document.createElement("div");
      text.className = "faq-text";
      while (item.firstChild) text.append(item.firstChild);
      item.append(text);

      const icon = document.createElement("div");
      icon.className = "faq-icon";
      const number = document.createElement("div");
      number.className = "faq-number";
      number.textContent = String(index + 1);
      icon.append(number);
      item.prepend(icon);

      const heading = text.querySelector("h4")?.textContent.trim() || `Question ${index + 1}`;
      const tocItem = document.createElement("li");
      const link = document.createElement("a");
      link.href = `#${id}`;
      link.textContent = `${index + 1}. ${heading}`;
      tocItem.append(link);
      tocList.append(tocItem);
      return { item, text, tocItem };
    });

    input.addEventListener("input", () => {
      const query = input.value.trim().toLocaleLowerCase();
      let visibleCount = 0;
      entries.forEach(({ item, text, tocItem }) => {
        const matches = text.textContent.toLocaleLowerCase().includes(query);
        item.hidden = !matches;
        tocItem.hidden = !matches;
        if (matches) visibleCount += 1;
      });
      const hasResults = visibleCount > 0;
      toc.hidden = !hasResults || !entries.length;
      empty.hidden = hasResults;
    });
  });
});
