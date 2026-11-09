const express = require('express');
const auth = require('../middleware/auth');
const router = express.Router();

// POST /api/quiz/generate  — generate MCQs from uploaded material (TODO: Week 7-8)
// GET  /api/quiz/:id       — get one quiz to answer
// POST /api/quiz/:id/submit — submit answers and get a score
router.post('/generate', auth, (req, res) => res.status(501).json({ message: 'Not implemented yet' }));
router.get('/:id', auth, (req, res) => res.status(501).json({ message: 'Not implemented yet' }));
router.post('/:id/submit', auth, (req, res) => res.status(501).json({ message: 'Not implemented yet' }));

module.exports = router;
