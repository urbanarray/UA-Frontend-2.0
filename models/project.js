const project = (sequelize, DataTypes) => {
  const Project = sequelize.define('project', {
    name: DataTypes.STRING,
  });

  // projects have many users
//   Project.associate = (models) => {
//     Project.belongsToMany(models.User);
//   };

  return Project;
};

module.exports = project;
