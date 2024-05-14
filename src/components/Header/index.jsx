import { List, Receipt } from "@phosphor-icons/react";

import { Container, Menu } from "./styles";

import { Brand } from "../Brand";

export function Header({ onOpenMenu }){
    return(
        <Container>

            <Menu onClick={onOpenMenu}>
                <List />
            </Menu>

            <Brand />
            
            <Menu>
                <Receipt />
            </Menu>
        </Container>
    );
}