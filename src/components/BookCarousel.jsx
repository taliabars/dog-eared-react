
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
        link: "/book/1"
    },
    {
        title: "The Hawthorne Legacy",
        author: "Jennifer Lynn Barnes",
        image: "hawthorne-legacy.jpg",
        link: "/book/2"
    },
    {
        title: "People We Meet on Vacation",
        author: "Emily Henry",
        image: "people-vacation.jpg",
        link: "/book/4"
    },
    {
        title: "Heart Bones",
        author: "Colleen Hoover",
        image: "heart-bones.jpg",
        link: "/book/5"
    },
    {
        title: "The Seven Year Slip",
        author: "Ashley Poston",
        image: "seven-year-slip.jpg",
        link: "/book/10"
    },
    {
        title: "Love & Olives",
        author: "Jenna Evans Welch",
        image: "love-olives.jpg",
        link: "/book/3"
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
                            <Link
                                to={book.link}
                                aria-label={`View ${book.title}`}
                            >
                                <img
                                    src={`${import.meta.env.BASE_URL}images/${book.image}`}
                                    alt={book.title}
                                />
                            </Link>

                            <h3>{book.title}</h3>
                            <p>{book.author}</p>

                            <Link className="button" to={book.link}>
                                View Book →
                            </Link>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}

export default BookCarousel;
