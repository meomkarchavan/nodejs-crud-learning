const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

//to get all users
router.get('/', userController.getAllUsers);

//to get a user by ID
router.get('/:id', userController.getUserById);

//to create a new user
router.post('/', userController.createUser);

//to update a user by ID
router.patch('/:id', userController.updateUser);

//to delete a user by ID
router.delete('/:id', userController.deleteUser);

module.exports = router;
