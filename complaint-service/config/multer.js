import multer from "multer";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype !== "text/csv") {
    cb(new Error("Only CSV files are allowed"));
  } else {
    cb(null, true);
  }
};

const limits = {
  fileSize: 10 * 1024 * 1024, // 10 MB
};

const upload = multer({
  storage,
  fileFilter,
  limits,
});

export default upload;
