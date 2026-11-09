const express = require('express');
const auth = require('../middleware/auth');
const router = express.Router();

// GET /api/progress  — dashboard: total quizzes, average score, weak topics (TODO: Week 9-10)
router.get('/', auth, (req, res) => res.status(501).json({ message: 'Not implemented yet' }));

module.exports = router;
