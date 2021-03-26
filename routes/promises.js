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
router.post('/', [ auth, [
    check('content', 'Content is required').not().isEmpty()
    ]
], 
async (req, res) => {
    const errors = validationResult(req); 
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }
    // grab what we want
    const { content, completed, date } = req.body;

    try {
        const newPromise = new Promise({ 
            content,
            completed,
            date,
            user: req.user.id
        });

        const promise = await newPromise.save();

        res.json(promise);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @route   PUT    api/promises/:id
// @desc    Edit promises
// @access  Private
router.put('/:id', auth, async (req, res) => {
    // grab what we want
    const { content, completed } = req.body;

    // Make a promise Object to see if fields are submitted
    const promiseFields = {};
    if(content) promiseFields.content = content;
    if(completed) promiseFields.completed = completed;
    
    try {
        // req has a params, the parameters we want to find is ID
        let promise = await Promise.findById(req.params.id);
        // Check if the promise exists 
        if(!promise) return res.status(404).json({ msg: 'Promise not found'});
        // Check promise belongs to user
        if(promise.user.toString() !== req.user.id) {
            return res.status(401).json({ msg: 'Not authorized'})
        }

        // .findByIdAndUpdate takes 3 parameters the promiseId
        promise = await Promise.findByIdAndUpdate(req.params.id, 
            // Set the promiseFields
            { $set: promiseFields },
            // If promise doesn't exist, create it
            { new: true });
        
            res.json(promise);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @route   DELETE    api/promises/:id
// @desc    Delete promises
// @access  Private
router.delete('/:id', auth, async (req, res) => {
    try {
        let promise = await Promise.findById(req.params.id);
 
        if(!promise) return res.status(404).json({ msg: 'Promise not found'});
 
        if(promise.user.toString() !== req.user.id) {
         return res.status(401).json({ msg: 'Not authorized'})
        }
 
        await Promise.findByIdAndRemove(req.params.id);
 
         res.json({ msg: 'Promise Removed'});
    } catch (err) {
     console.error(err.message);
     res.status(500).send('Server Error');
    }
});

module.exports = router;