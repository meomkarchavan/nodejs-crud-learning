const { Tweet } = require('../models');

//to get all tweets
exports.getAllTweets = async (req, res) => {
  try {
    const tweets = await Tweet.findAll();
    res.json(tweets);
  } catch (error) {
    res.json({ message: error.message });
  }
};

//to create a new tweet
exports.createTweet = async (req, res) => {
  const { content, user } = req.body;
  try {
    const savedTweet = await Tweet.create({ content, user });
    res.json(savedTweet);
  } catch (error) {
    res.json({ message: error.message });
  }
};

//to delete a tweet by ID
exports.deleteTweet = async (req, res) => {
  const tweetId = req.params.id;
  try {
    await Tweet.destroy({ where: { id: tweetId } });
    res.json({ message: 'Tweet deleted successfully' });
  } catch (error) {
    res.json({ message: error.message });
  }
};

//to update a tweet by ID
exports.updateTweet = async (req, res) => {
  const tweetId = req.params.id;
  const { content } = req.body;
  try {
    const [updatedRows] = await Tweet.update({ content }, { where: { id: tweetId } });
    if (updatedRows > 0) {
      res.json({ message: 'Tweet updated successfully' });
    } else {
      res.json({ message: 'Tweet not found' });
    }
  } catch (error) {
    res.json({ message: error.message });
  }
};
