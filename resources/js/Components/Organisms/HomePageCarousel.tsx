import {
    CarouselProvider,
    Slider,
    Slide,
    ButtonBack,
    ButtonNext,
    Image,
    Dot,
    DotGroup,
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

    return (
        <section className="carousel-container my-4">
            <div className="relative w-full max-w-4xl mx-auto">
                <CarouselProvider
                    naturalSlideWidth={100}
                    naturalSlideHeight={50}
                    totalSlides={images.length}
                    isPlaying={true}
                    dragEnabled
                    infinite
                >
                    <Slider>
                        {images.map((image, index) => (
                            <Slide index={index} key={index}>
                                <Image
                                    src={image.src}
                                    alt={image.caption}
                                    hasMasterSpinner={false}
                                />
                                <div className="text-center mt-4">
                                    <p className="text-lg text-gray-700">
                                        {image.caption}
                                    </p>
                                </div>
                            </Slide>
                        ))}
                    </Slider>
                    <div className="flex items-center justify-between">
                        <ButtonBack className="bg-transparent border-none">
                            <FontAwesomeIcon icon={faArrowLeft} />
                        </ButtonBack>
                        <DotGroup className="bg-none border-none" />
                        <ButtonNext className="bg-transparent border-none">
                            <FontAwesomeIcon icon={faArrowRight} />
                        </ButtonNext>
                    </div>
                </CarouselProvider>
            </div>
        </section>
    );
}
