module.exports = app => {
 const groups = app.db.models.group;
app.route("/api/group")
 .all(app.auth.authenticate())
 app.post("/api/group", (req, res) => {
groups.create({GroupName:req.body.GroupName})
 .then(result => res.json(result))
 .catch(error => {CRUDify API resources 45
 res.status(412).json({msg: error.message});
 });
 });
};