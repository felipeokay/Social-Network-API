const router = require('express').Router();

const {
    getSingleUser,
    getUsers,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend
} = require('../../controllers/userController');

// GET && POST all users
router.route('/').get(getUsers).post(createUser);

// GET, PUT (update), DELETE user id
router.route('/:userId').get(getSingleUser).put(updateUser).delete(deleteUser);

// POST (add) && DELETE (remove) friend 
router.route('/:userId/friends/:friendId').post(addFriend).delete(deleteFriend);

module.exports = router;