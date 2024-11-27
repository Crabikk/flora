// PlantForm.js
import React from "react";
import { Form, Input } from "antd";

const PlantForm = ({ form }) => {
    return (
        <Form form={form} layout="vertical">
            <Form.Item
                label="Название растения"
                name="plant_name"
                rules={[{ required: true, message: "Введите название растения!" }]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="Научное название"
                name="scientific_name"
                rules={[{ required: true, message: "Введите научное название растения!" }]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="Тип"
                name="type"
                rules={[{ required: true, message: "Введите тип растения!" }]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="Семейство"
                name="family"
                rules={[{ required: true, message: "Введите семейство растения!" }]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="Описание"
                name="description"
                rules={[{ required: true, message: "Введите описание растения!" }]}
            >
                <Input.TextArea />
            </Form.Item>
        </Form>
    );
};

export default PlantForm;