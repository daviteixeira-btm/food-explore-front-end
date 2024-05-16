import { X } from "@phosphor-icons/react";

import { Container, Header, Button, Nav } from "./styles";

import { Input } from "../Input";
import { Footer } from "../Footer";

export function SideMenu({ menuIsOpen, onCloseMenu }){
    return(
        <Container data-menu-is-open={menuIsOpen}>
            <Header>
                {
                    menuIsOpen &&
                    <Button onClick={onCloseMenu}>
                        <X />
                    </Button>
                }

                <h1>Menu</h1>
            </Header>

            <Nav>
                <ul>
                    <li>
                        <Input
                            type="text"
                            label="Pesquisar"
                            placeholder="Busque por pratos ou ingredientes"
                        />
                    </li>
                    <li>
                        <a href="#">Sair</a>
                    </li>
                </ul>
            </Nav>

            <Footer />
        </Container>
    );
}