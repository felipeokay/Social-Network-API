// Router instance
const router = require('express').Router();

const userRoutes = require('./userRoutes');
const thoughtRoutes = require('./thoughtRoutes');

// Endpoints for user and though routes
router.use('./users', userRoutes);
router.use('./thoughts', thoughtRoutes);

module.exports = router;