const express = require("express");
const app = express();
app.use(express.json());
// route ทดสอบ
app.get("/", (req, res) => {
  res.send("manbag.com backend is running");
});
// ตัวอย่าง route สำหรับ Stripe (ไว้ปรับเพิ่มทีหลังได้)
app.post("/webhook", (req, res) => {
  // handle stripe webhook ที่นี่
  res.status(200).send("ok");
});
// สำคัญ: export app แทนการ listen เอง
module.exports = app;
app.get("/", (req, res) => {
  res.send("manbag.com backend is running");
});
