
import BookCard from "../components/BookCard";
import "./Browse.css";

const books = [
    {
        id: 1,
        title: "The Seven Husbands of Evelyn Hugo",
        author: "Taylor Jenkins Reid",
        genre: "Historical Fiction",
        image: "evelyn-hugo.jpg"
    },
    {
        id: 2,
        title: "The Hawthorne Legacy",
        author: "Jennifer Lynn Barnes",
        genre: "Mystery",
        image: "hawthorne-legacy.jpg"
    },
    {
        id: 3,
        title: "Love & Olives",
        author: "Jenna Evans Welch",
        genre: "Romance",
        image: "love-olives.jpg"
    },
    {
        id: 4,
        title: "People We Meet on Vacation",
        author: "Emily Henry",
        genre: "Romance",
        image: "people-vacation.jpg"
    },
    {
        id: 5,
        title: "Heart Bones",
        author: "Colleen Hoover",
        genre: "Romance",
        image: "heart-bones.jpg"
    },
    {
        id: 6,
        title: "The Summer of Broken Rules",
        author: "K. L. Walther",
        genre: "Romance",
        image: "summer-broken-rules.jpg"
    },
    {
        id: 7,
        title: "The Messy Lives of Book People",
        author: "Phaedra Patrick",
        genre: "Contemporary Fiction",
        image: "messy-lives.jpg"
    },
    {
        id: 8,
        title: "The Graham Effect",
        author: "Elle Kennedy",
        genre: "Romance",
        image: "graham-effect.jpg"
    },
    {
        id: 9,
        title: "The Personal Librarian",
        author: "Marie Benedict & Victoria Christopher Murray",
        genre: "Historical Fiction",
        image: "personal-librarian.jpg"
    },
    {
        id: 10,
        title: "The Seven Year Slip",
        author: "Ashley Poston",
        genre: "Romance",
        image: "seven-year-slip.jpg"
    },
    {
        id: 11,
        title: "Everything I Know About Love",
        author: "Dolly Alderton",
        genre: "Memoir",
        image: "everything-love.jpg"
    },
    {
        id: 12,
        title: "Welcome to Beach Town",
        author: "Susan Wiggs",
        genre: "Contemporary Fiction",
        image: "beach-town.jpg"
    }
];

function Browse() {
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
            <p>{books.length} recommendations</p>

            <div className="book-grid">
                {books.map((book) => (
                    <BookCard
                        key={book.id}
                        title={book.title}
                        author={book.author}
                        genre={book.genre}
                        image={book.image}
                        rating={5}
                        browse={true}
                        link={book.id === 1 ? "/book" : undefined}
                    />
                ))}
            </div>
        </main>
    );
}

export default Browse;
