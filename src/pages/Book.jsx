
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "./Book.css";

function Book() {
    const { id } = useParams();

    const [book, setBook] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [imageError, setImageError] = useState(false);

    useEffect(() => {
        const controller = new AbortController();

        const getBook = async () => {
            setLoading(true);
            setError("");
            setBook(null);
            setImageError(false);

            try {
                const response = await fetch(
                    `https://dog-eared-server.onrender.com/api/books/${id}`,
                    { signal: controller.signal }
                );

                if (!response.ok) {
                    throw new Error("Could not load book details");
                }

                const data = await response.json();
                setBook(data);
            } catch (err) {
                if (err.name !== "AbortError") {
                    console.error(err);
                    setError("Unable to load this book. Please try again.");
                }
            } finally {
                if (!controller.signal.aborted) {
                    setLoading(false);
                }
            }
        };

        getBook();

        return () => controller.abort();
    }, [id]);

    const showPlaceholder = book && (!book.img_name || imageError);

    return (
        <main className="book-detail-page">
            <Link to="/browse" className="book-back-link">
                ← Back to Browse Books
            </Link>

            {loading && (
                <p role="status">Loading book details...</p>
            )}

            {error && (
                <p role="alert">{error}</p>
            )}

            {!loading && !error && book && (
                <section className="book-detail">
                    <div className="book-detail-image">
                        {showPlaceholder ? (
                            <div
                                className="book-detail-placeholder"
                                role="img"
                                aria-label={`No cover available for ${book.title}`}
                            >
                                <span>📖</span>
                                <p>No Cover Available</p>
                            </div>
                        ) : (
                            <img
                                src={`${import.meta.env.BASE_URL}images/${book.img_name}`}
                                alt={book.title}
                                onError={() => setImageError(true)}
                            />
                        )}
                    </div>

                    <div className="book-detail-info">
                        <h2>{book.title}</h2>
                        <h3>by {book.author}</h3>

                        <p className="book-detail-rating">
                            {"★".repeat(book.rating)}
                        </p>

                        <div className="book-detail-facts">
                            <p><strong>Genre:</strong> {book.genre}</p>
                            <p><strong>Rating:</strong> {book.rating}/5 Stars</p>
                            <p><strong>Length:</strong> {book.pages} Pages</p>
                        </div>

                        <h3>About This Book</h3>

                        <p>
                            Discover {book.title} by {book.author}.
                            This {book.genre.toLowerCase()} recommendation
                            is part of the Dog-Eared book collection.
                        </p>

                        <h3>Why I Recommend It</h3>

                        <p>
                            This book earned a spot on my recommendation
                            list because of its memorable reading experience.
                            Explore more books to find your next favorite read.
                        </p>

                        <Link to="/browse" className="button">
                            Explore More Books →
                        </Link>
                    </div>
                </section>
            )}
        </main>
    );
}

export default Book;
