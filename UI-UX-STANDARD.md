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

โครงสร้าง: ทุกสถานะมี 3 ค่า — **fill** (พื้นปุ่ม/chip), **text** (ตัวอักษร/ไอคอนบนพื้นสว่าง ผ่าน 4.5:1 บน `#F9F6F1` และ `#FFF`), **soft** (พื้น alert). ปุ่มและ alert อ่านค่าจาก token เหล่านี้ เปลี่ยนสีที่เดียวใน `:root`

| Role | Fill | Text (on light) | Soft | ตัวอักษรบน fill |
|---|---|---|---|---|
| Primary (brand / header) | `--color-primary` `#3A7AB2` | `--color-primary-strong` `#3276B1` / deep `#245580` | – | ขาว 4.56 |
| Action (ปุ่ม primary) | `--color-action` `#187BAC` | `#187BAC` (4.7) | – | ขาว 4.70 |
| Success | `--color-success-fill` `#2A8530` | `--color-success` `#3F7D3F` (4.62) | `--color-success-soft` `#DFF0D8` | ขาว 4.8 |
| Warning | `--color-warning-fill` `#F5A732` | `--color-warning` `#95661E` (4.64) | `--color-warning-soft` `#FCF8E3` | **เข้ม** `#1A1A1A` |
| Danger | `--color-danger-fill` `#DB3325` | `--color-danger` `#D23124` (4.63) | `--color-danger-soft` `#F2DEDE` | ขาว |
| Info | `--color-info-fill` `#367C94` | `--color-info` `#34778E` (4.67) | `--color-info-soft` `#D9EDF7` | ขาว |
| Accent | `--color-accent` `#19BC9C` | `#12856F` | – | – |
| Active marker | `--color-active` `#FF7F74` | – | – | ใช้เป็นเส้น/แถบเท่านั้น ไม่ใช่ตัวอักษร |

| Neutral | Token | Value |
|---|---|---|
| Background | `--color-background` | `#F9F6F1` |
| Surface / Muted surface | `--color-surface` / `--color-surface-muted` | `#FFFFFF` / `#F5F5F5` |
| Border / Strong | `--color-border` / `--color-border-strong` | `#D6D6D6` / `#B8B8B8` |
| Text / Muted / Subtle | `--color-text` / `-muted` / `-subtle` | `#333333` / `#666666` / `#6F6F6F` (4.8) |
| Focus | `--color-focus`, `--focus-ring` | `rgba(58,122,178,.28)`, `#245580` |

หมายเหตุ: ค่า `text` ของ success/warning เคยถูกบันทึกเป็น `#3F8F4A` (3.72:1) และ `#B06D00` (3.87:1) ซึ่งไม่ผ่าน 4.5:1; ได้แก้เป็นค่าข้างบนที่คำนวณจากสี fill โดยทำให้เข้มลงจนผ่าน 4.6 บน `#F9F6F1`. ต้องคำนวณ ratio ก่อนบันทึก token ว่า "ปลอดภัยสำหรับข้อความ" ทุกครั้ง

Accessibility rule:

- `#428BCA` (brand เดิมของ template) ไม่ใช้เป็นพื้นหลังที่มี white text (3.63:1); ใช้ `--color-primary` `#3A7AB2` หรือ strong/deep แทน
- หากพื้นหลังมี white text ให้ใช้ `--color-primary-strong` หรือ `--color-primary-deep`
- สี success/warning/danger ต้องมี text, icon หรือ pattern ประกอบ ไม่ใช้สีอย่างเดียว
- สถานะบน chart ต้องไม่พึ่งพาสีเพียงอย่างเดียว

### Contrast-checked values (วัดจาก DOM จริง 11 หน้า × 1280/375px: 0 fail)

| ใช้กับ | ค่าเดิม | ค่าที่ใช้ | Ratio |
|---|---|---|---|
| Header / brand พื้นหลัง (white text) | `#428bca` | `#3a7ab2` (`--admin-blue`) | 4.56 |
| ข้อความเมนูที่ไม่ active | `#b2afaa` | `#777572` | 4.59 |
| ลิงก์ | `#08c` | `#0076b1` | 4.6 |
| ข้อความรอง (h6, stat, news) | `#999` / `#888` / `#777` | `#747474` / `#757575` / `#6f6f6f` | ≥4.6 |
| ปุ่ม primary / success / info (white text) | `#21a9ec` / `#7eb216` / `#4eb2d5` | `#187bac` / `#597e10` / `#367c94` | ≥4.7 |
| ปุ่ม warning | white on `#f5a732` | `#1a1a1a` on `#f5a732` | 7+ |
| Teal พื้นหลัง / ข้อความ | `#00ba8b` / `#19bc9c` | `#008664` / `#12856f` | 4.56 |
| Alert text (success/info/warning/danger) | bootstrap 2 | `#3d763e` / `#306f8e` / `#886c3b` / `#a84342` | ≥4.56 |

กฎ: สีสว่างที่เป็น brand ใช้เป็นพื้นผิว/ไอคอนได้ แต่ข้อความบนสีนั้นต้องผ่าน 4.5:1 (ข้อความขนาดใหญ่ ≥24px หรือ ≥18.66px bold ผ่านที่ 3:1)
ปุ่มที่พื้นหลังสว่างเกินไปสำหรับ white text (warning) ให้เปลี่ยนสีตัวอักษรเป็นเข้ม ไม่ใช่ทำให้ปุ่มคล้ำ

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

## 12.3.1 Links, Labels และ Line endings

- ห้ามใช้ `href="javascript:;"` (ถูก CSP บล็อก) ใช้ `href="#"` และให้ `base.js` ทำ `preventDefault` กับ placeholder link ทั้ง `#` และ `<หน้านี้>#`
- `<a data-bs-toggle="dropdown">` ต้องมี `role="button"`; `base.js` ให้ Space เปิดได้เหมือน native button
- กลุ่ม checkbox/radio/ปุ่ม ที่ label ไม่ผูก control เดียว ใช้ `<div id="…-label">` + `<div role="group" aria-labelledby="…-label">` (ไม่ใช้ `<label>` ลอย)
- `<title>` ต้องตรงกับ `<h1>` ของหน้า
- `.gitattributes` กำหนด `eol=lf` สำหรับ html/css/js/md/py และ binary สำหรับรูป/font; ไฟล์ใหม่ต้องเป็น LF

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

## 12.5 CSS Hygiene Standard

- ห้ามเขียน vendor prefix ซ้ำกับค่ามาตรฐาน (`-webkit-border-radius`, `-moz-box-shadow`, `filter: progid`, `zoom:1`, `_height`) ยกเว้น `-webkit-font-smoothing` / `-moz-osx-font-smoothing`
- gradient ใช้ `linear-gradient(to bottom, …)`: รูปแบบ `linear-gradient(top, …)` ไม่ถูกต้องและเบราว์เซอร์ทิ้งทั้ง declaration
- ข้อความที่ผู้ใช้ต้องอ่านทุกจุดต้อง `>= 12px` ทั้ง CSS ของโปรเจกต์และของ widget ภายนอก (เช่น calendar ที่ vendor ลดเหลือ 11px ใน container แคบ)
- ปุ่ม account ที่ `<=991.98px` เป็นไอคอน 40px: label ต้องเป็น assistive-only (`.navbar-account-label`) ห้ามล้นไปทับ hamburger
- ก่อนแก้ CSS แบบ "ไม่ควรเปลี่ยนหน้าตา" ให้ถ่ายภาพทุกหน้า × 6 viewport เป็น baseline แล้วเทียบ pixel หลังแก้: ผลที่ต้องได้คือ 0 พิกเซลต่าง

### Dead CSS policy

- ลบเฉพาะ rule ที่ตายแน่นอน: CSS ของ library ที่ถูกแทนที่แล้ว (FullCalendar v1 / jQuery-UI), ส่วนของ component ที่ถูกถอดตาม scope (search bar) และ class ของ Bootstrap 2 ที่ไม่มีใน Bootstrap 5
- **ห้ามลบ variant ที่ template เตรียมไว้ให้ใช้** แม้ไม่มีหน้าใดเรียก เช่น สี `.plan.*`, `.login-social`, `.table-*` variants, `.stats`: ถือเป็น API ของ template
- ก่อนลบต้องวัดว่า selector ไม่ match ทั้ง 11 หน้า แล้วเทียบภาพ 66 ภาพ + state ที่เปลี่ยนได้ (ปฏิทิน 3 view, dropdown, modal, เมนูมือถือ) ต้อง 0 พิกเซลต่าง

## 12.6 Focus and Motion Standard

- ทุก control ที่ focus ด้วยคีย์บอร์ดต้องมี ring หนา `3px` ที่ contrast `>= 3:1` กับพื้นหลัง (WCAG 1.4.11); วัดจากการกด Tab เดินจริงทุกหน้า: 331 จุดหยุด → 0 จุดที่อ่อนเกินไป
- Token: `--focus-ring: #245580` (บนพื้นสว่าง), `--focus-ring-inverse: #ffffff` (บน header สีน้ำเงิน, footer, calendar event)
- ห้ามพึ่ง `box-shadow` ของ Bootstrap เป็น focus indicator (ใช้ tint 25–50% → ~1.4:1) และ `.btn` ธรรมดา/ปุ่ม social/accordion ต้องมี ring ด้วย (Bootstrap ไม่ใส่ให้)
- Container ที่มี `overflow:hidden` (accordion, scroll region, dropdown item) ใช้ `outline-offset: -3px` เพื่อไม่ให้ ring ถูกตัด
- `prefers-reduced-motion: reduce` ต้องปิด animation ของ Chart.js (`animation: false`) นอกเหนือจาก CSS transition
- `outline: 0` ใช้ได้เฉพาะเมื่อมี indicator ทดแทนในสถานะเดียวกัน (`.btn:active` และ `#main-content:focus` ที่เป็นเป้า skip link ไม่ใช่ control)

## 12.7 Keyboard Interaction Verified (Edge)

ทดสอบด้วย key event จริง (Tab / Shift+Tab / Enter / Space / ArrowDown / Escape) ไม่ใช่การเรียก `.click()`:

- **Modal:** `role=dialog`, `aria-modal=true`, `aria-labelledby` ถูกต้อง; Tab/Shift+Tab วนอยู่ภายใน modal (Close → Cancel → Save → Close); Esc, ปุ่มปิด และคลิก backdrop ปิดได้ และคืน focus ไปที่ปุ่มที่เปิด
- **Dropdown ทั้ง 20 ตัวใน 11 หน้า:** Enter และ Space เปิด, ArrowDown ย้าย focus เข้าเมนู, Escape ปิดและคืน focus ที่ toggle
- Toggle ที่เป็น `<a>` ต้องมี `role="button"` ทุกตัว: ตรวจด้วย regex ที่รองรับ `<a` ตามด้วยขึ้นบรรทัดใหม่ (`<a\s`) ไม่ใช่เฉพาะ `<a `
- ตัวทดสอบต้อง assert ว่า modal/เมนูเปิดจริงก่อนวัดผล: การวัดบน element ที่ไม่มีอยู่คืนค่า object ของ error ซึ่งถูกนับเป็น truthy ทำให้ผ่านโดยไม่ได้ทดสอบอะไร
- Brand text ที่ `>=768px` ยืดเข้าจากขอบ content 6–8px ตาม padding เดิมของ TemplateVamp (ตั้งใจคงไว้); ที่ `<=767.98px` อยู่ขอบ gutter 12px เดียวกับ content


## 12.8 Menu Standard

- โครงเดิม: desktop เป็นแถบแนวนอน, `<992px` พับเป็นแนวตั้งใน panel, ไม่มี search
- หน้าปัจจุบันระบุด้วย `aria-current="page"` (ไม่ใช่เฉพาะสี): ทั้งรายการหลักและรายการใน dropdown; รายการใน dropdown ที่เป็นหน้าปัจจุบันมีแถบ `#ff7f74` ด้านซ้ายและตัวหนา
- รายการที่ขยายได้มีลูกศร (`::after`) หมุน 180° เมื่อ `aria-expanded="true"`; ปิด transition เมื่อ reduced-motion
- Handheld: submenu สูงขั้นต่ำ `44px` และข้อความเริ่มที่ x เดียวกับ label ของเมนูหลัก (`--menu-text-x`: 55px / 45px ที่ <768px)
- Dropdown ใน panel ที่เป็น `position: static` ต้อง reset `inset`/`transform` เพราะ Popper ยังเขียน `translate` ให้ ซึ่งทำให้ submenu เลื่อนไปทับแถวแม่

## 12.9 Footer on Phones

- `<=767.98px`: แถบ footer แบบ fixed (`.footer`, ข้อความ copyright) ถูกซ่อน และ `--admin-footer-clearance` เป็น `0px` เพื่อคืนพื้นที่ (body padding-bottom และ max-height ของเมนูที่เปิด อ่านค่านี้เหมือนกัน)
- `>=768px` ยังแสดง footer ตามเดิม; บล็อกลิงก์ `.extra` ท้ายหน้าไม่ได้รับผลกระทบ

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
