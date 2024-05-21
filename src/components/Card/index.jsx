import { Container, Dish, Options } from "./styles";

import { Button } from "../Button";

import { HeartStraight, Plus, Minus } from "@phosphor-icons/react";

import saladaRavanello from "../../assets/salada_ravanello.png";

export function Card(){
    return(
        <Container className="keen-slider__slide number-slide1">
            <Dish src={saladaRavanello} />

            <h3>Salada Ravanello &gt;</h3>

            <p>Rabanetes, folhas verdes e mollho agridoce salpicados com gergilim</p>

            <h4>R$ 49,97</h4>
            
            <Options>
                <div>
                    <Button icon={<Minus />} />
                    <span>01</span>
                    <Button icon={<Plus />} />
                </div>
                <Button title="incluir" />
            </Options>
            
            <Button icon={<HeartStraight />} />
        </Container>
    );
}