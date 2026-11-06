
import { useState, useEffect } from "react";
import BookCard from "../components/BookCard";
import "./Browse.css";

function Browse() {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const controller = new AbortController();

        const getBooks = async () => {
            try {
                const response = await fetch(
                    "https://dog-eared-server.onrender.com/api/books",
                    { signal: controller.signal }
                );

                if (!response.ok) {
                    throw new Error("Could not load books");
                }

                const data = await response.json();
                setBooks(data);
            } catch (err) {
                if (err.name !== "AbortError") {
                    console.error(err);
                    setError("Unable to load books. Please try again later.");
                }
            } finally {
                if (!controller.signal.aborted) {
                    setLoading(false);
                }
            }
        };

        getBooks();

        return () => controller.abort();
    }, []);

    return (
        <main className="browse-page">
            <h2 className="page-title">Browse Books</h2>

            <p className="page-subtitle">
                Explore recommendations and find something worth adding to your TBR.
            </p>

            <div className="search-area">
                <input
                    type="text"
                    placeholder="Search by title or author..."
                    aria-label="Search by title or author"
                />
                <button type="button">Search</button>
            </div>

            <h3>Filter by:</h3>

            <div className="filters">
                <div className="filter">Genre ▾</div>
                <div className="filter">Rating ▾</div>
                <div className="filter">Length ▾</div>
                <div className="filter">Mood ▾</div>
            </div>

            <h2>All Books</h2>

            {loading && (
                <p role="status">Loading book recommendations...</p>
            )}

            {error && (
                <p role="alert">{error}</p>
            )}

            {!loading && !error && (
                <>
                    <p>{books.length} recommendations</p>

                    <div className="book-grid">
                        {books.map((book) => (
                            <BookCard
                                key={book._id}
                                title={book.title}
                                author={book.author}
                                genre={book.genre}
                                image={book.img_name}
                                rating={book.rating}
                                browse={true}
                                link={`/book/${book._id}`}
                            />
                        ))}
                    </div>
                </>
            )}
        </main>
    );
}

export default Browse;
