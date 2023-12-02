const express = require('express');
const tweetRoutes = require('./tweetRoutes');
const userRoutes = require('./userRoutes');

const router = express.Router();

// Using tweet and user routes
router.use('/tweets', tweetRoutes);
router.use('/users', userRoutes);

module.exports = router;
