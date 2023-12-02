const { Sequelize, DataTypes } = require('sequelize');

// Connecting to SQLite database using Sequelize
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'twitterClone.sqlite',
});

sequelize.sync()
    .then(() => {
        console.log('Database and table synchronized');
    })
    .catch((error) => {
        console.error('Error synchronizing database:', error);
    });

const Tweet = sequelize.define('Tweet', {
    content: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    user: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

const User = sequelize.define('User', {
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true,
        },
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});


module.exports = {
    Tweet,
    User
};
