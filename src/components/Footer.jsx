
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
    return (
        <footer className="site-footer">
            <div>
                <h2>DOG-EARED</h2>
                <p>Find your next favorite read.</p>
                <p>&copy; 2026 Dog-Eared</p>
            </div>

            <nav className="footer-nav">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/browse">Browse Books</Link></li>
                    <li><Link to="/find">Find Your Next Read</Link></li>
                    <li><Link to="/lists">Reading Lists</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
            </nav>
        </footer>
    );
}

export default Footer;
