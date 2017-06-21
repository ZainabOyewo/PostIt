module.exports = app => {
 const users = app.db.models.user;

 app.route("api/user/signup")
 app.post("api/user/signup", (req, res) => {
 users.create(req.body)
 .then(result => res.json(result))
 .catch(error => {CRUDify API resources 45
 res.status(412).json({msg: error.message});
 });
 });



};