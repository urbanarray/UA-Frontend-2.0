const router = require('express').Router();
const models = require('../../models');

// custom middleware
router.use((req, res, next) => {
    req.context = {
        models,
        me: models.users[1]
    }
    next();
})

// get all the users
router.get('/', (req, res) => {
    return res.send(Object.values(req.context.models.users))
})

// get one user
router.get('/:id', (req, res) => {
    return res.send(req.context.models.users[req.params.userId])
})

// create a new user
router.post('/', (req, res) => {
    return res.send('Create a new user')
})

// update a user
router.put('/:id', (req, res) => {
    return res.send('Update a user')
})

// delete a user
router.delete('/:id', (req, res) => {
    return res.send('Delete a user')
})

module.exports = router