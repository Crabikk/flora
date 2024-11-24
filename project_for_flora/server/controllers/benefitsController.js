const BenefitsModel = require("../models/benefitsModel")
const { v4: uuidv4 } = require('uuid');

class BenefitsController {

    getAllBenefits(req, res) {
        BenefitsModel.findAll() 
            .then(benefits => {
                res.json(benefits)
            })
    }

    async createBenefit(req, res) {
        const { plant_id, benefit_type, description} = req.body;
        const id = uuidv4();
    
        try {
          const existingBenefit = await BenefitsModel.findOne({ where: { plant_id } });
    
          if (existingBenefit) {
            return res.status(400).json({ message: "Такие полезные свойства уже есть" });
          }
    
          await BenefitsModel.create({ id, plant_id, benefit_type, description });
    
          res.json({ message: "Полезные свойства успешно добавлены" });
        } catch (err) {
          console.log(err);
          res.status(500).json({ message: "Не удалось добавить полезные свойства" });
        }
      }

    deleteBenefit(req, res) {
        const {id} = req.body
        BenefitsModel.destroy({
            where: {id} 
        })
            .then(benefits => {
                console.log(benefits)
                if(benefits===0){
                    res.send({message: "Такие полезные свойства не найдены"}).status(400)
                }
                else {
                    res.json({message: "Полезные свойства успешно удалены"})
                }
            })
            .catch(err => {
                console.log(err)
                res.json({message: "Не удалось удалить полезные свойства"}).status(400)
            })
    }

    updateBenefit(req, res) {
        const { id, plant_id, benefit_type, description } = req.body;
    
        // Проверяем, что хотя бы один параметр для обновления присутствует
        if (!benefit_type && !description) {
            return res.status(400).json({ message: "Обновите хотя бы один параметр" });
        }
    
        BenefitsModel.update(
            { plant_id, benefit_type, description },
            { where: { id } }
        )
        .then(([updatedCount]) => { 
            if (updatedCount === 0) {
                return res.status(404).json({ message: "Такие полезные свойства не найдены" });
            } else {
                return res.json({ message: "Полезные свойства успешно обновлены" });
            }
        })
        .catch(err => {
            console.error(err);
            return res.status(500).json({ message: "Ошибка при обновлении полезных свойств" });
        });
    }
    
}


module.exports = new BenefitsController