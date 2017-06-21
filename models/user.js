module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define('users', {
    FirstName: {
    type: DataTypes.STRING,
  },
    LastName: {
      type: DataTypes.STRING,
    },
    UserName: {
      type: DataTypes.STRING,
    },
    Email: {

    type: DataTypes.STRING,
  },
    UserPassword: {
      type: DataTypes.STRING
  },
}, {
   classMethods: {
		 associate: (models) => {
		 users.belongsTo(models.membership);
		 users.belongsTo(models.message);
		 }
		 }
  });
  return users;
};