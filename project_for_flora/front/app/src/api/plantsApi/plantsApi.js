// src/api/plantsApi/plantsApi.js
import api from "../api";

export const getPlantsQuery = async () => {
  try {
    const response = await api.get("/plants");
    return response.data;
  } catch (err) {
    console.error("Ошибка при выполнении запроса:", err);
    throw err; // Передаем ошибку дальше, чтобы её можно было обработать в вызывающем коде
  }
};

export const createPlant = async (plantData) => {
  try {
    const response = await api.post("/plants", plantData);
    return response.data;
  } catch (err) {
    console.error("Ошибка при добавлении растения", err);
    throw err;
  }
};

export const deletePlant = async (id) => {
  try {
    const response = await api.delete(`/plants/${id}`);
    return response.data;
  } catch (err) {
    console.error("Ошибка при удалении растения", err);
    throw err;
  }
};

export const updatePlant = async (id, plantData) => {
  try {
    const response = await api.put(`/plants/${id}`, plantData);
    return response.data;
  } catch (err) {
    console.error("Ошибка при обновлении растения", err);
    throw err;
  }
};
