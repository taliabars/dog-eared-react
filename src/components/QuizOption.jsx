
import toast from "react-hot-toast";
import "./QuizOption.css";

function QuizOption({ label, selected, onSelect }) {
    const handleClick = () => {
        onSelect();

        toast.success(`You selected: ${label}`, {
            duration: 2000,
            style: {
                background: "#4a2932",
                color: "#f8f3eb",
                borderRadius: "10px"
            },
            iconTheme: {
                primary: "#e8d8d0",
                secondary: "#4a2932"
            }
        });
    };

    return (
        <button
            className={`quiz-option ${selected ? "selected" : ""}`}
            type="button"
            onClick={handleClick}
            aria-pressed={selected}
        >
            {label}
        </button>
    );
}

export default QuizOption;
