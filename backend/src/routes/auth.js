const express = require('express');
const router = express.Router();

// POST /api/auth/register  — create a student account (TODO: Week 3-4)
// POST /api/auth/login     — log in and return a JWT token (TODO: Week 3-4)
router.post('/register', (req, res) => res.status(501).json({ message: 'Not implemented yet' }));
router.post('/login', (req, res) => res.status(501).json({ message: 'Not implemented yet' }));

module.exports = router;
