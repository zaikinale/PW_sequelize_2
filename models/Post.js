const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const Post = sequelize.define('Post', {
        title: { 
            type: DataTypes.STRING, 
            allowNull: false 
        },
        content: { 
            type: DataTypes.TEXT, 
        allowNull: false 
        },  
        publishedAt: { 
            type: DataTypes.DATE, 
            allowNull: true 
        },
        }, {
            tableName: 'post',
            timestamps: true,
        }
    );

module.exports = Post;