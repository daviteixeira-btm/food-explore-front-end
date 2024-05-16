import { List, Receipt, SignOut } from "@phosphor-icons/react";

import { Container, Menu } from "./styles";

import { Brand } from "../Brand";
import { Input } from "../Input";
import { Button } from "../Button";

export function Header({ onOpenMenu }){
    return(
        <Container>

            <Menu onClick={onOpenMenu}>
                <List />
            </Menu>

            <Brand />

            <Input
                type="text"
                placeholder="Busque por pratos ou ingredientes"
            />
            
            <Button icon={<Receipt />} title="Pedidos (0)" />

            <Button icon={<Receipt />} />

            <Button icon={<SignOut />} />
            
        </Container>
    );
}