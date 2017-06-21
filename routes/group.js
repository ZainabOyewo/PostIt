module.exports = app => {
 const groups = app.db.models.group;
 app.get("/groups", (req, res) => {
		groups.findAll({}).then(groups => {
		res.json({groups: groups});
		});
		});
};