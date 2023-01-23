const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('ALL SHELTERS')
})
router.post('/:id', (req, res) => {
    res.send('CREATING SHELTERS')
})
router.get('/:id/edit', (req, res) => {
    res.send('EDIT ON SHELTERS')
})
router.get('/:id/dogs', (req, res) => {
    res.send('VIEWING DOG SHELTERS')
})

module.exports = router; 