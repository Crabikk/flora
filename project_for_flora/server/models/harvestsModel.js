const {DataTypes, NOW} = require('sequelize')
const db = require('../db')
const PlantsModel = require('./plantsModel')

// Модель Harvest_Info
const HarvestModel = db.define('harvest_info', {
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
    harvest_time: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    harvest_method: {
        type: DataTypes.STRING(100)
    },
    notes: {
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
    tableName: 'harvest_info',
    timestamps: false
});

module.exports = HarvestModel