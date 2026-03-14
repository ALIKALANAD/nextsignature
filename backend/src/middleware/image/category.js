const multer = require('multer');
const path = require('path');
const crypto = require('crypto');
const sharp = require('sharp');
const fs = require('fs');


// Define the storage configuration for multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Directory to save uploaded files
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    const filename = `${crypto.randomBytes(16).toString('hex')}-${Date.now()}${ext}`;
    cb(null, filename);
  }
});

// File filter to allow only image uploads
const fileFilter = (req, file, cb) => {
  const fileTypes = /jpeg|jpg|png/;
  const extname = fileTypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = fileTypes.test(file.mimetype);

  if (mimetype && extname) {
    return cb(null, true);
  } else {
    cb(new Error('Only images are allowed'));
  }
};

// Initialize multer with the defined storage, file filter, and size limits
const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: { fileSize: 5 * 1024 * 1024 } // Limit file size to 5MB
});

// Middleware to resize images
const resizeImage = async (req, res, next) => {
  if (!req.files || req.files.length === 0) {
    return next(); // Skip if no files uploaded
  }

  try {
    req.body.images = [];
    req.body.thumbnails = [];

    await Promise.all(
      req.files.map(async (file) => {
        const imageFilename = `${crypto.randomBytes(8).toString('hex')}-${Date.now()}${path.extname(file.originalname)}`;
        const imagePath = path.join('uploads/images/tickets/', imageFilename);
        const thumbnailFilename = `images/tickets/thumbnail-${imageFilename}`;
        const thumbnailPath = path.join('uploads', thumbnailFilename);

        // Resize and save the image
        await sharp(file.path)
          .resize(800, 800)
          .toFile(imagePath);

        // Resize and save the thumbnail
        await sharp(file.path)
          .resize(200, 200)
          .toFile(thumbnailPath);

        // Remove the original file after processing
        fs.unlinkSync(file.path);

        req.body.images.push(imagePath);
        req.body.thumbnails.push(thumbnailPath);
      })
    );

    next();
  } catch (error) {
    return res.status(500).json({ message: 'Error processing images', error });
  }
};


module.exports = { upload, resizeImage };
