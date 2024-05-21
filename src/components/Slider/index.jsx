import { useKeenSlider } from "keen-slider/react"

import "keen-slider/keen-slider.min.css"

import { Container } from "./styles";

import { Card } from "../Card";

export function Slider() {

    const [sliderRef] = useKeenSlider({
        loop: true,
        mode: "free",
        slides: {
            perView: 1,
            spacing: 15,
        },
        breakpoints: {
            '(min-width: 425px)': {
                slides: {
                    perView: 1,
                    spacing: 20,
                }
            },
            '(min-width: 768px)': {
                slides: {
                    perView: 2,
                    spacing: 20,
                }
            },
            '(min-width: 1024px)': {
                slides: {
                    perView: 3,
                    spacing: 15,
                }
            },
            '(min-width: 1366px)': {
                slides: {
                    perView: 4,
                    spacing: 15,
                }
            },
            '(min-width: 1440px)': {
                slides: {
                    perView: 5,
                    spacing: 15,
                }
            },
            '(min-width: 2560px)': {
                slides: {
                    perView: 8,
                    spacing: 15,
                }
            },
        },
    });

    return (
        <Container ref={sliderRef} className="keen-slider">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </Container>
    );
}