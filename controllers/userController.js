const { User } = require('../models');

//get all users
exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        res.json(users);
    } catch (error) {
        res.json({ message: error.message });
    }
};

//get a user by ID
exports.getUserById = async (req, res) => {
    const userId = req.params.id;
    try {
        const user = await User.findByPk(userId);
        if (user) {
            res.json(user);
        } else {
            res.json({ message: 'User not found' });
        }
    } catch (error) {
        res.json({ message: error.message });
    }
};

//create a new user
exports.createUser = async (req, res) => {
    const { username, email, password } = req.body;
    try {
        const createdUser = await User.create({ username, email, password });
        res.json(createdUser);
    } catch (error) {
        res.json({ message: error.message });
    }
};

//update a user by ID
exports.updateUser = async (req, res) => {
    const userId = req.params.id;
    const { username, email, password } = req.body;
    try {
        const [updatedRows] = await User.update({ username, email, password }, { where: { id: userId } });
        if (updatedRows > 0) {
            res.json({ message: 'User updated successfully' });
        } else {
            res.json({ message: 'User not found' });
        }
    } catch (error) {
        res.json({ message: error.message });
    }
};

//delete a user by ID
exports.deleteUser = async (req, res) => {
    const userId = req.params.id;
    try {
        await User.destroy({ where: { id: userId } });
        res.json({ message: 'User deleted successfully' });
    } catch (error) {
        res.json({ message: error.message });
    }
};
