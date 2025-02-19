import axios from "axios";

const API_URL = "http://localhost:5000"; //

export const getCars = async () => {
    const response = await axios.get(`${API_URL}/cars`);
    return response.data;
};

export const addCar = async (car) => {
    const response = await axios.post(`${API_URL}/cars`, car);
    return response.data;
};

export const deleteCar = async (id) => {
    await axios.delete(`${API_URL}/cars/${id}`);
};

export const getOrders = async () => {
    const response = await axios.get(`${API_URL}/orders`);
    return response.data;
};
