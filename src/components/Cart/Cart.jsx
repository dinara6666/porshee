import React, {useContext} from "react";
import {Button, Form, Input, Layout, Menu, Select} from "antd";
import {BrowserRouter as Router, Link, Route, Routes} from "react-router-dom";


const Cart = () => {
    const { cart } = useContext(CartContext);
    return (



        <div className="cart">
            <h2 className="white-text">Корзина</h2>
            {cart.length === 0 ? <p>Корзина пуста</p> : (
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


