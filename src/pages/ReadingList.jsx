
import { Link } from "react-router-dom";
import BookCard from "../components/BookCard";
import "./ReadingList.css";

const featuredBooks = [
    {
        title: "The Seven Husbands of Evelyn Hugo",
        author: "Taylor Jenkins Reid",
        image: "evelyn-hugo.jpg",
        genre: "Historical Fiction",
        link: "/book"
    },
    {
        title: "The Hawthorne Legacy",
        author: "Jennifer Lynn Barnes",
        image: "hawthorne-legacy.jpg",
        genre: "Mystery"
    },
    {
        title: "People We Meet on Vacation",
        author: "Emily Henry",
        image: "people-vacation.jpg",
        genre: "Romance"
    },
    {
        title: "The Seven Year Slip",
        author: "Ashley Poston",
        image: "seven-year-slip.jpg",
        genre: "Romance"
    }
];

function ReadingList() {
    return (
        <main className="reading-list-page">
            <Link to="/lists" className="back-link">
                ← Back to Reading Lists
            </Link>

            <h2>Books Worth the Hype</h2>

            <p>
                Popular reads that actually deserve a spot on your TBR.
                These are some of the books that live up to their reputation.
            </p>

            <div className="featured-books-grid">
                {featuredBooks.map((book) => (
                    <BookCard
                        key={book.title}
                        {...book}
                        browse={true}
                    />
                ))}
            </div>
        </main>
    );
}

export default ReadingList;
