import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Receipt from "../pages/Receipt";
import Privacy from "../pages/Privacy";
const routes = [
    {
        path: "/",
        exact: true,
        element: <Home />,
        private: false,
    },
    {
        path: "/about",
        exact: true,
        element: <About />,
        private: false,
    },
    {
        path: "/Privacy",
        exact: true,
        element: <Privacy />,
        private: false,
    },
    { path: "/Receipt", exact: true, element: <Receipt />, private: false },
];

export default function Navigation() {

    return (
        <Routes>
            {routes.map((route, index) => (
                <Route key={index} path={route.path} element={route.element} />
            ))}
        </Routes>
    );
}