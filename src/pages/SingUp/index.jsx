import { Container, Form } from "./styles";

import { Brand } from "../../components/Brand";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";

export function SingUp() {
    return (
        <Container>

            <Brand />

            <Form>

                <h1>Crie sua conta</h1>

                <Input
                    type="text"
                    label="Seu nome"
                    placeholder="Exemplo: Maria da Silva"
                />

                <Input
                    type="text"
                    label="Email"
                    placeholder="Exemplo: exemplo@exemplo.com.br"
                />

                <Input
                    label="Senha"
                    type="password"
                    placeholder="No mínimo 6 caracteres"
                />

                <Button title="Criar conta" />

                <ButtonText title={"Já tenho uma conta"} />

            </Form>
        </Container>
    );
}