
import { Link } from "react-router-dom";
import ReadingListCard from "../components/ReadingListCard";
import "./Lists.css";

const lists = [
    {
        title: "Can't-Put-It-Down Reads",
        image: "cant-put-down.jpg",
        description: "Books that will keep you up way too late."
    },
    {
        title: "Books That Will Make You Cry",
        image: "cry.jpg",
        description: "Stories for when you need a good emotional read."
    },
    {
        title: "Perfect Beach Reads",
        image: "beach-reads.jpg",
        description: "Easy, entertaining books made for sunny days."
    },
    {
        title: "Five-Star Favorites",
        image: "hype.jpg",
        description: "The books that earned the highest rating."
    },
    {
        title: "Romance Worth Rooting For",
        image: "romance.jpg",
        description: "Love stories that are actually worth the hype."
    },
    {
        title: "Mysteries to Get Lost In",
        image: "mystery.jpg",
        description: "Twisty reads that will keep you guessing."
    }
];

function Lists() {
    return (
        <main className="lists-page">
            <h2 className="page-title">Reading Lists</h2>
            <p className="page-subtitle">
                Curated collections for every mood, season, and reading obsession.
            </p>

            <section className="featured-list">
                <div className="featured-text">
                    <p>FEATURED LIST</p>
                    <h2>Books Worth the Hype</h2>
                    <p>
                        The popular books that actually deserve a spot
                        on your TBR.
                    </p>
                    <Link className="button" to="/reading-list">
                        Explore the List →
                    </Link>
                </div>
                <img
                    src={`${import.meta.env.BASE_URL}images/hype.jpg`}
                    alt="Books Worth the Hype"
                />
            </section>

            <section className="more-lists">
                <h2>Explore More Lists</h2>
                <p>There's a list for whatever you're in the mood to read.</p>

                <div className="list-grid">
                    {lists.map((list) => (
                        <div className="list-entry" key={list.title}>
                            <ReadingListCard
                                title={list.title}
                                image={list.image}
                                link="/reading-list"
                            />
                            <p>{list.description}</p>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}

export default Lists;
