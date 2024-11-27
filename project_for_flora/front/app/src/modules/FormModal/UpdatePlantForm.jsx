import React, { useState, useEffect } from "react";
import { Modal, Form, Input } from "antd";
import { updatePlant } from "../../api/plantsApi/plantsApi";
import PlantForm from "./PlantForm";

const UpdatePlantForm = ({ visible, setVisible, plant, onUpdate }) => {
    const [form] = Form.useForm();

    useEffect(() => {
        if (plant) {
            form.setFieldsValue({
                plant_name: plant.plant_name,
                scientific_name: plant.scientific_name,
                type: plant.type,
                family: plant.family,
                description: plant.description,
            });
        }
    }, [plant, form]);

    const handleUpdate = async () => {
        try {
            const values = await form.validateFields();
            await updatePlant(plant.id, values); // Выполняем запрос на сервер
            form.resetFields();
            onUpdate(); // Вызываем колбэк для обновления списка растений
            setVisible(false);
        } catch (error) {
            console.error("Ошибка при обновлении растения:", error);
        }
    };

    return (
        <Modal
            open={visible}
            title="Обновить растение"
            okText="Обновить"
            onCancel={() => setVisible(false)}
            onOk={handleUpdate}
        >
            <PlantForm form={form} />
        </Modal>
    );
};

export default UpdatePlantForm;