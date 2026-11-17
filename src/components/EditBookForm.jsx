
import { useState } from "react";
import "./EditBookForm.css";

const API_URL = "https://dog-eared-server.onrender.com/api/books";

function EditBookForm({ book, onBookUpdated, onCancel }) {
    const [formData, setFormData] = useState({
        title: book.title,
        author: book.author,
        genre: book.genre,
        rating: String(book.rating),
        pages: String(book.pages),
        img_name: book.img_name || ""
    });

    const [errors, setErrors] = useState([]);
    const [saving, setSaving] = useState(false);

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
            newErrors.push("Rating must be between 1 and 5.");
        }

        const pages = Number(formData.pages);
        if (!formData.pages.trim() ||
            !Number.isInteger(pages) ||
            pages < 1 ||
            pages > 5000) {
            newErrors.push("Pages must be between 1 and 5000.");
        }

        return newErrors;
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (saving) return;

        setErrors([]);

        const validationErrors = validateBook();

        if (validationErrors.length > 0) {
            setErrors(validationErrors);
            return;
        }

        const updatedData = {
            title: formData.title.trim(),
            author: formData.author.trim(),
            genre: formData.genre.trim(),
            rating: Number(formData.rating),
            pages: Number(formData.pages),
            img_name: formData.img_name.trim()
        };

        setSaving(true);

        try {
            const response = await fetch(
                `${API_URL}/${book._id}`,
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(updatedData)
                }
            );

            const result = await response.json();

            if (!response.ok) {
                setErrors(
                    result.errors ||
                    [result.message || "Unable to update book."]
                );
                return;
            }

            onBookUpdated(result.book);
        } catch (error) {
            console.error(error);
            setErrors(["Could not connect to the server."]);
        } finally {
            setSaving(false);
        }
    };

    return (
        <section className="edit-book-section">
            <h2>Edit Book</h2>

            <p>Update the information for {book.title}.</p>

            <form className="edit-book-form" onSubmit={handleSubmit}>
                <label htmlFor="edit-title">Book Title</label>
                <input
                    id="edit-title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="edit-author">Author</label>
                <input
                    id="edit-author"
                    name="author"
                    value={formData.author}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="edit-genre">Genre</label>
                <input
                    id="edit-genre"
                    name="genre"
                    value={formData.genre}
                    onChange={handleChange}
                    required
                />

                <div className="edit-book-row">
                    <div>
                        <label htmlFor="edit-rating">Rating</label>
                        <select
                            id="edit-rating"
                            name="rating"
                            value={formData.rating}
                            onChange={handleChange}
                        >
                            {[1, 2, 3, 4, 5].map((rating) => (
                                <option key={rating} value={rating}>
                                    {rating} Stars
                                </option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <label htmlFor="edit-pages">Pages</label>
                        <input
                            type="number"
                            id="edit-pages"
                            name="pages"
                            min="1"
                            max="5000"
                            step="1"
                            value={formData.pages}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>

                <label htmlFor="edit-image">Cover Image Filename</label>
                <input
                    id="edit-image"
                    name="img_name"
                    value={formData.img_name}
                    onChange={handleChange}
                    placeholder="example.jpg"
                />

                <div className="edit-book-buttons">
                    <button type="submit" disabled={saving}>
                        {saving ? "Saving..." : "Save Changes →"}
                    </button>

                    <button
                        type="button"
                        className="cancel-button"
                        onClick={onCancel}
                        disabled={saving}
                    >
                        Cancel
                    </button>
                </div>

                {errors.length > 0 && (
                    <div className="edit-book-errors" role="alert">
                        {errors.map((error, index) => (
                            <p key={index}>{error}</p>
                        ))}
                    </div>
                )}
            </form>
        </section>
    );
}

export default EditBookForm;
