const router = require('express').Router();

// get all the users
router.get('/', (req, res) => {
    return res.send('Get all the users')
})

// get one user
router.get('/:id', (req, res) => {
    return res.send('Get one user')
})

// create a new user
router.post('/', (req, res) => {
    return res.send('Create a new user')
})

// update a user
router.put('/:id', (req, res) => {
    return res.send('Update a user')
})

router.delete('/:id', (req, res) => {
    return res.send('Delete a user')
})

module.exports = router