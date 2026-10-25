# eGrappler Bootstrap Admin Template

ชุดหน้าเว็บตัวอย่างสำหรับสร้างหรือต่อยอดหน้า **Admin Panel / Back-office Dashboard** เช่น ระบบภายในที่ต้องแสดงสถิติ รายงาน ตารางข้อมูล และเครื่องมือจัดการต่าง ๆ

Template นี้เป็นส่วนติดต่อผู้ใช้แบบ static ด้วย HTML, CSS และ JavaScript ไม่ใช่ระบบบริหารจัดการที่พร้อมใช้งานทั้งชุด: ไม่มี backend, ฐานข้อมูล, การยืนยันตัวตน หรือ API สำหรับข้อมูลจริง ตัวเลขและเนื้อหาบนหน้าเป็นข้อมูลตัวอย่าง

## การใช้งาน

ดาวน์โหลด branch `source` จาก GitHub:

```bash
git clone --branch source https://github.com/chonnaweepro/egrappler-bootstrap-admin-template
```

1. นำโฟลเดอร์โปรเจกต์ไปวางใต้ web root หรือ static web server แล้วเปิด `index.html` ผ่านเว็บเบราว์เซอร์
2. คงโครงสร้าง `assets/` ไว้ข้างไฟล์ HTML เพราะแต่ละหน้าอ้างอิง CSS, JavaScript, รูปภาพ และฟอนต์ด้วย relative path
3. ปรับข้อความ ข้อมูลตัวอย่าง และลิงก์ให้ตรงกับแอปพลิเคชันของคุณ แล้วเชื่อมกราฟ ปฏิทิน ตาราง และฟอร์มเข้ากับ backend/API ที่ใช้งานจริง
4. หากต้องการใช้ `error.html` เป็นหน้า 404 ให้ตั้งค่า web server ให้ส่งไฟล์นี้เมื่อไม่พบหน้า

ไม่มีขั้นตอน build หรือ package manager ที่กำหนดไว้ในโปรเจกต์นี้ Bootstrap และไฟล์ประกอบหลักอยู่ใน `assets/vendor/`.

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

## โครงสร้างไฟล์

- `assets/css/` — stylesheet หลักและ stylesheet เฉพาะหน้า
- `assets/js/` — JavaScript สำหรับเริ่มต้นและควบคุมส่วนต่าง ๆ ของหน้า
- `assets/vendor/` — ไลบรารี CSS/JavaScript, ฟอนต์ และไฟล์ประกอบที่ใช้โดย template
- `assets/img/` — รูปภาพและไอคอนของ template

## ข้อควรทราบ

- `login.html` และ `signup.html` เป็นเพียงตัวอย่าง UI; ฟอร์มใช้ `action="#"` และไม่มี backend สำหรับเข้าสู่ระบบหรือสร้างบัญชี
- Dashboard, reports, charts และ FAQ มีข้อมูลตัวอย่าง ควรแทนที่ด้วยข้อมูลและกฎธุรกิจของแอปพลิเคชันก่อนใช้งานจริง
- ลิงก์ตัวอย่างบางจุดใช้ `javascript:;` และหน้า Dashboard ยังมีลิงก์ข่าวไป eGrappler; เปลี่ยนหรือเชื่อมต่อให้ตรงกับแอปพลิเคชันก่อนใช้งานจริง
- ชุดไฟล์นี้ไม่มี `LICENSE` ระบุสิทธิ์การใช้งาน โปรดตรวจสอบเงื่อนไขจากเจ้าของต้นฉบับก่อนนำไปเผยแพร่หรือใช้ต่อ

## แหล่งที่มา

- **Source:** [eGrappler](https://egrappler.com)
- **Clone:** [concours.enspd-udo.cm/mjr](https://concours.enspd-udo.cm/mjr)
