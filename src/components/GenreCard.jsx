
import "./GenreCard.css";

function GenreCard({ name, image }) {
    return (
        <section className="genre">
            <img src={`${import.meta.env.BASE_URL}images/${image}`} alt={name} />
            <h3>{name}</h3>
        </section>
    );
}

export default GenreCard;
