import { Container } from "./styles";

import logo from "../../../public/logo.svg";

export function Brand(){
    return(
        <Container>
            <img src={logo} />
            <span>food explorer</span>
        </Container>
    );
}