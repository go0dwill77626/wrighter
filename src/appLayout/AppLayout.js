import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import "../App.css";
import OnlineStatusProvider from "../utils/OnlineStatusContext";
import OnlineStatusNotification from "../header/OnlineStatusNotifications";

const AppLayout = () => {
    return (
        <OnlineStatusProvider>
        <div id="root">
            <OnlineStatusNotification/>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
        </OnlineStatusProvider>
    );
}

export default AppLayout;
