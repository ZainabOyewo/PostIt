module.exports = (sequelize, DataTypes) => {
  const groups = sequelize.define('groups', {
    GroupName: {
     type:  DataTypes.STRING,
   },
   }, {
		 classMethods: {
		 associate: (models) => {
		 groups.belongsTo(models.membership);
		 	  
		 groups.belongsTo(models.message);
		 
		 }
		} 

  });
  return groups;
};