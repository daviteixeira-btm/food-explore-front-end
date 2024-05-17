import { Container } from "./styles";

import sabores from "../../assets/sabores.png";
import sabores_laptop from "../../assets/sabores_laptop.png";

export function TopBanner(){
    return(
        <Container>
            <img src={sabores} />
            <img src={sabores_laptop} />
            <div>
                <h2>Sabores inigualáveis</h2>
                <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
            </div>
        </Container>
    );
}