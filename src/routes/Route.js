import * as React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../body/home/Home";
import About from "../body/about/About";
import ContactUs from "../body/contactus/ContactUs";
import Project from "../body/project/Project";
import Services from "../body/services/Services";
import AppLayout from "../appLayout/AppLayout";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "home",
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
                path: "services",
                element: <Services />
            },
            {
                path: "project",
                element: <Project />
            },
        ]
    },
]);

export default Router;
