const { Sequelize } = require('sequelize')
const User = require('./User');
const Articles = require('./Articles');
const Pointers = require('./Pointers');

User.hasMany(Articles, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

User.hasMany(Pointers, {
  foreignKey: "user_id",
  onDelete: "CASCADE"
});

Articles.belongsTo(User, {
  foreignKey: 'user_id'
});

 Pointers.belongsTo(User, {
    foreignKey: "user_id"
 })

module.exports = { User, Articles, Pointers };
