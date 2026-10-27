
import { Link } from "react-router-dom";
import BookCard from "../components/BookCard";
import GenreCard from "../components/GenreCard";
import ReadingListCard from "../components/ReadingListCard";
import "./Home.css";

function Home() {
    return (
        <main>
            <section id="hero">
                <div className="hero-text">
                    <h2>Find your next<br />favorite read.</h2>

                    <p>
                        Discover books you'll actually want to read, with
                        recommendations for every mood, genre, and reading
                        obsession.
                    </p>

                    <Link className="button" to="/find">
                        Find Your Next Read
                    </Link>
                </div>

                <img
                    src={`${import.meta.env.BASE_URL}images/hero.jpg`}
                    alt="Books and coffee"
                />
            </section>

            <section id="top-picks">
                <h2>Books I Can't Stop Recommending</h2>

                <p>Five-star reads that deserve a spot on your TBR.</p>

                <div className="columns">
                    <BookCard
                        title="The Seven Husbands of Evelyn Hugo"
                        author="Taylor Jenkins Reid"
                        image="evelyn-hugo.jpg"
                        genre="Historical Fiction"
                    />

                    <BookCard
                        title="Welcome to Beach Town"
                        author="Susan Wiggs"
                        image="beach-town.jpg"
                        genre="Contemporary Fiction"
                    />

                    <BookCard
                        title="The It Girl"
                        author="Ruth Ware"
                        image="it-girl.jpg"
                        genre="Mystery / Thriller"
                    />

                    <BookCard
                        title="Sandwich"
                        author="Catherine Newman"
                        image="sandwich.jpg"
                        genre="Contemporary Fiction"
                    />
                </div>
            </section>

            <section id="genres">
                <h2>Pick Your Poison</h2>

                <p>
                    Browse by genre and find exactly what you're in the mood for.
                </p>

                <div className="genre-columns">
                    <GenreCard name="ROMANCE" image="romance.jpg" />
                    <GenreCard name="THRILLER" image="thriller.jpg" />
                    <GenreCard name="FANTASY" image="fantasy.jpg" />
                    <GenreCard name="MYSTERY" image="mystery.jpg" />
                    <GenreCard
                        name="HISTORICAL FICTION"
                        image="historical.jpg"
                    />
                    <GenreCard
                        name="CONTEMPORARY FICTION"
                        image="contemporary.jpg"
                    />
                </div>
            </section>

            <section id="reading-mood">
                <h2>What's your reading mood?</h2>

                <p>
                    Choose what you're craving and we'll help you find your
                    next read.
                </p>

                <div className="mood-options">
                    <Link to="/find">I want something romantic</Link>
                    <Link to="/find">Keep me on the edge of my seat</Link>
                    <Link to="/find">Take me somewhere else</Link>
                    <Link to="/find">Make me feel something</Link>
                </div>

                <Link className="light-button" to="/find">
                    Find My Book →
                </Link>
            </section>

            <section id="reading-lists">
                <h2>A List for Every Mood</h2>

                <p>Curated reads for whatever you're looking for next.</p>

                <div className="columns">
                    <ReadingListCard
                        title="Books Worth the Hype"
                        image="hype.jpg"
                        link="/reading-list"
                    />

                    <ReadingListCard
                        title="Can't-Put-It-Down Reads"
                        image="cant-put-down.jpg"
                        link="/lists"
                    />

                    <ReadingListCard
                        title="Books That Will Make You Cry"
                        image="cry.jpg"
                        link="/lists"
                    />
                </div>
            </section>
        </main>
    );
}

export default Home;
