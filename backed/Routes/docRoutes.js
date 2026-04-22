const express = require("express");
const router = express.Router();
const controller = require("../Controlls/docController");
const multer = require("multer");

const upload = multer({ dest: "uploads/" });

router.get("/", controller.getDocs);
router.post("/", controller.createDoc);
router.put("/:id", controller.updateDoc);
router.post("/share/:id", controller.shareDoc);
router.post("/upload", upload.single("file"), controller.uploadFile);

module.exports = router;