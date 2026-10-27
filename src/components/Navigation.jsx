
import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
    return (
        <nav className="main-nav">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/browse">Browse</Link></li>
                <li><Link to="/find">Read Next</Link></li>
                <li><Link to="/lists">Reading Lists</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
        </nav>
    );
}

export default Navigation;
