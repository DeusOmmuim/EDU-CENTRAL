import express from "express";
import path from "path";

const router = express.Router();
const __dirname = path.resolve();

router.get("/search", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "uv.html"));
});

export default router;
