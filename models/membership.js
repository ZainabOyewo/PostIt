module.exports = (sequelize, DataTypes) => {
  const memberships = sequelize.define('memberships', {
    status: {
      type: DataTypes.STRING
    },
  }, {
    classMethods: {
      associate: (models) => {
        // associations can be defined here
        user.hasMany(models.groups, {
          foreignKey: 'id',
          as: 'groupid',
          onDelete: 'CASCADE',
        });

        user.hasMany(models.users, {
          foreignKey: 'id',
          as: 'userid',
          onDelete: 'CASCADE',
        });
      
      },
    },
  });
  return memberships;
};