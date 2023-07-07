import React, { useEffect } from "react";
import { Routes, Route, Form } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";
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
    const location = useLocation();
    const navigate = useNavigate();

    console.log("Location:", location, window.location);
    useEffect(() => {
        console.log("Location:", location);
        var token = localStorage.getItem("spotifyToken");
        if (!token) {
            const urlParams = new URLSearchParams(
                window.location.hash.substring(1)
            );
            token = urlParams.get("access_token");
            console.log("Access Token:", token);
            localStorage.setItem("spotifyToken", token);
        }
    }, [window.location]);

    return (
        <Routes>
            {routes.map((route, index) => (
                <Route key={index} path={route.path} element={route.element} />
            ))}
        </Routes>
    );
}
