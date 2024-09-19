import React, { useState, useEffect } from "react";
import {
    CarouselProvider,
    Slider,
    Slide,
    ButtonBack,
    ButtonNext,
    Image,
} from "pure-react-carousel";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "pure-react-carousel/dist/react-carousel.es.css";

export default function HomePageCarousel() {
    const images = [
        {
            src: "/images/content/dashboard.png",
            caption: "Vue du panneau de configuration",
        },
        {
            src: "/images/content/matchs_dashboard.png",
            caption: "Vue de la page de gestion des matchs",
        },
        {
            src: "/images/content/volunteers.png",
            caption: "Vue de la page de gestion des bénévoles",
        },
        {
            src: "/images/content/match_add.png",
            caption: "Vue de la page d'ajout de match",
        },
        {
            src: "/images/content/team_password.png",
            caption: "Vue de la gestion du mot de passe de l'équipe",
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [userInteracted, setUserInteracted] = useState(false);

    const handlePrevClick = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
        setUserInteracted(true);
    };

    const handleNextClick = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
        setUserInteracted(true);
    };

    return (
        <section className="carousel-container mt-8">
            <div className="relative w-full max-w-4xl mx-auto">
                <CarouselProvider
                    interval={5000}
                    naturalSlideWidth={100}
                    naturalSlideHeight={50}
                    totalSlides={images.length}
                    currentSlide={currentIndex}
                    infinite={true}
                    isPlaying={!userInteracted}
                >
                    <Slider>
                        {images.map((image, index) => (
                            <Slide index={index} key={index}>
                                <Image
                                    src={image.src}
                                    alt={image.caption}
                                    hasMasterSpinner={false}
                                />
                            </Slide>
                        ))}
                    </Slider>
                    <ButtonBack
                        className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer bg-transparent border-none"
                        onClick={handlePrevClick}
                    >
                        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full">
                            <FontAwesomeIcon icon={faArrowLeft} />
                            <span className="sr-only">Précédent</span>
                        </span>
                    </ButtonBack>
                    <ButtonNext
                        className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer bg-transparent border-none"
                        onClick={handleNextClick}
                    >
                        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full">
                            <FontAwesomeIcon icon={faArrowRight} />
                            <span className="sr-only">Suivant</span>
                        </span>
                    </ButtonNext>
                </CarouselProvider>
                <div className="text-center mt-4">
                    <p className="text-lg text-gray-700">
                        {images[currentIndex].caption}
                    </p>
                </div>
            </div>
        </section>
    );
}
