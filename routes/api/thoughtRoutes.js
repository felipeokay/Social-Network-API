const router = require('express').Router();

const {
    getSingleThought,
    getThoughts,
    createThought,
    updateThought,
    deleteThought,
    createReaction,
    deleteReaction,
} = require('../..controllers/thoughtController');

// Define the routes for..
// GET && POST all thoughts
router.route('/').get(getThoughts).post(createThought);

// GET, PUT && DELETE thoughts
router.route('/:thoughtId').get(getSingleThought).put(updateThought).delete(deleteThought);

// POST reaction to a thought
router.route('/:thoughtId/reactions').post(createReaction);

// DELETE reaction to a thought
router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction);

module.exports = router;