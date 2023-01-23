const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('ALL DOGS')
})
router.post('//:id', (req, res) => {
    res.send('CREATING DOGS')
})
router.get('//:id/edit', (req, res) => {
    res.send('EDIT ON DOGS')
})
router.get('//:id/dogs', (req, res) => {
    res.send('VIEWING DOGS')
})

module.exports = router; 