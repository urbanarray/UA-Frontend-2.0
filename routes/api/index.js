const router = require('express').Router();
const userRoutes = require('./users');
const sessionRoutes = require('./session');

router.use('/users', userRoutes);
router.use('/session', sessionRoutes);


module.exports = router