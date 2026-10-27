
import "./QuizOption.css";

function QuizOption({ label }) {
    return (
        <button className="quiz-option" type="button">
            {label}
        </button>
    );
}

export default QuizOption;
