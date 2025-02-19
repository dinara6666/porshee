import { useEffect, useState } from "react";
import axios from "axios";
import "./CarSalesApp.css";

const API_URL = "http://localhost:5001";

export default function CarSalesApp() {
    const [cars, setCars] = useState([]);
    const [filter, setFilter] = useState("");
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [cartOpen, setCartOpen] = useState(false);

    useEffect(() => {
        axios.get(`${API_URL}/cars`).then(response => {
            setCars(response.data);
            setLoading(false);
        });

        axios.get(`${API_URL}/orders`).then(response => {
            setOrders(response.data);
        });
    }, []);

    const handleBuy = (car) => {
        axios.post(`${API_URL}/orders`, { carId: car.id, customer: "User", date: new Date().toISOString() })
            .then(response => setOrders([...orders, response.data]));
    };

    return (
        <div className="car-sales-app">
            <h1 className="title"> Онлайн Автосалон</h1>

            <input
                type="text"
                placeholder="🔍 Поиск по марке..."
                className="search-input"
                onChange={e => setFilter(e.target.value)}
            />

            <button className="cart-button" onClick={() => setCartOpen(!cartOpen)}>
                🛒 Корзина ({orders.length})
            </button>

            {cartOpen && (
                <div className="cart-modal">
                    <h2>🛍 Купленные машины</h2>
                    {orders.length > 0 ? (
                        <ul>
                            {orders.map(order => {
                                const car = cars.find(c => c.id === order.carId);
                                return car ? (
                                    <li key={order.id}>
                                        {car.brand} {car.model} - 💰 {car.price}$
                                    </li>
                                ) : null;
                            })}
                        </ul>
                    ) : (
                        <p>Вы еще не купили машины.</p>
                    )}
                    <button className="close-cart" onClick={() => setCartOpen(false)}>❌ Закрыть</button>
                </div>
            )}

            {loading ? (
                <p className="loading">Загрузка машин...</p>
            ) : (
                <div className="car-list">
                    {cars.filter(car => car.brand.toLowerCase().includes(filter.toLowerCase())).map(car => (
                        <div key={car.id} className="car-card">
                            <img
                                src={car.image || "https://via.placeholder.com/300x200"}
                                alt={`${car.brand} ${car.model}`}
                                className="car-image"
                            />
                            <h2 className="car-title">{car.brand} {car.model}</h2>
                            <p className="car-year">Год: {car.year}</p>
                            <p className="car-mileage">📏 Пробег: {car.mileage} км</p>
                            <p className="car-engine">⚙️ Двигатель: {car.engine}</p>
                            <p className="car-horsepower">🏎️ Мощность: {car.horsepower} л.с.</p>
                            <p className="car-fuel">⛽ Тип топлива: {car.fuelType}</p>
                            <p className="car-description">📜 {car.description}</p>
                            <p className="car-price">💰 {car.price}$</p>
                            <button
                                onClick={() => handleBuy(car)}
                                disabled={orders.some(order => order.carId === car.id)}
                                className={`buy-button ${orders.some(order => order.carId === car.id) ? "bought" : "active"}`}
                            >
                                {orders.some(order => order.carId === car.id) ? "✅ Куплено" : "Купить"}
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
