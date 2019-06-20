const router = require('express').Router();
const uuidv4 = require('uuid/v4');
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

// get all the messages
router.get('/messages', (req, res) => {
    return res.send(Object.values(req.context.models.messages));
})

// get one message 
router.get('/messages/:messageId', (req, res) => {
    return res.send(req.context.models.messages[req.params.messageId]);
})

// create a new user
router.post('/', (req, res) => {
    return res.send('Create a new user')
})

// create a new message
router.post('/messages', (req, res) => {
    const id = uuidv4();
    const message = {
        id,
        text: req.body.text,
        userId: req.context.me.id
    }

    req.context.models.messages[id] = message
    return res.send(message)
})

// update a user
router.put('/:id', (req, res) => {
    return res.send('Update a user')
})

// delete a user
router.delete('/:id', (req, res) => {
    return res.send('Delete a user')
})

// delete a message
// router.delete('/messages/:messageId', (req, res) => {
//     const {
//         [req.params.messageId]: message,
//     } = messages;

//     messages = otherMessages;

//     return res.send(message);
// })

// get the pseudo-authenticated user
router.get('/session', (req, res) => {
    return res.send(req.context.models.users[req.me.id]);
})

module.exports = router