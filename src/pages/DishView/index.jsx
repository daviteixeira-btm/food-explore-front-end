import { Container, DishInformation, Dish } from "./styles";

import { Header } from "../../components/Header";
import { IngredientTag } from "../../components/IngredientTag";
import { Button } from "../../components/Button";
import { Footer } from "../../components/Footer";

import { Plus, Minus, Receipt } from "@phosphor-icons/react";

import saladaRavanello from "../../assets/salada_ravanello.png";

export function DishView(){
    return(
        <Container>
            <Header />
            
            <DishInformation>
                <a href="#">&lt; Voltar</a>
                <Dish src={saladaRavanello} />

                <h1>Salada Ravanello</h1>

                <h2>
                    Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.
                </h2>

                <div>
                    <IngredientTag title="alfase" />
                    <IngredientTag title="cebola" />
                    <IngredientTag title="pão naan" />
                    <IngredientTag title="pepino" />
                    <IngredientTag title="rabanete" />
                    <IngredientTag title="tomate" />
                </div>

                <div>
                    <div>
                        <Button icon={<Minus />} />
                        <span>01</span>
                        <Button icon={<Plus />} />
                    </div>
                    <Button icon={<Receipt />} title="pedir - R$ 00,00" />
                </div>

            </DishInformation>

            <Footer />
        </Container>
    );
}