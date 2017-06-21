import bcrypt from "bcrypt-nodejs";
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
   
      hooks: {
      beforeCreate: users => {
      const salt = bcrypt.genSaltSync();
     users.UserPassword = bcrypt.hashSync(users.UserPassword, salt);
     }
     },
      classMethods: {
		 associate: (models) => {
		 users.belongsTo(models.membership);
		 users.belongsTo(models.message);
		 },
		 
     isPassword: (encodedPassword, password) => {
    return bcrypt.compareSync(password, encodedPassword);
     }
   }
  });
  return users;
};