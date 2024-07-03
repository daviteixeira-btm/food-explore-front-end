import { useState } from "react";

import { Container } from "./styles";

import { Header } from "../../components/Header";

import { SideMenu } from "../../components/SideMenu";

import { TopBanner } from "../../components/TopBanner";
import { Section } from "../../components/Section";
import { Slider } from "../../components/Slider";
import { Footer } from "../../components/Footer";

export function Home(){

    const [menuIsOpen, setMenuIsOpen] = useState(false);

    return(
        <Container>
            <Header onOpenMenu={() => setMenuIsOpen(true)} />

            <main>
                <SideMenu
                    menuIsOpen={menuIsOpen}
                    onCloseMenu={() => setMenuIsOpen(false)}
                />
                    
                <Section>
                    <TopBanner />
                </Section>

                <Section title={"Refeições"}>
                    <Slider />
                </Section>

                <Section title={"Pratos principais"}>
                    <Slider />
                </Section>
            </main>

            <Footer />
        </Container>       
    );
}