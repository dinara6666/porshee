import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "../../components/SearchBar.jsx";

export default function Fera() {
    const [cars, setCars] = useState([]);
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(`http://localhost:5000/cars?name_like=${search}`)
            .then(response => {
                setCars(response.data);
                setLoading(false);
            })
            .catch(error => console.error("Ошибка при загрузке:", error));
    }, [search]);

    if (loading) return <h2>Загрузка...</h2>;

    return (
        <div className="fera">
            <SearchBar search={search} setSearch={setSearch} />

            {cars.length === 0 ? <h2>Нет машин</h2> :
                cars.map((car, index) => (
                    <div key={index} className="fera-item">
                        <img src={car.photo} alt={car.name} className="fera-image" />
                        <div className="fera-info">
                            <h2>{car.name}</h2>
                            <p>{car.year} г | {car.mileage}</p>
                            <p>{car.engine}</p>
                            <p>{car.drive}</p>
                            <p className="fera-price">{car.price}</p>
                            <p className="fera-location">📍 {car.location}</p>
                            <button className="fera-button">Перейти</button>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}
