const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { check, validationResult } = require('express-validator');

const User = require('../models/User');
const Promise = require('../models/Promise');


// @route   Get    api/promises
// @desc    Get all users promises
// @access  Private
router.get('/', auth, async (req, res) => {
    try {
        // Get promises with a connection to user
        // with auth we have access to req.user
        //Call .find() passing in, ({ user: req.user.id }) user matches
        const promises = await Promise.find({ user: req.user.id });
        // return promises 
        res.json(promises);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @route   POST    api/promises
// @desc    Add new promises
// @access  Private
router.post('/', (req, res) => {
    res.send('Add promises')
});

// @route   PUT    api/promises/:id
// @desc    Edit promises
// @access  Private
router.put('/:id', (req, res) => {
    res.send('Edit promises')
});

// @route   DELETE    api/promises/:id
// @desc    Delete promises
// @access  Private
router.delete('/:id', (req, res) => {
    res.send('Delete promises')
});

module.exports = router;