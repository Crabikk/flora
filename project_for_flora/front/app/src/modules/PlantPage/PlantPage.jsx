import { useNavigate, useParams } from "react-router-dom";
import { deletePlant, getPlantsQuery } from "../../api/plantsApi/plantsApi";
import { useEffect, useState } from "react";
import css from './PlantPage.module.css'
import { Button } from "antd";
import UpdatePlantForm from "../FormModal/UpdatePlantForm";


const PlantPage = () => {
    const { id } = useParams()
    const [plants, setPlants] = useState([]);
    const [visible, setVisible] = useState(false);
    const navigate = useNavigate();



    const getPlants = async () => {
        try {
            const data = await getPlantsQuery();
            setPlants(data);
        } catch (error) {
            console.error("Ошибка при получении данных о растениях:", error);
        }
    };

    useEffect(() => {
        getPlants();
    }, []);

    const selectedPlant = plants.length && plants.find(item => item.id === id)

    const handleDelete = async () => {
        try {
            await deletePlant(id);
            navigate("/");
        } catch (error) {
            console.error("Ошибка при удалении растения:", error);
        }
    };

    const handleUpdate = () => {
        getPlants();
        setVisible(false);
    };

    return (
        <div className={css.centeredContainer}>
            <h1>{selectedPlant.plant_name}</h1>
            <h2>Класс: {selectedPlant.family}</h2>
            <h3>Научное название: {selectedPlant.scientific_name}</h3>
            <h3>Тип: {selectedPlant.type}</h3>
            <p>Описание</p>
            <p>{selectedPlant.description}</p>
            <div className={css.buttonContainer}>
                <Button color="danger" variant="solid" onClick={handleDelete}>
                    Удалить растение
                </Button>
                <Button color="primary" variant="solid" onClick={() => setVisible(true)}>
                    Обновить растение
                </Button>
            </div>


            <UpdatePlantForm
                visible={visible}
                setVisible={setVisible}
                plant={selectedPlant}
                onUpdate={handleUpdate}
            />
        </div>
    );
};

export default PlantPage;