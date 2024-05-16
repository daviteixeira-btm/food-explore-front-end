import { Container } from "./styles";

import { Brand } from "../Brand";

export function Footer(){
    return(
        <Container>
            <Brand />
            <span>© 2023 - Todos os direitos reservados.</span>
        </Container>
    );
}