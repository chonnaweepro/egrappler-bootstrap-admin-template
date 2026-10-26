from __future__ import annotations

from html.parser import HTMLParser
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
TRACKED = {
    "html",
    "body",
    "header",
    "nav",
    "main",
    "footer",
    "section",
    "article",
    "aside",
    "form",
    "fieldset",
    "div",
    "table",
    "thead",
    "tbody",
    "tfoot",
    "tr",
    "td",
    "th",
    "ul",
    "ol",
}


class StructureParser(HTMLParser):
    def __init__(self, path: Path) -> None:
        super().__init__(convert_charrefs=True)
        self.path = path
        self.stack: list[tuple[str, int, int]] = []
        self.issues: list[str] = []

    def handle_starttag(
        self, tag: str, attrs: list[tuple[str, str | None]]
    ) -> None:
        tag = tag.lower()
        line, col = self.getpos()

        if tag == "form" and any(open_tag == "form" for open_tag, _, _ in self.stack):
            self.issues.append(f"{self.path.name}:{line}:{col + 1}: nested <form>")

        if tag in TRACKED:
            self.stack.append((tag, line, col + 1))

    def handle_startendtag(
        self, tag: str, attrs: list[tuple[str, str | None]]
    ) -> None:
        return

    def handle_endtag(self, tag: str) -> None:
        tag = tag.lower()
        if tag not in TRACKED:
            return

        line, col = self.getpos()
        if not self.stack:
            self.issues.append(f"{self.path.name}:{line}:{col + 1}: unexpected </{tag}>")
            return

        if self.stack[-1][0] == tag:
            self.stack.pop()
            return

        matching = next(
            (
                index
                for index in range(len(self.stack) - 1, -1, -1)
                if self.stack[index][0] == tag
            ),
            None,
        )
        if matching is None:
            self.issues.append(f"{self.path.name}:{line}:{col + 1}: unexpected </{tag}>")
            return

        open_tags = ", ".join(
            f"<{name}> at {open_line}:{open_col}"
            for name, open_line, open_col in self.stack[matching + 1 :]
        )
        self.issues.append(
            f"{self.path.name}:{line}:{col + 1}: </{tag}> closes before {open_tags}"
        )
        del self.stack[matching:]

    def finish(self) -> list[str]:
        for tag, line, col in self.stack:
            self.issues.append(f"{self.path.name}:{line}:{col}: unclosed <{tag}>")
        return self.issues


def main() -> int:
    issues: list[str] = []
    files = sorted(ROOT.glob("*.html"))

    for path in files:
        parser = StructureParser(path)
        parser.feed(path.read_text(encoding="utf-8"))
        parser.close()
        issues.extend(parser.finish())

    if issues:
        print("FAIL — structural HTML issues:")
        for issue in issues:
            print(issue)
        return 1

    print(
        f"PASS — {len(files)} HTML pages have balanced structural containers "
        "and no nested forms."
    )
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
