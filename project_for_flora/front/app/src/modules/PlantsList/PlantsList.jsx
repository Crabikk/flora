import { useEffect, useState } from "react";
import css from "./PlantList.module.css";
import PlantItem from "./components/PlantItem/PlantItem";
import { getPlantsQuery } from "../../api/plantsApi/plantsApi"; // Правильный путь к файлу plantsApi.js
import { Button } from "antd";
import { CreatePlantForm } from "../FormModal/CreatePlantForm";

const PlantsList = () => {
    const [plants, setPlants] = useState([]);
    const [visible, setVisible] = useState(false);

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

    const onCreate = () => {
        getPlants();
        setVisible(false);
    };

    return (
        <section className={css.plantsList}>
            <h1>Список растений</h1>
            <Button color="primary" variant="solid" onClick={() => setVisible(true)}>
                Добавить растение
            </Button>

            <CreatePlantForm
                visible={visible}
                setVisible={setVisible}
                onCreate={onCreate}
            />
            <div className={css.plantsList__grid}>
                {plants.map(plant => (
                    <PlantItem key={plant.ID} plant={plant} />
                ))}
            </div>
        </section>
    );
};

export default PlantsList;