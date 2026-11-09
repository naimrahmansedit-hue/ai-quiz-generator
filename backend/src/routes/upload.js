const express = require('express');
const multer = require('multer');
const auth = require('../middleware/auth');
const router = express.Router();
const upload = multer({ dest: 'uploads/' });

// POST /api/upload  — upload a PDF, extract text, make a summary (TODO: Week 5-6)
router.post('/', auth, upload.single('pdf'), (req, res) => {
  res.status(501).json({ message: 'Not implemented yet' });
});

module.exports = router;
