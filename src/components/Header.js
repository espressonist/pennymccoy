import React from "react";
import { Link } from "gatsby";
import styles from "./css/Header.module.scss";

const Header = () => {
    return (
        <header>
            <nav>
                <div className="logo-container"></div>
                <ul className="menu-list">
                    <li className="menu-item">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="menu-item">
                        <Link to="/about-me">About Me</Link>
                    </li>
                    <li className="menu-item">
                        <Link to="/my-books">My Books</Link>
                    </li>
                    <li className="menu-item">
                        <Link to="/artworks">Artworks</Link>
                    </li>
                    <li className="menu-item">
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
                <div className="hamburger-container"></div>
            </nav>
            <div className="title"></div>
        </header>
    );
};

export default Header;
