import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import "../App.css";

const AppLayout = () => {
    return (
        <div id="root">
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}

export default AppLayout;
