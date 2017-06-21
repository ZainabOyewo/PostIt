module.exports = (sequelize, DataTypes) => {
  const messages = sequelize.define('messages', {
    MessageTitle: {
      type: DataTypes.STRING,
    },
    MessageText: {
      type: DataTypes.TEXT
    },
  }, {
    classMethods: {
      associate: (models) => {
        // associations can be defined here
        user.belongsTo(models.groups, {
          foreignKey: 'id',
          as: 'groupid',
           onDelete: 'CASCADE',
        });

        user.belongsTo(models.users, {
          foreignKey: 'id',
          as: 'userid',
          onDelete: 'CASCADE',
        });
      },
    },
  });
  return messages;
};