
import { useState, useEffect } from "react";
import BookCard from "../components/BookCard";
import AddBookForm from "../components/AddBookForm";
import EditBookForm from "../components/EditBookForm";
import "./Browse.css";
import "./BrowseActions.css";

const API_URL = "https://dog-eared-server.onrender.com/api/books";

function Browse() {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [message, setMessage] = useState("");
    const [editingBook, setEditingBook] = useState(null);
    const [deletingId, setDeletingId] = useState(null);
    const [busyId, setBusyId] = useState(null);

    useEffect(() => {
        const controller = new AbortController();

        const getBooks = async () => {
            try {
                const response = await fetch(API_URL, {
                    signal: controller.signal
                });

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

    const handleBookAdded = (newBook) => {
        setBooks((previous) => [...previous, newBook]);
        setMessage(`${newBook.title} was added successfully!`);
        setError("");
    };

    const handleBookUpdated = (updatedBook) => {
        setBooks((previous) =>
            previous.map((book) =>
                book._id === updatedBook._id ? updatedBook : book
            )
        );

        setEditingBook(null);
        setMessage(`${updatedBook.title} was updated successfully!`);
        setError("");
    };

    const handleDelete = async (id) => {
        setBusyId(id);
        setError("");
        setMessage("");

        try {
            const response = await fetch(`${API_URL}/${id}`, {
                method: "DELETE"
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(
                    result.message || "Unable to delete book."
                );
            }

            setBooks((previous) =>
                previous.filter((book) => book._id !== id)
            );

            setMessage("Book deleted successfully!");
            setDeletingId(null);

            if (editingBook?._id === id) {
                setEditingBook(null);
            }
        } catch (err) {
            console.error(err);
            setError(err.message || "Could not delete book.");
        } finally {
            setBusyId(null);
        }
    };

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

            <AddBookForm onBookAdded={handleBookAdded} />

            {editingBook && (
                <EditBookForm
                    key={editingBook._id}
                    book={editingBook}
                    onBookUpdated={handleBookUpdated}
                    onCancel={() => setEditingBook(null)}
                />
            )}

            <h2>All Books</h2>

            {message && (
                <p className="browse-success" role="status">
                    {message}
                </p>
            )}

            {error && (
                <p className="browse-error" role="alert">
                    {error}
                </p>
            )}

            {loading && (
                <p role="status">Loading book recommendations...</p>
            )}

            {!loading && (
                <>
                    <p>{books.length} recommendations</p>

                    <div className="editable-book-grid">
                        {books.map((book) => (
                            <div
                                className="editable-book-entry"
                                key={book._id}
                            >
                                <BookCard
                                    title={book.title}
                                    author={book.author}
                                    genre={book.genre}
                                    image={book.img_name}
                                    rating={book.rating}
                                    browse={true}
                                    link={`/book/${book._id}`}
                                />

                                <div className="book-actions">
                                    <button
                                        type="button"
                                        onClick={() => {
                                            setEditingBook(book);
                                            setMessage("");
                                        }}
                                    >
                                        Edit Book
                                    </button>

                                    <button
                                        type="button"
                                        className="delete-book-button"
                                        onClick={() =>
                                            setDeletingId(book._id)
                                        }
                                    >
                                        Delete Book
                                    </button>
                                </div>

                                {deletingId === book._id && (
                                    <div className="delete-confirmation">
                                        <p>
                                            Delete "{book.title}"?
                                        </p>

                                        <button
                                            type="button"
                                            disabled={busyId !== null}
                                            onClick={() =>
                                                handleDelete(book._id)
                                            }
                                        >
                                            {busyId === book._id
                                                ? "Deleting..."
                                                : "Yes, Delete"}
                                        </button>

                                        <button
                                            type="button"
                                            disabled={busyId !== null}
                                            onClick={() =>
                                                setDeletingId(null)
                                            }
                                        >
                                            Cancel
                                        </button>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </>
            )}
        </main>
    );
}

export default Browse;
