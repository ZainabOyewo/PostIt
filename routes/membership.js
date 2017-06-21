module.exports = app => {
 const memberships = app.db.models.membership;

 app.route("/api/group/:groupid/user")
 .all(app.auth.authenticate())
 app.post("/api/group/:groupid/user", (req, res) => {
memberships.create({status:req.body.status , groupid:req.params.id, userid: app.auth.user.id})
 .then(result => res.json(result))
 .catch(error => {CRUDify API resources 45
 res.status(412).json({msg: error.message});
 });
 });
};