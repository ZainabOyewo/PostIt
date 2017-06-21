module.exports = app => {
 const memberships = app.db.models.membership;
 app.get("/memberships", (req, res) => {
memberships.findAll({}).then(memberships => {
res.json({memberships: memberships});
});
});
};