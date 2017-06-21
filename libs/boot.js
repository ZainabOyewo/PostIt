module.exports = app => {
	app.db.sequelize.sync().done(() => {
app.listen(app.get("port"), () => {
console.log(`POST IT - Port ${app.get("port")}`);
});

});
};
