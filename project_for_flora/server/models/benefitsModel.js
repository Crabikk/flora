const {DataTypes, NOW} = require('sequelize')
const db = require('../db')
const PlantsModel = require('./plantsModel')

/*
// Model for the "Users" table
const UsersModel = db.define('users', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    registration_date: {
        type: DataTypes.DATE,
        defaultValue: NOW
    }
});
*/

// Модель Benefits
const BenefitsModel = db.define('benefits', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    plant_id: {
        type: DataTypes.UUID,
        references: {
            model: PlantsModel,
            key: 'ID'
        }
    },
    benefit_type: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false
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
    tableName: 'benefits',
    timestamps: false
});

module.exports = BenefitsModel