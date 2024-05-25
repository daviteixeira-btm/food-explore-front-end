import { useState } from "react";

import { Container, Section } from "./styles";

import { Header } from "../../components/Header";

import { SideMenu } from "../../components/SideMenu";

import { Footer } from "../../components/Footer";
import { TopBanner } from "../../components/TopBanner";
import { Slider } from "../../components/Slider";

export function Home(){

    const [menuIsOpen, setMenuIsOpen] = useState(false);

    return(
        <Container>
            <Header onOpenMenu={() => setMenuIsOpen(true)} />

            <SideMenu
                menuIsOpen={menuIsOpen}
                onCloseMenu={() => setMenuIsOpen(false)}
            />

            <Section>
                <TopBanner />
            </Section>

            <Section>
                <h2>Refeições</h2>
                <Slider />
            </Section>

            <Section>
                <h2>Pratos principais</h2>
                <Slider />
            </Section>

            <Footer />
        </Container>       
    );
}