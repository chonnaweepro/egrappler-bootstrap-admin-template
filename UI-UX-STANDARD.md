# UI/UX Standard

มาตรฐาน UI/UX สำหรับ TemplateVamp / eGrappler Bootstrap Admin Template

เอกสารนี้เป็น baseline สำหรับการปรับปรุงหน้าเดิมและหน้าใหม่ โดยต้องรักษา visual identity เดิมของ TemplateVamp และปรับปรุง usability แบบค่อยเป็นค่อยไป

## 1. Product Direction

- ประเภทระบบ: legacy admin dashboard / operational web template
- เป้าหมายหลัก: อ่านข้อมูลเร็ว, ใช้งาน form ได้ง่าย, navigation คาดเดาได้
- Visual identity ที่ต้องรักษา:
  - Header สีน้ำเงินเดิม
  - พื้นหลังและ widget โทน TemplateVamp เดิม
  - Desktop horizontal navigation
  - Handheld collapsible vertical navigation
  - Fixed header/footer ตาม route ที่มีอยู่เดิม
  - Dashboard density แบบ operational ไม่ใช่ marketing dashboard
- ห้ามเปลี่ยนเป็น sidebar, bottom navigation หรือ visual theme ใหม่ทั้งระบบ เว้นแต่มีคำขอใหม่โดยตรง

## 2. Responsive Baseline

| Viewport | Standard |
|---|---|
| 1280×900 | Desktop dashboard เต็มรูปแบบ, navigation แนวนอน |
| 1024×768 | Desktop/tablet transition, ลด gutter ได้แต่ยังคง hierarchy |
| 768×1024 | Collapsible navigation, dashboard ลดเป็น column ที่อ่านง่าย |
| 375×667 | Handheld baseline หลัก |
| 360×640 | Handheld ขนาดเล็ก |
| 320×384 | Minimum supported handheld baseline |

กฎร่วม:

- ต้องไม่มี horizontal overflow ที่ระดับ document บน handheld
- ห้ามปิดการ zoom ของ browser
- ใช้ breakpoint ที่สอดคล้องกันทั้งระบบ
- fixed header/footer ต้องมี content clearance ที่วัดจากขนาดจริง
- menu ที่เปิดบน handheld ต้อง scroll ภายใน menu และไม่ทำให้ footer บังรายการสุดท้าย
- หลังแก้ responsive CSS ต้องตรวจทั้งด้านบนและด้านล่างของ breakpoint

## 3. Spacing System

ใช้ rhythm แบบ 4/8px เป็นหลัก:

- `4px`: icon/text alignment และรายละเอียดเล็ก
- `8px`: ระยะห่างระหว่าง controls ที่กดได้
- `12px`: padding ของ compact mobile section
- `16px`: ระยะห่างระหว่าง section หรือ content กับ navigation
- `24px`: กลุ่มเนื้อหาหลักบน desktop
- `32px`: separation ระหว่างกลุ่มใหญ่

ห้ามใช้ spacing แบบสุ่มใน component ใหม่ หากไม่จำเป็นต้องเข้ากับ legacy layout

## 4. Navigation Standard

### Desktop

- Primary navigation อยู่ใน subnavbar แนวนอน
- ทุก item ต้องมี icon และ visible text label
- Active page ต้องมี visual cue ที่ชัดเจน
- Icon ทุก item ใช้ icon box ขนาดเท่ากัน
- Account / EGrappler.com control ต้องอยู่ใน top header เดิม
- Search ไม่อยู่ใน navigation ตาม scope ปัจจุบัน

### Handheld

- Header ต้องเป็น single row
- Brand ย่อได้ แต่ไม่ชนกับ account หรือ hamburger
- Account control ต้องอยู่นอก hamburger menu
- Hamburger menu มีเฉพาะ primary navigation
- Menu item สูงอย่างน้อย `44px` และควรอยู่ช่วง `48–52px`
- ระยะห่างระหว่าง action targets อย่างน้อย `8px`
- Menu panel ต้องเปิดใต้ header และ scroll ภายในเมื่อสูงเกินพื้นที่ว่าง
- เมื่อตรวจด้วย CDP ต้องรอ CSS transition ให้จบก่อนวัดขนาด

### Navigation Accessibility

- ใช้ `aria-expanded` กับ collapsible control
- ใช้ `aria-controls` ชี้ไปยัง menu ที่ถูกเปิด/ปิด
- Icon ที่อยู่ข้าง visible label ให้เป็น decorative (`aria-hidden="true"`) หากไม่มีความหมายเพิ่มเติม
- ห้ามใช้ hover เป็นวิธีเดียวในการเข้าถึง navigation
- Focus state ต้องมองเห็นได้ทั้ง desktop และ handheld

## 5. Form Standard

### Layout

- ทุก input ต้องมี visible label
- ใช้ `label[for]` ที่ชี้ไปยัง input จริง
- Desktop ใช้ grid ได้เมื่อช่วยให้ scan ง่าย
- Handheld ใช้ single-column เป็นค่าเริ่มต้น
- Form field ที่เป็นกลุ่มเดียวกันควรอยู่ใน `fieldset/legend` หรือ visual group เดียวกัน
- Helper text อยู่ใต้ field ที่เกี่ยวข้อง ไม่รวมไว้ด้านบนหน้าอย่างเดียว

### Controls

- Handheld input/select/textarea สูงอย่างน้อย `44px`
- Mobile input text ใช้ `16px` เพื่อป้องกัน browser auto-zoom
- Input group และ button group ต้อง wrap ได้
- Primary action มีเพียงหนึ่งรายการต่อ form หรือ section
- บน handheld primary action ควรเต็มความกว้าง
- ปุ่มรองต้องแยกจาก primary ด้วยระยะห่างอย่างน้อย `8px`
- Checkbox/radio ต้องมีพื้นที่กดรวมอย่างน้อย `44px`
- ใช้ `type`, `autocomplete` และ input mode ที่ตรงกับข้อมูลจริง
- Password field ควรมี show/hide toggle เมื่อเป็น form จริงที่ต้องกรอกบน handheld

### Form Feedback

- Error ต้องอยู่ใกล้ field ที่ผิด
- Error ต้องบอกสาเหตุและวิธีแก้ ไม่ใช้แค่ `Invalid input`
- ใช้ `aria-describedby` เชื่อม helper/error text
- Form ที่มีหลาย error ควรมี error summary และ focus ไปยัง summary หรือ field แรกที่ผิด
- Submit ต้องมี loading/success/error feedback
- Destructive action ต้องมี confirmation และ recovery path
- Disabled state ต้องแยกจาก read-only state อย่างชัดเจน

## 6. Dashboard Standard

- KPI ต้องอ่านได้จากการ scan ครั้งแรก
- KPI icon, label และ value ต้องมี alignment สม่ำเสมอ
- Desktop dashboard ใช้ density ระดับ operational; ห้ามเพิ่ม whitespace จนข้อมูลหายไปจาก viewport
- Chart ต้องมีขนาด stable เพื่อป้องกัน layout shift
- Chart ต้องมี title, legend หรือ context ที่เพียงพอ
- ห้ามใช้สีอย่างเดียวในการสื่อสถานะ
- Chart สำคัญควรมี table หรือ text summary เป็น accessible fallback
- Action table ต้องคง action ที่ใช้งานจริงไว้ และปุ่มต้องกดได้ง่าย
- ตารางกว้างบน handheld ให้ใช้ scroll container เฉพาะตาราง ไม่บังคับให้ทั้งหน้า scroll แนวนอน
- KPI/ข้อมูลตัวเลขควรใช้ tabular figures เมื่อมีการเปรียบเทียบหลายค่า

## 7. Typography and Color

- Body text บน handheld อย่างน้อย `16px` สำหรับเนื้อหาที่ต้องอ่านหรือกรอก
- Body line-height เป้าหมาย `1.5–1.7`
- Label ใช้ weight ประมาณ `600`
- Heading hierarchy ต้องเรียงตามลำดับและไม่ข้ามระดับโดยไม่มีเหตุผล
- สีข้อความปกติต้องมี contrast อย่างน้อย `4.5:1`
- Focus indicator ต้องเห็นชัดและไม่ถูก fixed chrome บัง
- ใช้ semantic tokens ใน shared CSS แทนการเพิ่ม raw color กระจายไปตาม component
- สี error/success ต้องมี text หรือ icon ประกอบ ไม่ใช้สีอย่างเดียว
- หลีกเลี่ยง text ขนาดต่ำกว่า `12px` สำหรับข้อมูลที่ผู้ใช้ต้องอ่าน

## 8. Icon Standard

- ใช้ icon family เดียวกันใน navigation layer เดียวกัน
- ไม่ใช้ emoji เป็น structural icon
- Navigation icon ใช้ fixed icon box; baseline ปัจจุบันคือ `26px`
- Icon size ของ navigation ใช้ `18px` เว้นแต่มีเหตุผลเฉพาะ
- Icon ต้องจัดกึ่งกลางใน icon box และข้อความต้องเริ่มจากแนวเดียวกัน
- Icon-only button ต้องมี accessible name
- Decorative icon ข้างข้อความต้องไม่แย่งความหมายจากข้อความ
- ห้ามปรับขนาด glyph แต่ละตัวแบบสุ่มเพื่อชดเชยความกว้างของรูปทรง

## 9. Motion and State

- Hover, focus, active และ expanded state ต้องแยกจากกันอย่างชัดเจน
- Press feedback ต้องเกิดเร็วและไม่ทำให้ layout ขยับ
- หลีกเลี่ยง animation ที่เปลี่ยน width/height/top/left หากใช้ transform/opacity ได้
- Menu transition ต้องรอให้จบก่อนตรวจ geometry
- รองรับ `prefers-reduced-motion: reduce`
- Animation ต้องช่วยอธิบาย state change ไม่ใช่ใส่เพื่อความสวยงามอย่างเดียว

## 10. Fixed Chrome and Layering

ลำดับชั้นมาตรฐาน:

- Content: base layer
- Widget/dropdown: local elevated layer
- Subnavbar: `1035`
- Header: `1040`
- Footer: `1020`
- Modal/backdrop: Bootstrap-managed layer

กฎ:

- Fixed header/subnavbar/footer ต้องไม่บัง content หรือ keyboard focus
- เพิ่ม content gap หลัง navigation อย่างตั้งใจ
- เปิด mobile menu ให้ overlay ใต้ headerและ scroll ภายใน
- Footer clearance ต้องมีเฉพาะ route ที่มี fixed footer จริง
- Dropdown ต้องอยู่ใน viewport และไม่ถูกตัดโดย ancestor ที่มี overflow

## 11. Accessibility Minimum

ก่อนส่งมอบต้องตรวจ:

- Keyboard tab order ตรงกับ visual order
- ทุก form control มี label
- ทุก icon-only control มี accessible name
- Focus ring ยังมองเห็นได้
- สีไม่ใช่ตัวบอกสถานะเพียงอย่างเดียว
- Modal มี close/cancel path
- Mobile menu มี expanded state ที่ถูกต้อง
- Focus ไม่ถูกบังโดย fixed header/footer/menu
- Reduced motion ไม่ทำให้ interaction ใช้งานไม่ได้
- Text และ control ไม่ถูกตัดเมื่อขยายขนาดตัวอักษร

## 12. QA Acceptance Checklist

### Source

- [ ] `git diff --check` ผ่านสำหรับไฟล์ที่แก้
- [ ] CSS braces สมดุล
- [ ] ไม่มี selector ใหม่ที่ขัดกับ fixed height เดิมโดยไม่ตั้งใจ
- [ ] ไม่มี inline JavaScript หรือ inline event handler เพิ่ม
- [ ] ทุก `label[for]` มี target จริง

### Rendered Desktop

- [ ] ตรวจ `1280×900`
- [ ] Header/footer อยู่ตำแหน่งถูกต้อง
- [ ] Dashboard KPI และ chart อ่านง่าย
- [ ] ไม่มี layout shift ที่เห็นชัด
- [ ] Navigation active state ถูกต้อง

### Rendered Handheld

- [ ] ตรวจ `320×384`, `375×667` และ `768×1024`
- [ ] Header เป็น single row
- [ ] Menu เปิดและ scroll ภายในได้
- [ ] Menu item touch target เหมาะสม
- [ ] Account dropdown ยังอยู่ใน top header
- [ ] ไม่มี page-level horizontal overflow
- [ ] Form controls สูงอย่างน้อย `44px`
- [ ] Input text อย่างน้อย `16px`
- [ ] Content ไม่ชิด fixed navigation เกินไป
- [ ] Footer ไม่บัง content หรือ menu item สุดท้าย

## 13. Change Strategy

- ใช้ `assets/css/style.css` เป็น shared foundation หลัก
- เพิ่ม responsive/interaction override ต่อท้าย foundation เดิม
- หลีกเลี่ยงการ rewrite stylesheet ทั้งไฟล์
- เปลี่ยน page-specific CSS เฉพาะเมื่อ shared rule ไม่เหมาะสม
- แก้ shared root cause ก่อนเพิ่ม per-page exception
- ทุก UI change ที่กระทบหลาย route ต้องตรวจ route matrix อย่างน้อยหนึ่ง desktop และหนึ่ง handheld ต่อ route group
- ห้าม commit, push หรือ deploy จากการปรับ UI โดยอัตโนมัติ

## 12.1 Color Palette Standard

ใช้ semantic tokens จาก `assets/css/style.css` แทนการกระจายค่า hex ใหม่ใน component โดยยังคง TemplateVamp visual identity เดิมไว้:

| Role | Token | Value | ใช้กับ |
|---|---|---|---|
| Primary | `--color-primary` | `#428BCA` | brand accent, link, legacy highlight |
| Primary strong | `--color-primary-strong` | `#3276B1` | header/button ที่มี white text |
| Primary deep | `--color-primary-deep` | `#245580` | hover/focus ที่ต้องการ contrast สูง |
| Accent | `--color-accent` | `#19BC9C` | secondary highlight และ metric accent |
| Success | `--color-success` | `#3F8F4A` | success state ที่มีข้อความร่วมด้วย |
| Warning | `--color-warning` | `#B06D00` | warning state ที่มีข้อความร่วมด้วย |
| Danger | `--color-danger` | `#B52B27` | error/destructive state |
| Info | `--color-info` | `#31708F` | informational state |
| Background | `--color-background` | `#F9F6F1` | page background เดิม |
| Surface | `--color-surface` | `#FFFFFF` | card, form, modal surface |
| Muted surface | `--color-surface-muted` | `#F5F5F5` | table/header/control background |
| Border | `--color-border` | `#D6D6D6` | default border |
| Strong border | `--color-border-strong` | `#B8B8B8` | active/hover separation |
| Text | `--color-text` | `#333333` | primary text |
| Muted text | `--color-text-muted` | `#666666` | secondary text |
| Focus | `--color-focus` | `rgba(66,139,202,.28)` | focus ring/background |

Accessibility rule:

- `#428BCA` เป็น brand color เดิม แต่ไม่ควรใช้เป็นพื้นหลังที่มี white text ใน component ใหม่ เพราะ contrast ไม่ถึงเป้าหมาย `4.5:1`
- หากพื้นหลังมี white text ให้ใช้ `--color-primary-strong` หรือ `--color-primary-deep`
- สี success/warning/danger ต้องมี text, icon หรือ pattern ประกอบ ไม่ใช้สีอย่างเดียว
- สถานะบน chart ต้องไม่พึ่งพาสีเพียงอย่างเดียว

## 12.2 Font Standard

ใช้ font ที่ self-host ภายในโปรเจกต์ (`assets/vendor/google-fonts.css` → `assets/vendor/fonts/`) เพื่อให้ตัวอักษรเหมือนกันทุก OS และไม่พึ่ง remote font; system font เป็นเพียง fallback สุดท้าย:

| Role | Token | Stack | ใช้กับ |
|---|---|---|---|
| UI/body | `--font-ui` | `Open Sans`, `Noto Sans Thai UI`, `Segoe UI`, `Tahoma`, `Arial`, sans-serif | body, form, navigation, table |
| Heading | `--font-heading` | เท่ากับ `--font-ui` | heading และ section title |
| Data/code | `--font-mono` | `Consolas`, `Liberation Mono`, `Courier New`, monospace | code, identifier |

| Font | ไฟล์ | License |
|---|---|---|
| Open Sans v44 (Latin, 300–800 + italic) | `assets/vendor/fonts/open-sans-v44-latin_math_symbols-*.woff2` | SIL OFL 1.1 |
| Noto Sans Thai UI v42 (Thai + Latin fallback) | `assets/vendor/fonts/noto-sans-thai-ui-v42.woff2` | SIL OFL 1.1 |

Typography rules:

- ห้ามวาง system font (เช่น `Segoe UI`) ไว้หน้า self-hosted font: ทำให้ rendering ต่างกันระหว่าง OS และ header ที่ weight 600 ดูหยาบ/pixel แตกบน Windows
- Open Sans ต้องอยู่หน้า Noto Sans Thai UI เพราะ Noto ครอบคลุม Latin ด้วย; ถ้าสลับลำดับ Latin จะถูก render ด้วย Noto
- ไม่เพิ่ม `@import` หรือ `<link>` ไปยัง Google Fonts; เพิ่ม font ใหม่ต้อง self-host พร้อมไฟล์ license และบันทึกใน `assets/vendor/THIRD-PARTY-NOTICES.md`
- ใช้ `font-display: swap`; ตรวจว่า `document.fonts` โหลด Open Sans 400/600/700 จริงหลังแก้ stack
- Body UI เดิมคงไว้ที่ `13px` เพื่อรักษา operational density; เนื้อหาที่อ่านยาวควรใช้ `16px` ขึ้นไป
- Handheld form controls ใช้ `16px` และสูงอย่างน้อย `44px`
- Body line-height เป้าหมาย `1.5–1.7`
- Heading ใช้ family เดียวกับ body และแยก hierarchy ด้วย size/weight ไม่ใช่เปลี่ยน font หลายตระกูล
- ตัวเลขที่ต้องเปรียบเทียบหลายค่า (เช่น `.stat-value`) ใช้ `font-variant-numeric: tabular-nums`

## 12.3 Page Structure Standard

ทุก route ต้องมีโครงสร้างเอกสารขั้นต่ำดังนี้ (ตรวจแล้วทั้ง 11 หน้า):

- `<a class="skip-link" href="#main-content">` เป็น element แรกใน `<body>`
- เนื้อหาหลักอยู่ใน `<main id="main-content" tabindex="-1">` เพียงหนึ่งตัวต่อหน้า
- มี `<h1>` หนึ่งตัวต่อหน้า; หน้า dashboard ที่ไม่มี heading ในดีไซน์ใช้ `<h1 class="visually-hidden">`
- heading ที่เป็นเพียง demo/ตกแต่ง ให้ใช้ `h2` + class สำหรับขนาด (เช่น `.tour-title`) ไม่ใช้ `h1` ซ้ำ
- `<img>` ต้องมี `alt` (รูปตกแต่งใช้ `alt=""`)
- ทุก form control ต้องมี label ที่ผูกจริง (`for`/wrap/`aria-label`)
- `<table>` ข้อมูลต้องมี `<caption>` (ซ่อนด้วย `.visually-hidden` ได้)
- ห้ามมี `style=""` attribute ใน HTML: ใช้ class ใน CSS เพื่อให้รองรับ CSP `style-src` แบบเข้มงวด (ค่า inline ที่ Chart.js/FullCalendar ตั้งตอน runtime ผ่าน CSSOM ไม่ถูกนับ)

## 12.4 Alignment Standard

ทุก object ต้องมีขอบร่วมกัน ตรวจด้วย audit ใน Edge ที่ `1440, 1280, 1024, 768, 375, 320` ทุก route:

- **Shell edge เดียว:** brand/เมนู/content/footer text ต้องเริ่มที่ x เดียวกัน
  - desktop `>=1440px`: ทุก container (`header`, `subnavbar`, `main-inner`, `footer`) กว้าง `1240px` เท่ากัน; `<1440px` กว้าง `1170px`
  - handheld `<=767.98px`: ใช้ `--admin-gutter: 12px` เป็นขอบซ้าย/ขวาเดียวกันของ brand, hamburger, widget และ footer text
- Widget ชิดขอบ container: ห้ามใช้ negative margin ของ Bootstrap 2 (เช่น `.all-icons { margin-left: -30px }`) เพื่อชดเชย gutter
- `body` ห้ามตั้ง `min-width: 320px` บน handheld: scrollbar แบบ classic เหลือ 305px แล้ว content จะถูกตัดขอบขวา
- Widget header ต้องยืดสูงตามชื่อที่ขึ้นหลายบรรทัด (`display:flex; height:auto`) ห้ามให้ title ล้นออกนอก header
- ตารางกว้างอยู่ใน `.table-responsive` ที่ focus ได้ (`tabindex="0"`, `role="region"`, `aria-label`)
- Grid ของรายการข้อความยาว (icon list) ลดจำนวนคอลัมน์ตาม breakpoint (4/3/2/1) และให้แถวสูงขึ้นได้ ห้ามใช้ความสูงคงที่
- ปุ่ม prev/next ของ calendar ใช้ glyph เดียว (legacy `◄ ►`) ซ่อน chevron ของ theme
- Widget สองคอลัมน์ของ dashboard เป็น masonry ตาม design เดิม ความสูงด้านล่างไม่ต้องเท่ากัน

## Current Project Tokens

```css
--admin-header-height: 58px;
--admin-footer-clearance: 48px;
--color-primary: #428bca;
--color-primary-strong: #3276b1;
--color-accent: #19bc9c;
--color-background: #f9f6f1;
--color-text: #333333;
--color-border: #d6d6d6;
--font-ui: "Open Sans", "Noto Sans Thai UI", "Segoe UI", Tahoma, Arial, sans-serif;
--font-heading: var(--font-ui);
--font-mono: Consolas, "Liberation Mono", "Courier New", monospace;
--ui-touch-target: 44px;
--ui-control-radius: 4px;
--ui-control-focus: rgba(66, 139, 202, .28);
--ui-section-gap: 18px;
```

ค่าดังกล่าวเป็น baseline ปัจจุบัน ไม่ใช่ข้อห้ามตายตัว แต่การเปลี่ยนต้องมีเหตุผลจาก layout หรือ accessibility ที่ตรวจสอบได้
