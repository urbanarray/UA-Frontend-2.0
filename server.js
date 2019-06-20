const express = require('express');
const bodyParser = require('body-parser');
require('dotenv/config');

const routes = require('./routes');
const { models, sequelize } = require('./models');

const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// custom middleware to get the authenticated user
app.use(async (req, res, next) => {
  req.context = {
    models,
    me: await models.User.findByLogin('hwerman'),
  };
  next();
});

// serve up static assets (for heroku or production env)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

// add routes for api and views
app.use(routes);

// Connect to DB - want to use postgres

const eraseDatabaseOnSync = true;
const createUsers = async () => {
  await models.User.create(
    {
      username: 'hwerman',
    },
  );

  await models.User.create(
    {
      username: 'tstraetmans',
    },
  );

  await models.User.create(
    {
      username: 'mdavis',
    },
  );
};

sequelize.sync({ force: eraseDatabaseOnSync }).then(() => {
  if (eraseDatabaseOnSync) {
    createUsers();
  }
  app.listen(PORT, () => {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
  });
});
