
import { Link } from "react-router-dom";
import "./BookCard.css";

function BookCard({
    title,
    author,
    image,
    genre,
    rating = 5,
    browse = false,
    link
}) {
    const imagePath = `${import.meta.env.BASE_URL}images/${image}`;

    return (
        <section className={browse ? "book-card" : "book"}>
            {link ? (
                <Link to={link} aria-label={`View details for ${title}`}>
                    <img src={imagePath} alt={title} />
                </Link>
            ) : (
                <img src={imagePath} alt={title} />
            )}

            <h3>
                {link ? (
                    <Link className="book-title-link" to={link}>
                        {title}
                    </Link>
                ) : (
                    title
                )}
            </h3>

            <p>{author}</p>
            <p aria-label={`${rating} out of 5 stars`}>
                {"★".repeat(rating)}
            </p>
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
