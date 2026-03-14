const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/temp/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)); // Unique filename
  },
});

const fileFilter = (req, file, cb) => {
  const allowedTypes = /jpeg|jpg|png/; // Accept only JPG and PNG

  const isValid = allowedTypes.test(
    path.extname(file.originalname).toLowerCase()
  );
  const isMimeTypeValid = allowedTypes.test(file.mimetype);

  if (isValid && isMimeTypeValid) {
    cb(null, true);
  } else {
    cb(new Error("Invalid file type. Only JPG and PNG are allowed."), false);
  }
};

const upload = multer({
  storage,
  fileFilter,
});

module.exports = upload;
