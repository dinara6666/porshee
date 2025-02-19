import { Outlet } from "react-router-dom";
import Header from "./../components/header/Header.jsx";

const Layout = () => {
    return (
        <>
            <Header />
            <Outlet />
        </>
    );
};

export default Layout;
