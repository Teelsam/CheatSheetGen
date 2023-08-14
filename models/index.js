// Import the model classes.
const User = require('./User');
const HTML = require('./HTML');
const Javascript = require('./Javascript');
const CSS = require('./CSS');

// Define associations between the models.
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
    foreignKey: 'User_id'
});

User.hasMany(CSS, {
    foreignKey: 'User_id'
});
CSS.belongsTo(User, {
    foreignKey: 'User_id'
});

// Export the associated models.
module.exports = { User, HTML, Javascript, CSS };
