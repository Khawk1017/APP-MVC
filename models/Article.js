const {Model, DataTypes} = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection'); 

//  Statement defining a new class named "Articles" which extends the the Sequlaize 'Model' class
class  Articles extends Model {}

// The Articles.init() method initializes the Articles model with its attributes and options. In this case, the Articles model has four attributes: id, title, content, and user_id.

Articles.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        content: {
            type: DataTypes.TEXT('long'),
            allowNull: false,
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "user",
                key: "id",
            },
        },
    },
    {
        // The sequelize option specifies the Sequelize instance that the model is attached to.
        sequelize,
        // The freezeTableName option specifies that the table name should be the same as the model name.
        freezeTableName: true,
        // The underscored option specifies that the attribute names should use underscores instead of camelCase.
        underscored: true,
        // The modelName option specifies the name of the model.
        modelName: "article",
    }
);

module.exports = Articles;