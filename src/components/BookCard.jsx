
import { Link } from "react-router-dom";
import "./BookCard.css";

function BookCard({ title, author, image, genre, rating = 5, browse = false, link }) {
    return (
        <section className={browse ? "book-card" : "book"}>
            {link ? (
                <Link to={link}>
                    <img src={`${import.meta.env.BASE_URL}images/${image}`} alt={title} />
                </Link>
            ) : (
                <img src={`${import.meta.env.BASE_URL}images/${image}`} alt={title} />
            )}

            <h3>{title}</h3>
            <p>{author}</p>
            <p>{"★".repeat(rating)}</p>
            <p>{genre}</p>

            {browse && link && (
                <Link className="button" to={link}>
                    View Book →
                </Link>
            )}
        </section>
    );
}

export default BookCard;
