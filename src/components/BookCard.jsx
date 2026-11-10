
import { useState } from "react";
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
    const [imageError, setImageError] = useState(false);

    const imagePath = image
        ? `${import.meta.env.BASE_URL}images/${image}`
        : "";

    const showPlaceholder = !image || imageError;

    const bookCover = showPlaceholder ? (
        <div
            className="book-cover-placeholder"
            role="img"
            aria-label={`No cover available for ${title}`}
        >
            <span>📖</span>
            <p>No Cover Available</p>
        </div>
    ) : (
        <img
            src={imagePath}
            alt={title}
            onError={() => setImageError(true)}
        />
    );

    return (
        <section className={browse ? "book-card" : "book"}>
            {link ? (
                <Link
                    to={link}
                    className="book-cover-link"
                    aria-label={`View details for ${title}`}
                >
                    {bookCover}
                </Link>
            ) : (
                bookCover
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
