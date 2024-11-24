const HarvestsModel = require("../models/harvestsModel")
const { v4: uuidv4 } = require('uuid');
class HarvestController {

    getAllHarvests(req, res) {
        HarvestsModel.findAll() 
            .then(harvests => {
                res.json(harvests)
            })
    }

    async createHarvest(req, res) {
        const {plant_id, harvest_time, harvest_method, notes } = req.body;
        const id = uuidv4();
    
        try {
          const existingHarvest = await HarvestsModel.findOne({ where: { plant_id } });
    
          if (existingHarvest) {
            return res.status(400).json({ message: "Такой урожай уже есть" });
          }
    
          await HarvestsModel.create({ id, plant_id, harvest_time, harvest_method, notes });
    
          res.json({ message: "Урожай успешно добавлено" });
        } catch (err) {
          console.log(err);
          res.status(500).json({ message: "Не удалось добавить урожай" });
        }
      }

    deleteHarvest(req, res) {
        const {id} = req.body
        HarvestsModel.destroy({
            where: {id} 
        })
            .then(harvests => {
                console.log(harvests)
                if(harvests===0){
                    res.send({message: "Такой урожай не найдено"}).status(400)
                }
                else {
                    res.json({message: "Урожай успешно удален"})
                }
            })
            .catch(err => {
                console.log(err)
                res.json({message: "Не удалось удалить урожай"}).status(400)
            })
    }

    updateHarvest(req, res) {
        const {id, plant_id, harvest_time, harvest_method, notes} = req.body
        if(!plant_id || !harvest_time || !harvest_method || !notes){
            return res.status(400).json({message: "Обновите хотя бы один параметр"})
        }
        HarvestsModel.update(
            {plant_id, harvest_time, harvest_method, notes},
            {where: {id}}
        )
        .then(([updatedCount]) => { 
            if (updatedCount === 0) {
                return res.status(404).json({ message: "Такое наблюдение не найдено" });
            } else {
                return res.json({ message: "Наблюдение успешно обновлено" });
            }
        })
            .catch(err => {
                console.log(err)
                res.json({message: "Наблюдение не найдено"}).status(400)
            })
    }
}

module.exports = new HarvestController