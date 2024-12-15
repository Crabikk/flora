const {DataTypes, NOW} = require('sequelize')
const db = require('../db')
const PlantsModel = require('./plantsModel')

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