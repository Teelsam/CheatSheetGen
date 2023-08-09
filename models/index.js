const User = require('./User');
const HTML = require('./HTML');
const Javascript = require('./Javascript');
const CSS = require('./CSS');

User.hasMany(HTML, {
    foreignKey: 'User_id'
});
HTML.belongsTo(User, {
    foreignKey: 'User_id'
});
User.hasMany(Javascript, {
    foreignKey: 'User_id'
});
Javascript.belongsTo(User, {
    foreignKey: "User_id"
});
User.hasMany(CSS, {
    foreignKey: 'User_id'
});
CSS.belongsTo(User, {
    foreignKey: 'User_id'
});


module.exports = { User, HTML, Javascript, CSS };