module.exports = app => {
 const messages = app.db.models.message;
 app.get("/messages", (req, res) => {
messages.findAll({}).then(messages => {
res.json({messages: messages});
});
});
};