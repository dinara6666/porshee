import React, { createContext, useEffect, useState, useContext } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useParams } from "react-router-dom";
import { Layout, Menu, Card, Input, Select, Button, Form } from "antd";
import axios from "axios";
import "./Porsh.css";

const { Header, Content } = Layout;
const { Search } = Input;
const { Option } = Select;

const CarContext = createContext();
const CartContext = createContext();

function CarDetail() {
    const { id } = useParams();
    return <h2 className="car-detail">Детали автомобиля {id}</h2>;
}

const Container = ({ children }) => {
    return <div className="container">{children}</div>;
};

const Porsh = () => {
    const [cars, setCars] = useState([]);
    const [filteredCars, setFilteredCars] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [cart, setCart] = useState([]);
    const [filters, setFilters] = useState({ brand: "Porsche", year: "", price: "" });

    useEffect(() => {
        axios.get("https://mockapi.com/cars")
            .then(response => {
                console.log(response.data);  // Для проверки структуры данных
                const porscheCars = response.data.filter(car => car.brand === "Porsche");
                setCars(porscheCars);
                setFilteredCars(porscheCars);
            })
            .catch(error => console.error("Ошибка загрузки данных", error));
    }, []);

    const handleSearch = (value) => {
        setSearchTerm(value);
        filterCars({ ...filters, search: value });
    };

    const handleFilterChange = (name, value) => {
        const newFilters = { ...filters, [name]: value };
        setFilters(newFilters);
        filterCars(newFilters);
    };

    const filterCars = (filters) => {
        let filtered = cars;
        if (filters.search) {
            filtered = filtered.filter(car => car.model.toLowerCase().includes(filters.search.toLowerCase()));
        }
        if (filters.year) {
            filtered = filtered.filter(car => car.year.toString() === filters.year);
        }
        if (filters.price) {
            filtered = filtered.sort((a, b) => filters.price === "asc" ? a.price - b.price : b.price - a.price);
        }
        setFilteredCars(filtered);
    };

    const addToCart = (car) => {
        setCart([...cart, car]);
    };

    return (
        <div className="container">
            <CarContext.Provider value={{ cars, setCars }}>
                <CartContext.Provider value={{ cart, setCart, addToCart }}>
                    <Router>
                        <Layout>
                            <Header className="header">
                                <Menu theme="light" mode="horizontal" className="menu" style={{ backgroundColor: 'transparent', color: 'white' }}>
                                    <Menu.Item key="1" className="white-text"><Link to="/">Главная</Link></Menu.Item>
                                    <Menu.Item key="2" className="white-text"><Link to="/cart">Корзина ({cart.length})</Link></Menu.Item>
                                </Menu>
                            </Header>
                            <Content style={{ padding: '20px', backgroundColor: 'white' }} className="content">
                                <Search className="search-bar" placeholder="Поиск по модели" onSearch={handleSearch} enterButton />
                                <Select className="filter-select" placeholder="Год" onChange={(value) => handleFilterChange("year", value)}>
                                    <Option value="2023">2023</Option>
                                    <Option value="2022">2022</Option>
                                </Select>
                                <Select className="filter-select" placeholder="Цена" onChange={(value) => handleFilterChange("price", value)}>
                                    <Option value="asc">По возрастанию</Option>
                                    <Option value="desc">По убыванию</Option>
                                </Select>
                                <Routes>
                                    <Route path="/" element={<CarList cars={filteredCars} />} />
                                    <Route path="/car/:id" element={<CarDetail />} />
                                    <Route path="/cart" element={<Cart />} />
                                </Routes>
                            </Content>
                        </Layout>
                    </Router>
                </CartContext.Provider>
            </CarContext.Provider>
        </div>
    );
};

const CarList = ({ cars }) => {
    const { addToCart } = useContext(CartContext);
    return (
        <div className="list">
            {cars.map(car => (
                <Card key={car.id} title={car.model} extra={<Link to={`/car/${car.id}`}>Подробнее</Link>} className="car-card">
                    <p>Марка: {car.brand}</p>
                    <p>Год: {car.year}</p>
                    <p>Цена: {car.price} $</p>
                    <Button className="add-to-cart" onClick={() => addToCart(car)}>Добавить в корзину</Button>
                </Card>
            ))}
        </div>
    );
};







const Cart = () => {
    const { cart } = useContext(CartContext);
    return (

        <div className="cart">
            <h2 className="white-text">Корзина</h2>
            {cart.length === 0 ? <p>Корзина пуста...</p> : (
                <ul>
                    {cart.map((car) => (
                        <li key={car.id}>{car.model} - {car.price} $</li>
                    ))}
                </ul>
            )}
            <h3>Оформление заказа</h3>
            <Form className="order-form">
                <Form.Item label="Имя"><Input /></Form.Item>
                <Form.Item label="Адрес"><Input /></Form.Item>
                <Form.Item label="Телефон"><Input /></Form.Item>
                <Form.Item label="Способ оплаты">
                    <Select>
                        <Option value="card">Карта</Option>
                        <Option value="cash">Наличные</Option>
                    </Select>
                </Form.Item>
                <Button type="primary" className="order-button">Оформить заказ</Button>
            </Form>
        </div>
    );
};





export default Porsh;
