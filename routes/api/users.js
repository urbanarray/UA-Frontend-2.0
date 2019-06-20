const router = require('express').Router();

// get all the users
router.get('/', async (req, res) => {
  const users = await req.context.models.User.findAll();
  return res.send(users);
});

// get one user
router.get('/:id', async (req, res) => {
  const users = await req.context.models.User.findByPk(
    req.params.id,
  );
  return res.send(users);
});

// create a new user
router.post('/', async (req, res) => {
  const user = await req.context.models.User.create({
    name: req.body.name,
  });
  return res.send(user);
});

// update a user
// router.put('/:id', async (req, res) => {
//   const user = await req.context.models.User.update({
//     name: req.body.name,
//   });
//   return res.send(user);
// });

// delete a user
router.delete('/:id', async (req, res) => {
  await req.context.models.User.destroy({
    where: {
      id: req.params.id,
    },
  });
  return res.send(true);
});

module.exports = router;
