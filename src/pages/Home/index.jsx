import { useState } from "react";

import { Container } from "./styles";

import { Header } from "../../components/Header";

import { SideMenu } from "../../components/SideMenu";

export function Home(){

    const [menuIsOpen, setMenuIsOpen] = useState(false);

    return(
        <Container>
            <Header onOpenMenu={() => setMenuIsOpen(true)} />

            <SideMenu
                menuIsOpen={menuIsOpen}
                onCloseMenu={() => setMenuIsOpen(false)}
            />
        </Container>       
    );
}