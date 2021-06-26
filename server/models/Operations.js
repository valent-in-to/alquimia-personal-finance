
const {Model, DataTypes} = require('sequelize');
const sequelize = require('../database')


class Operations extends Model {}

Operations.init({
    concept: { 
        type: DataTypes.STRING 
    },
    amount: { 
        type: DataTypes.NUMBER
    },
    type: {
        type: DataTypes.BOOLEAN
    }},{
        sequelize, modelName: 'operations'
    })

module.exports = Operations