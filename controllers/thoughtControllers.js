const { Thought } = require("../models");

module.exports = {

    getThoughts(req, res) {
        Thought.find({})
            .then((thought) => res.json(thought))
            .catch((err) => res.status(500).json(err));
    },
    getSingleThought(req, res) {
        Thought.findById(req.params.thoughtId)
            .then((thought) => res.json(thought))
            .catch((err) => res.status(500).json(err));
    },
    createThought(req, res) {
        Thought.create(req.body)
            .then((thought) => {
                res.json(thought)
            })
            .catch((err) => res.status(500).json(err));
    },
    updateThought(req, res) {
        Thought.findByIdAndUpdate(req.params.thoughtId, { $set: req.body }, { new: true })
            .then((thought) => res.json(thought))
            .catch((err) => res.status(500).json(err));
    },
    deleteThought(req, res) {
        Thought.findByIdAndDelete(req.params.thoughtId)
            .then((thought) => res.json(thought))
            .catch((err) => res.status(500).json(err));
    },
    createReaction(req, res) {
        Thought.findByIdAndUpdate(req.params.thoughtId, { $addToSet: { reactions: req.body } }, { new: true })
            .then((thought) => res.json(thought))
            .catch((err) => res.status(500).json(err));
    },
    deleteReaction(req, res) {
        Thought.findByIdAndUpdate(req.params.thoughtId, { $pull: { reactions: { reactionId: req.params.reactionId } } }, { new: true })
            .then((thought) => res.json(thought))
            .catch((err) => res.status(500).json(err));
    }

}