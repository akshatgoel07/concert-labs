import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";
import Home from "../pages/Home";
import Receipt from "../pages/Receipt";
const routes = [
    {
        path: "/",
        exact: true,
        element: <Home />,
        private: false,
    },

    { path: "/Receipt", exact: true, element: <Receipt />, private: false },
];

export default function Navigation() {
    const location = useLocation();
    const navigate = useNavigate();

    return (
        <Routes>
            {routes.map((route, index) => (
                <Route key={index} path={route.path} element={route.element} />
            ))}
        </Routes>
    );
}
