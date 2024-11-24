const HabitatsModel = require("../models/habitatsModel")
const PlantsModel = require("../models/plantsModel")
const BenefitsModel = require("../models/benefitsModel")
const plantHabitatsModel = require("../models/plantHabitatsModel")
const growingConditionsModel = require("../models/growingConditionsModel")
//const growingConditionsModel = require("../models/HarvestModel")


// Определение связей между моделями
PlantsModel.hasMany(plantHabitatsModel, { foreignKey: 'plant_id' });
plantHabitatsModel.belongsTo(PlantsModel, { foreignKey: 'plant_id' });

HabitatsModel.hasMany(plantHabitatsModel, { foreignKey: 'habitat_id' });
plantHabitatsModel.belongsTo(HabitatsModel, { foreignKey: 'habitat_id' });

PlantsModel.hasMany(growingConditionsModel, { foreignKey: 'plant_id' });
growingConditionsModel.belongsTo(PlantsModel, { foreignKey: 'plant_id' });

PlantsModel.hasMany(BenefitsModel, { foreignKey: 'plant_id' });
BenefitsModel.belongsTo(PlantsModel, { foreignKey: 'plant_id' });

//PlantsModel.hasMany(Harvest_Info, { foreignKey: 'plant_id' });
//Harvest_Info.belongsTo(PlantsModel, { foreignKey: 'plant_id' });

module.exports = {
    PlantsModel,
    HabitatsModel,
    plantHabitatsModel,
    growingConditionsModel,
    BenefitsModel
    //Harvest_Info
};