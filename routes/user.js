module.exports = app => {
 const users = app.db.models.user;

app.get("/users/login", (req, res) => {
  Users.findById(req.params.id, {
  attributes: ["id", "name", "email"]
  })
  .then(result => res.json(result))
  .catch(error => {
 res.status(412).json({msg: error.message});
 });
 });

 

 app.post("/users/signup", (req, res) => {
 Users.create(req.body)
 .then(result => res.json(result))
 .catch(error => {CRUDify API resources 45
 res.status(412).json({msg: error.message});
 });
 });



};