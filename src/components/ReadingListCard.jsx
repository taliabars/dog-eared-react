
import { Link } from "react-router-dom";
import "./ReadingListCard.css";

function ReadingListCard({ title, image, link }) {
    return (
        <section className="reading-list">
            <Link to={link}>
                <img src={`${import.meta.env.BASE_URL}images/${image}`} alt={title} />
                <h3>{title} →</h3>
            </Link>
        </section>
    );
}

export default ReadingListCard;
