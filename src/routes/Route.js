import * as React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../body/home/Home";
import About from "../body/about/About";
import ContactUs from "../body/contactus/ContactUs";
import Project from "../body/project/Project";
import Services from "../body/services/Services";
import AppLayout from "../appLayout/AppLayout";
import ErrorPage from "../error/ErrorPage";
import Clients from "../body/clients/Clients";
import Careers from "../body/careers/Careers";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "about",
                element: <About />
            },
            {
                path: "contactus",
                element: <ContactUs />
            },
            {
                path:"careers",
                element:<Careers/>
            },
            {
                path:"clients",
                element:<Clients/>
            },
            {
                path: "services",
                element: <Services />
            },
            {
                path: "project",
                element: <Project />
            },
        ],
        errorElement:<ErrorPage/>
    },
]);

export default Router;
