const user = (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
    username: {
      type: DataTypes.STRING,
      unique: true,
    },
  });

  // user can belong to many projects
//   User.associate = (models) => {
//     User.belongsToMany(models.Project);
//   };

  // let the user log in either by username or by email address
  User.findbyLogin = async (login) => {
    let user = await User.findOne({
      where: { username: login },
    });

    if (!user) {
      user = await User.findOne({
        where: { email: login },
      });
    }

    return user;
  };

  return User;
};

module.exports = user;
