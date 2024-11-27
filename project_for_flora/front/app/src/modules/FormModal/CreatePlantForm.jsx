import { Form, Input, Modal } from "antd"
import { createPlant } from "../../api/plantsApi/plantsApi";
import PlantForm from "./PlantForm";

export const CreatePlantForm = ({ visible, setVisible, onCreate }) => {
    const [form] = Form.useForm();

    const handleCreate = async () => {
        try {
            const values = await form.validateFields();
            await createPlant(values); // Выполняем запрос на сервер
            form.resetFields();
            onCreate(); // Вызываем колбэк для обновления списка растений
            setVisible(false);
        } catch (error) {
            console.error("Ошибка при добавлении растения:", error);
        }
    };

    return (
        <Modal
            open={visible}
            title="Добавить новое растение"
            okText="Добавить"
            onCancel={() => setVisible(false)}
            onOk={handleCreate}
        >
            <PlantForm form={form} />
        </Modal>
    );
};