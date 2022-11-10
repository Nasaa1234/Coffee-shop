const express = require("express");

const uploadRouter = express.Router();

uploadRouter.post("/upload", async (req, res) => {
  if (!req.files) {
    res.send("No file");
  }
  const file = req.files.file;
  const uploadDir = __dirname + "/uploads/" + file.name;

  file.mv(uploadDir, function (err) {
    if (err) res.status(400).send("Error");

    res.send({
      message: "Uploaded",
      fileUrl: file.name,
    });
  });
});

module.exports = uploadRouter;
