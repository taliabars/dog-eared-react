
import { useState } from "react";
import Navigation from "./Navigation";
import "./Header.css";

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="site-header">
            <h1>DOG-EARED</h1>

            <button
                className="menu-button"
                type="button"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                aria-expanded={menuOpen}
                aria-controls="main-navigation"
            >
                {menuOpen ? "✕" : "☰"}
            </button>

            <Navigation
                menuOpen={menuOpen}
                closeMenu={() => setMenuOpen(false)}
            />
        </header>
    );
}

export default Header;
