const router = require('express').Router();
const uuidv4 = require('uuid/v4');

let users = {
    1: {
        id: '1',
        username: 'Robin Wieruch',
    }, 
    2: {
        id: '2',
        username: 'Hannah Werman',
    },
};

let messages = {
    1: {
        id: '1',
        text: 'Hello World',
        userId: '1',
    },
    2: {
        id: '2',
        text: 'Bye World',
        userId: '2',
    },
}

// custom middleware
router.use((req, res, next) => {
    req.me = users[1];
    next();
})

// get all the users
router.get('/', (req, res) => {
    return res.send(Object.values(users))
})

// get one user
router.get('/:id', (req, res) => {
    return res.send(users[req.params.userId])
})

// get all the messages
router.get('/messages', (req, res) => {
    return res.send(Object.values(messages));
})

// get one message 
router.get('/messages/:messageId', (req, res) => {
    return res.send(messages[req.params.messageId]);
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
        userId: req.me.id
    }

    messages[id] = message
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
    return res.send(users[req.me.id]);
})

module.exports = router