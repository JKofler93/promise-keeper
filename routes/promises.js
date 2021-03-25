const express = require('express');
const router = express.Router();

// @route   Get    api/promises
// @desc    Get all users promises
// @access  Private
router.get('/', (req, res) => {
    res.send('Get all promises')
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