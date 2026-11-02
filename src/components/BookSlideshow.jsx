
import { useState, useEffect } from "react";
import "./BookSlideshow.css";

const books = [
    {
        title: "The Seven Husbands of Evelyn Hugo",
        author: "Taylor Jenkins Reid",
        image: "evelyn-hugo.jpg"
    },
    {
        title: "The Hawthorne Legacy",
        author: "Jennifer Lynn Barnes",
        image: "hawthorne-legacy.jpg"
    },
    {
        title: "People We Meet on Vacation",
        author: "Emily Henry",
        image: "people-vacation.jpg"
    },
    {
        title: "The Seven Year Slip",
        author: "Ashley Poston",
        image: "seven-year-slip.jpg"
    }
];

function BookSlideshow() {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((previous) => (previous + 1) % books.length);
        }, 5000);

        return () => clearInterval(timer);
    }, []);

    const nextBook = () => {
        setCurrent((previous) => (previous + 1) % books.length);
    };

    const previousBook = () => {
        setCurrent((previous) =>
            (previous - 1 + books.length) % books.length
        );
    };

    const book = books[current];

    return (
        <section className="book-slideshow">
            <h2>Featured Reads</h2>
            <p>Discover some of my favorite books.</p>

            <div className="slideshow-card">
                <img
                    src={`${import.meta.env.BASE_URL}images/${book.image}`}
                    alt={book.title}
                />

                <h3>{book.title}</h3>
                <p>{book.author}</p>

                <div className="slideshow-controls">
                    <button onClick={previousBook} type="button">
                        ← Previous
                    </button>

                    <span>{current + 1} / {books.length}</span>

                    <button onClick={nextBook} type="button">
                        Next →
                    </button>
                </div>
            </div>
        </section>
    );
}

export default BookSlideshow;
