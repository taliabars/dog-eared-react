
import { Link } from "react-router-dom";
import "./Book.css";

function Book() {
    return (
        <main className="book-detail-page">
            <Link to="/browse" className="book-back-link">
                ← Back to Browse Books
            </Link>

            <section className="book-detail">
                <div className="book-detail-image">
                    <img
                        src={`${import.meta.env.BASE_URL}images/evelyn-hugo.jpg`}
                        alt="The Seven Husbands of Evelyn Hugo"
                    />
                </div>

                <div className="book-detail-info">
                    <h2>The Seven Husbands of Evelyn Hugo</h2>
                    <h3>by Taylor Jenkins Reid</h3>

                    <p className="book-detail-rating">★★★★★</p>

                    <div className="book-detail-facts">
                        <p><strong>Genre:</strong> Historical Fiction</p>
                        <p><strong>Rating:</strong> 5/5 Stars</p>
                        <p><strong>Length:</strong> 400 Pages</p>
                    </div>

                    <h3>About the Book</h3>

                    <p>
                        Aging Hollywood icon Evelyn Hugo is finally ready
                        to tell the truth about her glamorous and
                        scandalous life. When she chooses an unknown
                        journalist to write her story, the two uncover
                        secrets about love, ambition, fame, and the
                        sacrifices made along the way.
                    </p>

                    <h3>Why I Recommend It</h3>

                    <p>
                        This is one of those books that stays with you
                        long after you finish reading. The characters,
                        emotional storytelling, and unexpected twists
                        make it difficult to put down.
                    </p>

                    <Link to="/browse" className="button">
                        Explore More Books →
                    </Link>
                </div>
            </section>
        </main>
    );
}

export default Book;
