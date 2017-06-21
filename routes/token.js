import jwt from "jwt-simple";
 
  module.exports = app => {
  const cfg = app.libs.config;
  const users = app.db.models.users;

  app.route("api/user/login")
  app.post("api/user/login", (req, res) => {
  if (req.body.Email && req.body.UserPassword) {
  const Email = req.body.Email;
  const UserPassword = req.body.UserPassword;
 
 users.findOne({where: {Email: Email}})
 .then(user => {
 if (user.isPassword(user.UserPassword, UserPassword)) {
 const payload = {id: user.id};
 res.json({
 token: jwt.encode(payload, cfg.jwtSecret)
 });
 } else {
 res.sendStatus(401);
 }
 })
 .catch(error => res.sendStatus(401));
 } else {
 res.sendStatus(401);
 }
 });
 };