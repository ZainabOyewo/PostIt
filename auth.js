import passport from "passport";
import {Strategy, ExtractJwt} from "passport-jwt";

 module.exports = app => {
 const user = app.db.models.user;
 const cfg = app.libs.config;
 const params = {
 secretOrKey: cfg.jwtSecret,
 jwtFromRequest: ExtractJwt.fromAuthHeader()
};
 const strategy = new Strategy(params, (payload, done) => {
 user.findById(payload.id)


 .then(user => {
 if (user) {
 return done(null, {
 id: user.id,
 Email: user.Email
 });
 }
 return done(null, false);
 })
 .catch(error => done(error, null));
 });
 passport.use(strategy);
 return {
 initialize: () => {
 return passport.initialize();
 },
 authenticate: () => {
 return passport.authenticate("jwt", cfg.jwtSession);
 }
 };
 };