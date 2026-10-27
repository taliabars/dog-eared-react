
import { Link } from "react-router-dom";
import "./About.css";

function About() {
    return (
        <main className="about-page">
            <section className="about-top">
                <div className="about-text">
                    <h2 className="page-title">About Dog-Eared</h2>

                    <p className="page-subtitle">
                        Built for readers who know the hardest part of
                        finishing a good book is figuring out what to read next.
                    </p>

                    <p>
                        Dog-Eared is a book recommendation website designed
                        to make finding your next read easier and more personal.
                        Instead of scrolling through endless lists of books,
                        readers can browse by genre, explore curated reading
                        lists, or find recommendations based on their mood
                        and reading preferences.
                    </p>
                </div>

                <img
                    src={`${import.meta.env.BASE_URL}images/hero.jpg`}
                    alt="Books and coffee"
                />
            </section>

            <section className="about-section">
                <h2>Why Dog-Eared?</h2>

                <p>
                    Finding a great book shouldn't feel like homework.
                    Dog-Eared makes it easier to discover books based on
                    genre, mood, ratings, and other reading preferences,
                    while providing recommendations based on real reading
                    experiences.
                </p>
            </section>

            <section className="about-features">
                <h2>What You'll Find Here</h2>

                <p>
                    Whether you know exactly what you want to read or have
                    no idea where to start, Dog-Eared gives you a few
                    different ways to find your next book.
                </p>

                <div className="about-feature-grid">
                    <section className="about-feature">
                        <h3>Browse Books</h3>

                        <p>
                            Explore book recommendations and browse by
                            genre, rating, length, and mood.
                        </p>

                        <Link to="/browse">Browse Books →</Link>
                    </section>

                    <section className="about-feature">
                        <h3>Find Your Next Read</h3>

                        <p>
                            Choose what you're in the mood for and narrow
                            down books that match your reading preferences.
                        </p>

                        <Link to="/find">Find a Book →</Link>
                    </section>

                    <section className="about-feature">
                        <h3>Reading Lists</h3>

                        <p>
                            Explore curated collections for different moods,
                            seasons, genres, and reading obsessions.
                        </p>

                        <Link to="/lists">Explore Lists →</Link>
                    </section>
                </div>
            </section>

            <section className="recommendations">
                <h2>How Recommendations Work</h2>

                <p>
                    Recommendations on Dog-Eared are based on ratings,
                    genres, moods, pacing, and my overall reading experience.
                    The goal is to help readers find books that match what
                    they actually feel like reading.
                </p>

                <Link className="button" to="/find">
                    Find Your Next Read →
                </Link>
            </section>

            <section className="contact-section">
                <h2>Get in Touch</h2>

                <p>
                    Have a book recommendation, a question, or just want
                    to talk books? I'd love to hear from you!
                </p>

                <form className="about-contact-form">
                    <label htmlFor="contact-name">Name</label>
                    <input
                        type="text"
                        id="contact-name"
                        placeholder="Your name"
                        required
                    />

                    <label htmlFor="contact-email">Email</label>
                    <input
                        type="email"
                        id="contact-email"
                        placeholder="Your email address"
                        required
                    />

                    <label htmlFor="contact-message">Message</label>
                    <textarea
                        id="contact-message"
                        placeholder="Write your message here..."
                        rows="6"
                        required
                    ></textarea>

                    <button type="button" className="button">
                        Send Message →
                    </button>
                </form>
            </section>
        </main>
    );
}

export default About;
