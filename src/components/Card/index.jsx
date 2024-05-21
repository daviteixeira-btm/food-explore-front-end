import { Container, Dish, Options } from "./styles";

import { Button } from "../Button";

import { HeartStraight, Plus, Minus } from "@phosphor-icons/react";

import saladaRavanello from "../../assets/salada_ravanello.png";

export function Card(){
    return(
        <Container className="keen-slider__slide number-slide1">
            <Dish src={saladaRavanello} />
            
            <h3>Salada Ravanello</h3>
            <h4>R$ 49,97</h4>
            
            <Options>
                <Button icon={<Minus />} />
                <span>01</span>
                <Button icon={<Plus />} />
            </Options>
            
            <Button title="incluir" />
            <Button icon={<HeartStraight />} />
        </Container>
    );
}