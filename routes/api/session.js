const router = require('express').Router();

// get the pseudo-authenticated user
router.get('/', (req, res) => {
    return res.send(req.context.models.users[req.me.id]);
})

module.exports = router;