const router = require('express').Router();

// get the pseudo-authenticated user
router.get('/', async (req, res) => {
  const user = await req.context.models.User.findByPk(
    req.context.me.id,
  );
  return res.send(user);
});

module.exports = router;
