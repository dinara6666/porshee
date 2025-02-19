import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Home from "./Home.jsx";
import CarSalesApp from "./components/CarSalesApp/CarSalesApp.jsx";

const MainRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="buy-car" element={<CarSalesApp />} />
                </Route>
            </Routes>
        </Router>
    );
};

export default MainRouter;
