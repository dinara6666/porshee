import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import CarSalesApp from "./components/CarSalesApp/CarSalesApp.jsx";
import Header from "./components/header/Header.jsx";

export default function RouterApp() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/buy-car" element={<CarSalesApp />} />
            </Routes>
        </Router>
    );
}
