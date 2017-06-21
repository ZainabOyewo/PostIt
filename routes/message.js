module.exports = app => {
 const messages = app.db.models.message;

 app.route("/api/group/:groupid/message")
 .all(app.auth.authenticate())
 app.post("/api/group/:groupid/message", (req, res) => {
messages.create({MessageTitle:req.body.MessageTitle , MessageText:req.body.MessageText , groupid:req.params.id, userid: app.auth.user.id})
 .then(result => res.json(result))
 .catch(error => {CRUDify API resources 45
 res.status(412).json({msg: error.message});
 });
 });
};