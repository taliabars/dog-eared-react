
import QuizOption from "../components/QuizOption";
import "./Find.css";

const questions = [
    {
        title: "1. What genre are you in the mood for?",
        choices: ["Romance", "Mystery / Thriller", "Fantasy", "Surprise Me"]
    },
    {
        title: "2. How do you want the book to make you feel?",
        choices: ["Happy", "Emotional", "On Edge", "Comforted"]
    },
    {
        title: "3. What kind of pace are you looking for?",
        choices: ["Slow Burn", "Steady", "Fast-Paced", "No Preference"]
    },
    {
        title: "4. How long of a book do you want?",
        choices: ["Under 300 Pages", "300-400 Pages", "400+ Pages", "No Preference"]
    }
];

const steps = [
    {
        number: "01",
        title: "Tell Us Your Mood",
        description: "Choose the genre, feeling, pace, and length you're looking for."
    },
    {
        number: "02",
        title: "Get Your Match",
        description: "We'll use your choices to narrow down books that fit what you want."
    },
    {
        number: "03",
        title: "Start Reading",
        description: "Explore your recommendation and find your next favorite book."
    }
];

function Find() {
    return (
        <main className="find-page">
            <h2 className="page-title">Find Your Next Read</h2>

            <p className="page-subtitle">
                Tell us what you're in the mood for and we'll help you
                narrow down your next read.
            </p>

            <section className="find-quiz">
                {questions.map((question) => (
                    <section className="find-question" key={question.title}>
                        <h3>{question.title}</h3>

                        <div className="find-options">
                            {question.choices.map((choice) => (
                                <QuizOption key={choice} label={choice} />
                            ))}
                        </div>
                    </section>
                ))}

                <div className="find-quiz-button">
                    <button type="button">
                        Find My Book →
                    </button>
                </div>
            </section>

            <section className="find-how-it-works">
                <h2>How It Works</h2>

                <p>Finding your next read is as easy as 1, 2, 3.</p>

                <div className="find-steps">
                    {steps.map((step) => (
                        <section className="find-step" key={step.number}>
                            <h2>{step.number}</h2>
                            <h3>{step.title}</h3>
                            <p>{step.description}</p>
                        </section>
                    ))}
                </div>
            </section>
        </main>
    );
}

export default Find;
