import axios from "axios";

const API_URL = "http://localhost:5001";

axios.get(`${API_URL}/cars`)
    .then(response => console.log("🚗 Машины:", response.data))
    .catch(error => console.error("❌ Ошибка:", error.message));

axios.post(`${API_URL}/cars`, { brand: "Audi", model: "A4", year: 2023, price: 40000 })
    .then(response => console.log("✅ Добавлена машина:", response.data))
    .catch(error => console.error("❌ Ошибка:", error.message));

axios.post(`${API_URL}/orders`, { carId: "b2e8", customer: "Alice", date: "2025-02-18" })
    .then(response => console.log("🛒 Добавлен заказ:", response.data))
    .catch(error => console.error("❌ Ошибка:", error.message));

axios.patch(`${API_URL}/cars/b2e8`, { price: 45000 })
    .then(response => console.log("💰 Цена обновлена:", response.data))
    .catch(error => console.error("❌ Ошибка:", error.message));
