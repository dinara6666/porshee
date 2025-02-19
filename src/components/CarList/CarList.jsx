
import "./CarList.css";
import shop1 from "../../assets/shop1.jpg";
import shop2 from "../../assets/kia5.jpg";
import shop3 from "../../assets/zeekr001.jpg";
import shop4 from "../../assets/lexux.jpg";
import shop5 from "../../assets/cybertruck1.jpg"
import shop6 from "../../assets/shop6.jpg"

const cars = [
    {
        name: "Porsche 911",
        year: 2023,
        mileage: "5 000 км",
        engine: "3.0 л / 450 л.с. / Бензин",
        drive: "Задний привод",
        price: "12 500 000 руб.",
        location: "Москва, 1 час назад",
        photo: shop1
    },
    {
        name: "Kia K5",
        year: 2022,
        mileage: "15 000 км",
        engine: "2.0 л / 150 л.с. / Бензин",
        drive: "Передний привод",
        price: "2 300 000 руб.",
        location: "Санкт-Петербург, 2 часа назад",
        photo: shop2
    },
    {
        name: "Zeekr 001",
        year: 2024,
        mileage: "Без пробега",
        engine: "Электро / 544 л.с.",
        drive: "Полный привод",
        price: "5 700 000 руб.",
        location: "Москва, 30 минут назад",
        photo: shop3
    },
    {
        name: "Lexus",
        year: 2023,
        mileage: "2 000 км",
        engine: "2.5 л / 300 л.с. / Гибрид",
        drive: "Полный привод",
        price: "4 800 000 руб.",
        location: "Казань, 1 день назад",
        photo: shop4
    },

    {
        name: "Tesla Cybertruck",
        year: 2024,
        mileage: "2 000 км",
        engine: "Электро / 600 л.с.",
        drive: "Полный привод",
        price: "22 000 000 руб.",
        location: "Москва, 2 часа назад",
        photo: shop5
    },
    {
        name: "Mercedes-Benz G-Class",
        year: 2023,
        mileage: "10 000 км",
        engine: "4.0 л / 585 л.с. / Бензин",
        drive: "Полный привод",
        price: "19 500 000 руб.",
        location: "Санкт-Петербург, 3 часа назад",
        photo: shop6
    }


];

export default function CarList() {
    return (
        <div className={"container"}>
            <h2 className={"h1"}>current cars</h2>
            <div className="car-list">
                {cars.map((car, index) => (
                    <div key={index} className="car-item">
                        <img src={car.photo} alt={car.name} className="car-image" />
                        <div className="car-info">
                            <h2>{car.name}</h2>
                            <p>{car.year} г | {car.mileage}</p>
                            <p>{car.engine}</p>
                            <p>{car.drive}</p>
                            <p className="car-price">{car.price}</p>
                            <p className="car-location">📍 {car.location}</p>
                            <button className="car-button">Перейти</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
