
import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation({ menuOpen, closeMenu }) {
    return (
        <nav
            id="main-navigation"
            className={`main-nav ${menuOpen ? "menu-open" : ""}`}
        >
            <ul>
                <li>
                    <Link to="/" onClick={closeMenu}>Home</Link>
                </li>
                <li>
                    <Link to="/browse" onClick={closeMenu}>Browse</Link>
                </li>
                <li>
                    <Link to="/find" onClick={closeMenu}>Read Next</Link>
                </li>
                <li>
                    <Link to="/lists" onClick={closeMenu}>Reading Lists</Link>
                </li>
                <li>
                    <Link to="/about" onClick={closeMenu}>About</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;
