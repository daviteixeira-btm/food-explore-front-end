import { Container, Form } from "./styles";

import { Brand } from "../../components/Brand";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export function SingIn() {
    return (
        <Container>

            <Brand />

            <Form>

                <h1>Faça login</h1>

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

                <Button title="Entrar" />

                <a href="#">
                    Criar uma conta
                </a>

            </Form>
        </Container>
    );
}