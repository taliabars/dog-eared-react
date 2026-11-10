
import { useState } from "react";
import "./AddBookForm.css";

const API_URL = "https://dog-eared-server.onrender.com/api/books";

function AddBookForm({ onBookAdded }) {
    const [formData, setFormData] = useState({
        title: "",
        author: "",
        genre: "",
        rating: "5",
        pages: "",
        img_name: ""
    });

    const [errors, setErrors] = useState([]);
    const [message, setMessage] = useState("");
    const [sending, setSending] = useState(false);

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormData((previous) => ({
            ...previous,
            [name]: value
        }));
    };

    const validateBook = () => {
        const newErrors = [];

        if (formData.title.trim().length < 2 ||
            formData.title.trim().length > 150) {
            newErrors.push("Title must be 2-150 characters.");
        }

        if (formData.author.trim().length < 2 ||
            formData.author.trim().length > 100) {
            newErrors.push("Author must be 2-100 characters.");
        }

        if (formData.genre.trim().length < 2 ||
            formData.genre.trim().length > 50) {
            newErrors.push("Genre must be 2-50 characters.");
        }

        const rating = Number(formData.rating);

        if (!Number.isInteger(rating) || rating < 1 || rating > 5) {
            newErrors.push("Rating must be a whole number from 1 to 5.");
        }

        const pages = Number(formData.pages);

        if (!formData.pages.trim() ||
            !Number.isInteger(pages) ||
            pages < 1 ||
            pages > 5000) {
            newErrors.push("Pages must be a whole number from 1 to 5000.");
        }

        return newErrors;
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (sending) return;

        setErrors([]);
        setMessage("");

        const validationErrors = validateBook();

        if (validationErrors.length > 0) {
            setErrors(validationErrors);
            return;
        }

        const newBook = {
            title: formData.title.trim(),
            author: formData.author.trim(),
            genre: formData.genre.trim(),
            rating: Number(formData.rating),
            pages: Number(formData.pages),
            img_name: formData.img_name.trim()
        };

        setSending(true);

        try {
            const response = await fetch(API_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newBook)
            });

            const result = await response.json();

            if (!response.ok) {
                if (result.errors) {
                    setErrors(result.errors);
                } else {
                    setErrors(["Unable to add book. Please try again."]);
                }
                return;
            }

            onBookAdded(result.book);

            setMessage("Book added successfully!");

            setFormData({
                title: "",
                author: "",
                genre: "",
                rating: "5",
                pages: "",
                img_name: ""
            });
        } catch (error) {
            console.error(error);
            setErrors([
                "Could not connect to the server. Please try again."
            ]);
        } finally {
            setSending(false);
        }
    };

    return (
        <section className="add-book-section">
            <h2>Add a Book</h2>

            <p>
                Have a book recommendation? Add it to the
                Dog-Eared collection!
            </p>

            <form className="add-book-form" onSubmit={handleSubmit}>
                <label htmlFor="book-title">Book Title</label>
                <input
                    type="text"
                    id="book-title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    placeholder="Enter the book title"
                    maxLength="150"
                    required
                />

                <label htmlFor="book-author">Author</label>
                <input
                    type="text"
                    id="book-author"
                    name="author"
                    value={formData.author}
                    onChange={handleChange}
                    placeholder="Enter the author's name"
                    maxLength="100"
                    required
                />

                <label htmlFor="book-genre">Genre</label>
                <input
                    type="text"
                    id="book-genre"
                    name="genre"
                    value={formData.genre}
                    onChange={handleChange}
                    placeholder="Romance, Mystery, Fantasy..."
                    maxLength="50"
                    required
                />

                <div className="add-book-row">
                    <div>
                        <label htmlFor="book-rating">Rating</label>
                        <select
                            id="book-rating"
                            name="rating"
                            value={formData.rating}
                            onChange={handleChange}
                        >
                            <option value="5">5 Stars</option>
                            <option value="4">4 Stars</option>
                            <option value="3">3 Stars</option>
                            <option value="2">2 Stars</option>
                            <option value="1">1 Star</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="book-pages">Number of Pages</label>
                        <input
                            type="number"
                            id="book-pages"
                            name="pages"
                            value={formData.pages}
                            onChange={handleChange}
                            placeholder="350"
                            min="1"
                            max="5000"
                            step="1"
                            required
                        />
                    </div>
                </div>

                <label htmlFor="book-image">
                    Cover Image Filename (Optional)
                </label>
                <input
                    type="text"
                    id="book-image"
                    name="img_name"
                    value={formData.img_name}
                    onChange={handleChange}
                    placeholder="example.jpg"
                />

                <p className="add-book-hint">
                    Leave this blank if you don't have a cover image.
                    The image must already exist in the website's
                    images folder.
                </p>

                <button
                    className="button"
                    type="submit"
                    disabled={sending}
                >
                    {sending ? "Adding Book..." : "Add Book →"}
                </button>

                {message && (
                    <p className="add-book-success" role="status">
                        {message}
                    </p>
                )}

                {errors.length > 0 && (
                    <div className="add-book-errors" role="alert">
                        {errors.map((error, index) => (
                            <p key={index}>{error}</p>
                        ))}
                    </div>
                )}
            </form>
        </section>
    );
}

export default AddBookForm;
