import React from "react";
import { NavLink } from "react-router-dom";

//This component will not be used for the moment
const Navigation = () => {
    return (
        <div className="navigation">
            <ul>
                <NavLink
                    to="/"
                    className={(nav) => (nav.isActive ? "nav-active" : "")}
                >
                    <li>Accueil</li>
                </NavLink>
                <NavLink to="/soccer">
                    <li>Football</li>
                </NavLink>
                <NavLink to="/tennis">
                    <li>Tennis</li>
                </NavLink>
                <NavLink to="/about">
                    <li>À propos</li>
                </NavLink>
            </ul>
        </div>
    );
};

export default Navigation;
