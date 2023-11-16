// Router instance
const router = require('express').Router();

const userRoutes = require('./userRoutes');
const thoughtRoutes = require('./thoughtRoutes');

// Endpoints for user and though routes
router.use('./user', userRoutes);
router.use('./thought', thoughtRoutes);

module.exports = router;