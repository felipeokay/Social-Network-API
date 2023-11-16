const { User } = require("../models");

module.exports = {

    getUsers(req, res) {
        User.find({})
            .then((user) => res.json(user))
            .catch((err) => res.status(500).json(err));
    },
    getSingleUser(req, res) {
        User.findById(req.params.userId).populate("thoughts").populate("friends")
            .then((user) => res.json(user))
            .catch((err) => res.status(500).json(err));
    },
    createUser(req, res) {
        User.create(req.body)
            .then((user) => res.json(user))
            .catch((err) => res.status(500).json(err));
    },
    updateUser(req, res) {
        User.findByIdAndUpdate(req.params.userId, { $set: req.body }, { new: true })
            .then((user) => res.json(user))
            .catch((err) => res.status(500).json(err));
    },
    deleteUser(req, res) {
        User.findByIdAndDelete(req.params.userId)
            .then((user) => res.json(user))
            .catch((err) => res.status(500).json(err));
    },
    addFriend(req, res) {
        User.findByIdAndUpdate(req.params.userId, { $addToSet: { friends: req.params.friendId } }, { new: true })
            .then((user) => res.json(user))
            .catch((err) => res.status(500).json(err));
    },
    deleteFriend(req, res) {
        User.findByIdAndUpdate(req.params.userId, { $pull: { friends: req.params.friendId } }, { new: true })
            .then((user) => res.json(user))
            .catch((err) => res.status(500).json(err));
    }

}