
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./BookCarousel.css";

const books = [
    {
        title: "The Seven Husbands of Evelyn Hugo",
        author: "Taylor Jenkins Reid",
        image: "evelyn-hugo.jpg",
        link: "/book"
    },
    {
        title: "The Hawthorne Legacy",
        author: "Jennifer Lynn Barnes",
        image: "hawthorne-legacy.jpg"
    },
    {
        title: "People We Meet on Vacation",
        author: "Emily Henry",
        image: "people-vacation.jpg"
    },
    {
        title: "Heart Bones",
        author: "Colleen Hoover",
        image: "heart-bones.jpg"
    },
    {
        title: "The Seven Year Slip",
        author: "Ashley Poston",
        image: "seven-year-slip.jpg"
    },
    {
        title: "Love & Olives",
        author: "Jenna Evans Welch",
        image: "love-olives.jpg"
    }
];

function BookCarousel() {
    return (
        <section className="book-carousel-section">
            <h2>More Books to Love</h2>

            <p>
                Swipe through some more of my favorite recommendations.
            </p>

            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={25}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false
                }}
                breakpoints={{
                    600: {
                        slidesPerView: 2
                    },
                    900: {
                        slidesPerView: 3
                    }
                }}
                className="book-swiper"
            >
                {books.map((book) => (
                    <SwiperSlide key={book.title}>
                        <div className="carousel-book">
                            <img
                                src={`${import.meta.env.BASE_URL}images/${book.image}`}
                                alt={book.title}
                            />

                            <h3>{book.title}</h3>
                            <p>{book.author}</p>

                            {book.link && (
                                <Link className="button" to={book.link}>
                                    View Book →
                                </Link>
                            )}
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}

export default BookCarousel;
