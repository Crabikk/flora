const {DataTypes, NOW} = require('sequelize')
const db = require('../db')
/*
// Model for the "Plants" table
const PlantsModel = db.define('plants', {
    id: {
        type: DataTypes.STRING,
        primaryKey: true
    },
    plant_name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    scientific_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    type: {
        type: DataTypes.STRING,
        allowNull: false
    },
    family: {
        type: DataTypes.STRING
    },
    description: {
        type: DataTypes.TEXT
    },
    date_added: {
        type: DataTypes.DATE,
        defaultValue: NOW
    }
});
*/

// Модель Plants
const PlantsModel = db.define('plants', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    plant_name: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true
    },
    scientific_name: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    type: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    family: {
        type: DataTypes.STRING(50)
    },
    description: {
        type: DataTypes.TEXT
    },
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: NOW
    },
    updatedAt: {
        type: DataTypes.DATE,
        defaultValue: NOW
    }
}, {
    tableName: 'plants'
});

module.exports = PlantsModel







