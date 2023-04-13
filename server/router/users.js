const express = require('express');
const Users = express.Router();

const { User } = require('../db/models');

Users.get('/', async (req, res) => {
    const allUsers = await User.findAll();
    res.json(allUsers);
})

Users.post('/', async (req, res) => {
    const { firstName, lastName, email, username, password } = req.body;
    const addNewUser = await User.create({
        firstName, lastName, email, username, password
    })
    const allUsers = await User.findAll();
    res.json({ allUsers, addNewUser });
})
Users.delete('/:userId', async (req, res) => {
    console.log('delete');
    const deletedUser = await User.findByPk(req.params.userId)

    if (deletedUser) {
        deletedUser.destroy();

        const allUsers = await User.findAll();
        return res.json({ allUsers, deletedUser });

    } else {
        res.status(400).json({
            message: `There is no user with the id ${req.params.userId}`
        })
    }
})

module.exports = Users;
