import { Container, Content, Links } from "./styles";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { Tag } from "../../components/Tag";
import { ButtonText } from "../../components/ButtonText";

export function Details() {
  return (
    <Container>
      <Header />

      <main>
        <Content>
          <ButtonText title="Editar" />
          <h1>Introdução ao React</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            dignissimos sint assumenda harum atque quidem voluptatibus
            temporibus autem ab id enim repudiandae veniam molestiae, eligendi
            expedita vero earum mollitia error.
          </p>
          <Section title="Links úteis">
            <Links>
              <li>
                <a href="">https://www.rocketseat.com.br/</a>
              </li>
              <li>
                <a href="">https://www.rocketseat.com.br/</a>
              </li>
            </Links>
          </Section>

          <Section title="Marcadores">
            <Tag title="express" />
            <Tag title="node" />
          </Section>

          <Button title="Voltar" />
        </Content>
      </main>
    </Container>
  );
}
