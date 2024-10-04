const express = require('express');
const router = express.Router();
const Todo = require('../models/Todo');

router.post('/create', async (req, res) => {
    const { title, description, completionDate } = req.body;

    // Validate input
    if (!title || !description || !completionDate) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    try {
        const newTodo = new Todo({
            title,
            description,
            completionDate,
            user: 'user'
        });
        await newTodo.save();
        res.status(201).json({ message: 'To-do created successfully' });
    } catch (error) {
        console.error('Error creating to-do:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;
