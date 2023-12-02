const express = require('express');
const tweetController = require('../controllers/tweetController');

const router = express.Router();

//all tweets
router.get('/', tweetController.getAllTweets);

//to create a new tweet
router.post('/', tweetController.createTweet);

//to delete a tweet by ID
router.delete('/:id', tweetController.deleteTweet);

//to update a tweet by ID
router.patch('/:id', tweetController.updateTweet);

module.exports = router;
