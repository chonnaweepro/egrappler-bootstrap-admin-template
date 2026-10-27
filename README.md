# TemplateVamp Rework

งานปรับปรุงต่อยอดจาก **TemplateVamp** ซึ่งเป็น Bootstrap admin template รุ่นคลาสสิก โดยยังคงหน้าตัวอย่างและรูปแบบ dashboard หลายหน้าไว้ พร้อมปรับ shell, responsive behavior และ component styles ให้เหมาะกับการใช้งานปัจจุบัน

โปรเจกต์นี้เป็นส่วนติดต่อผู้ใช้แบบ static ด้วย HTML, CSS และ JavaScript ไม่ใช่ระบบบริหารจัดการที่พร้อมใช้งานทั้งชุด: ไม่มี backend, ฐานข้อมูล, การยืนยันตัวตน หรือ API สำหรับข้อมูลจริง ตัวเลขและเนื้อหาบนหน้าเป็นข้อมูลตัวอย่าง

## การใช้งาน

ดาวน์โหลด branch `main` จาก GitHub:

```bash
git clone --branch main https://github.com/chonnaweepro/template-vamp-rework
```

1. นำโฟลเดอร์โปรเจกต์ไปวางใต้ web root หรือ static web server แล้วเปิด `index.html` ผ่านเว็บเบราว์เซอร์
2. คงโครงสร้าง `assets/` ไว้ข้างไฟล์ HTML เพราะแต่ละหน้าอ้างอิง CSS, JavaScript, รูปภาพ และฟอนต์ด้วย relative path
3. ปรับข้อความ ข้อมูลตัวอย่าง และลิงก์ให้ตรงกับแอปพลิเคชันของคุณ แล้วเชื่อมกราฟ ปฏิทิน ตาราง และฟอร์มเข้ากับ backend/API ที่ใช้งานจริง
4. หากต้องการใช้ `error.html` เป็นหน้า 404 ให้ตั้งค่า web server ให้ส่งไฟล์นี้เมื่อไม่พบหน้า

ไม่มีขั้นตอน build หรือ package manager ที่กำหนดไว้ในโปรเจกต์นี้ Bootstrap และไฟล์ประกอบหลักอยู่ใน `assets/vendor/`.

## ไลบรารีที่หน้าเว็บใช้งาน

รายการนี้อ้างอิงจาก asset ที่หน้า HTML ปัจจุบันเรียกใช้ และอ่านเวอร์ชันจาก metadata/license ที่เก็บไว้ ไม่รวมไฟล์ legacy ที่ยังอยู่ใน `assets/vendor/` แต่ไม่มีหน้าเรียกใช้

| Library | เวอร์ชันใน asset | การใช้งาน | ไฟล์ |
| --- | --- | --- | --- |
| Bootstrap | 5.3.8 | layout และ interactive components | `assets/vendor/bootstrap.min.css`, `assets/vendor/bootstrap.bundle.min.js` |
| Font Awesome Free | 7.3.1 | ไอคอนที่ใช้ทั่ว template | `assets/vendor/fontawesome/css/all.min.css` |
| Bootstrap Icons | 1.13.2 | ไอคอนเพิ่มเติมใน Dashboard | `assets/vendor/bootstrap-icons/font/bootstrap-icons.min.css` |
| Chart.js | 4.6.1 | กราฟใน Dashboard, Reports และ Charts | `assets/vendor/chart.umd.min.js` |
| FullCalendar | 7.1.3 | ปฏิทินใน Dashboard; ใช้ Bootstrap 5 adapter และ Temporal polyfill ที่เก็บในโปรเจกต์ | `assets/vendor/fullcalendar/all/global.min.js`, `assets/vendor/fullcalendar/bootstrap5.global.js`, `assets/vendor/temporal-polyfill/global.min.js` |

สคริปต์เฉพาะของ template เช่น navigation, FAQ, App Tour และตัวอย่างฟอร์มอยู่ใน `assets/js/`; เป็นโค้ดของโปรเจกต์ ไม่ใช่รายการไลบรารีภายนอก

## หน้าต่าง ๆ

| ไฟล์ | หน้าที่ |
| --- | --- |
| `index.html` | Dashboard หลัก: สรุปสถิติ ข่าว/กิจกรรม ทางลัด กราฟ ตารางตัวอย่าง และปฏิทิน |
| `reports.html` | หน้ารายงานตัวอย่าง แสดงสถิติและกราฟประกอบ |
| `charts.html` | แกลเลอรีตัวอย่างกราฟ เช่น bar, line, pie และ donut chart |
| `guidely.html` | ตัวอย่าง App Tour แบบ guided steps พร้อมตัวอย่างการจัด layout แบบ 12, 6, 4 และ 3 columns |
| `shortcodes.html` | Showcase ของ UI components และ form controls เช่น buttons, alerts, progress bars, accordion, modal และ social buttons |
| `drops.html` | แกลเลอรีไอคอนสำหรับเลือกใช้ในส่วนติดต่อผู้ใช้ |
| `faq.html` | หน้า FAQ ตัวอย่าง พร้อมการค้นหาและนำทางไปยังคำถาม |
| `priceing.html` | หน้าแสดงแผนราคา/ตัวเลือกการอัปเกรด ชื่อไฟล์สะกดตาม URL ที่มีอยู่ใน template |
| `login.html` | ตัวอย่างหน้าลงชื่อเข้าใช้ ใช้สำหรับปรับหน้าตาและนำไปเชื่อมกับระบบ authentication |
| `signup.html` | ตัวอย่างหน้าสมัครบัญชี ใช้สำหรับปรับหน้าตาและนำไปเชื่อมกับระบบลงทะเบียน |
| `error.html` | ตัวอย่างหน้า 404 เมื่อไม่พบหน้าที่ร้องขอ |

## Design DNA และแนวทางปรับปรุง

### ลักษณะของ TemplateVamp ต้นฉบับ

TemplateVamp มาจากยุค Twitter Bootstrap และมีจุดเด่นเป็น admin UI แบบหลายหน้า เน้นความกระชับและเปิดให้ปรับแต่งได้ง่าย จาก source CSS/HTML เดิมพบรูปแบบสำคัญดังนี้

- **Navigation สองชั้น:** แถบแบรนด์ด้านบนสีฟ้า และแถบเมนูหลักสีขาวที่ใช้ไอคอนคู่กับชื่อหน้า; หน้าปัจจุบันเน้นด้วยเส้นสี coral
- **Dashboard แบบ widget:** ใช้ shortcut tiles, ตัวเลขสถิติ, ข่าว/กิจกรรม, ตาราง, กราฟ และปฏิทินวางรวมในหน้าเดียว
- **โครงสร้างตัวอย่างหลายหน้า:** แยก Dashboard, Reports, Charts, App Tour, Shortcodes, FAQ, Login/Signup และหน้าอื่นเป็นไฟล์ตรง เหมาะกับการหยิบตัวอย่างไปต่อยอด
- **Visual language แบบ compact:** ใช้สีและขนาดตัวอักษรเพื่อแยกสถานะ แต่รายละเอียดและช่องว่างค่อนข้างหนาแน่นตามมาตรฐาน UI ในยุคนั้น

### หลักการ modernize

1. **รักษาเอกลักษณ์และข้อมูลตัวอย่างที่มีประโยชน์** — คง navigation แนวนอนบน desktop, เมนูแนวตั้งเมื่อยุบบน tablet/มือถือ และหน้าตัวอย่างเดิมไว้; ไม่เปลี่ยนเป็น sidebar หรือ SPA โดยไม่มีเหตุผลจากการใช้งาน
2. **ทำให้ shared shell เป็นแหล่งกำหนดหน้าตากลาง** — ใช้ design tokens และ `assets/css/style.css` สำหรับสี, spacing, typography, border และ shared components; เก็บ CSS เฉพาะหน้าไว้เฉพาะส่วนที่มีเหตุผล
3. **ลดความหนาแน่นโดยไม่ทำให้ dashboard สูญเสียข้อมูล** — จัดลำดับ heading, KPI, ตาราง และสถานะให้สแกนง่าย ใช้สีเชิงความหมายอย่างสม่ำเสมอ และไม่เปลี่ยนทุกส่วนให้กลายเป็น card แบบเดียวกัน
4. **ให้ responsive และ accessibility เป็นข้อกำหนดหลัก** — ทดสอบ handheld baseline ที่ 320×384 CSS px และขนาด mobile อื่นด้วยการตั้งค่า emulation/touch แบบเดียวกัน; ตรวจ touch target อย่างน้อย 44×44 CSS px, keyboard/focus, contrast, label และสถานะเปิด/ปิดของเมนู
5. **ปรับเทคโนโลยีทีละส่วน** — ปัจจุบันหน้าเว็บใช้ Bootstrap 5; คงโครงสร้าง static HTML และ vendor assets ที่มีอยู่ก่อน ตรวจการอ้างอิงทุกจุดก่อนลบ legacy assets และหลีกเลี่ยงการเพิ่ม framework/build pipeline หากยังไม่แก้ปัญหาจริง

### ลำดับงานที่แนะนำ

1. ปิดงาน shared shell และตรวจ desktop/mobile: header, hamburger, เมนูผู้ใช้, footer และ overflow
2. ทำมาตรฐานร่วมของ buttons, forms, alerts, modals, tables และ progress/status โดยคงตัวอย่างเฉพาะหน้าไว้
3. ตรวจ semantics, keyboard operation, focus, contrast, placeholder links และ demo interactions ให้ครบทุกหน้า
4. ทำ dependency cleanup หลังสำรวจ references และยืนยันว่าไม่มีหน้าใดพึ่งพาไฟล์ที่จะลบ

## โครงสร้างไฟล์

- `assets/css/` — stylesheet หลักและ stylesheet เฉพาะหน้า; ปรับสีพื้นผิว เมนู และรูปแบบ component ร่วมกันที่ `style.css`
- `assets/js/` — JavaScript สำหรับเริ่มต้นและควบคุมส่วนต่าง ๆ ของหน้า
- `assets/vendor/` — ไลบรารี CSS/JavaScript, ฟอนต์ และไฟล์ประกอบที่ใช้โดย template
- `assets/img/` — รูปภาพและไอคอนของ template

## ข้อควรทราบ

- Header ตรึงด้านบน; ย้ายปุ่ม `EGrappler.com` กลับไปไว้ใน header ตามต้นฉบับ ไม่อยู่ในรายการ hamburger; บนหน้าจอแคบแสดงไอคอนพร้อมชื่อที่ screen reader อ่านได้; เมนูคง Profile, Settings, Help และ Logout ไว้ และนำช่อง Search ใน navbar ออก
- Footer bar เดิมตรึงไว้ด้านล่างเฉพาะหน้าที่มี footer อยู่แล้ว; หน้า Login, Signup และ 404 คงรูปแบบเดิมที่ไม่มี footer
- `login.html` และ `signup.html` เป็นเพียงตัวอย่าง UI; ฟอร์มใช้ `action="#"` และไม่มี backend สำหรับเข้าสู่ระบบหรือสร้างบัญชี
- Dashboard, reports, charts และ FAQ มีข้อมูลตัวอย่าง ควรแทนที่ด้วยข้อมูลและกฎธุรกิจของแอปพลิเคชันก่อนใช้งานจริง
- ลิงก์ตัวอย่างบางจุดใช้ `javascript:;` และหน้า Dashboard ยังมีลิงก์ข่าวไป eGrappler; เปลี่ยนหรือเชื่อมต่อให้ตรงกับแอปพลิเคชันก่อนใช้งานจริง
- checkout นี้ไม่มี `LICENSE` ที่ root; mirror ของต้นฉบับมีไฟล์ MIT license แต่ควรตรวจสอบว่าเงื่อนไขนั้นครอบคลุม rework นี้ก่อนเผยแพร่ต่อ

## ต้นฉบับและ repository

- **ต้นฉบับ:** [TemplateVamp — Twitter Bootstrap Admin Template (eGrappler)](https://www.egrappler.com/templatevamp-twitter-bootstrap-admin-template-now-available) — ลิงก์ต้นฉบับที่ระบุไว้ใน README ของ code mirror
- **สำเนาอ้างอิง (ไม่ใช่ต้นฉบับ):** [bootstrap_responsive_admin_template](https://github.com/zhu2688/bootstrap_responsive_admin_template) — ใช้เทียบหน้าและ asset; README ของ repository นี้ชี้กลับไปยังหน้า TemplateVamp บน eGrappler
- **Rework นี้:** [template-vamp-rework](https://github.com/chonnaweepro/template-vamp-rework)
