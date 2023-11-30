import ItemCardapio from "../components/ItemCardapio"
import { Col, Row } from "reactstrap"
import burguer from '../images/burguer.jpg';
import comida from '../images/comida.jpg';
import pizza from '../images/pizza.jpg';
import coxinha from '../images/coxinha.jpg';
import sushi from'../images/sushi.jpg'
import empada from '../images/empada.jpg';
import mexican from '../images/mexican2.jpg';
import yaki from'../images/yaki.jpg'
function Cardapio() {
        return (
<div>
            <Row>
                <Col>
                <h1 className="display-4 text-center">Nosso Cardapio</h1>
                </Col>
            </Row>
            <Row className="mt-3">
            <Col>
                <ItemCardapio  titulo="Hamburguer" img={burguer} descricao="O hambúrguer é um prato popular composto por carne moída temperada, geralmente de boi, frango ou vegetais."/>
            </Col>
            <Col>
                <ItemCardapio titulo="Comida" img={comida} descricao="A culinária brasileira é uma festa de sabores. Caracteriza-se pela rica mistura de influências indígenas, africanas, europeias e asiáticas."/>
            </Col>
            <Col>
                <ItemCardapio titulo="Pizza" img={pizza} descricao="A pizza é um prato de origem italiana que se tornou uma das comidas mais amadas em todo o mundo.  É assada em forno, deliciosa combinação de sabores." />
            </Col>
            <Col>
                <ItemCardapio titulo="Coxinha" img={coxinha} descricao="A coxinha é um quitute salgado originário da culinária brasileira. Após ser empanada e frita, a coxinha torna-se crocante por fora e suculenta por dentro." />
            </Col>
        </Row>
        <Row className="mt-3">
            <Col>
                <ItemCardapio titulo="Sushi" img={sushi} descricao="
Sushi é um prato japonês popular que consiste em pequenas porções de arroz temperado com vinagre, açúcar e sal, frequentemente combinado com peixe cru, frutos do mar, vegetais ou ovo." />
            </Col>
            <Col>
                <ItemCardapio titulo="Empada" img={empada} descricao="Empada é um pequeno quitute salgado ou doce, composto por uma massa amanteigada e macia, geralmente feita com farinha de trigo."  />
            </Col>
            <Col>
                <ItemCardapio titulo="Comida Mexicana" img={mexican} descricao="A culinária mexicana é conhecida por sua riqueza de sabores e ingredientes vibrantes." />
            </Col>
            <Col>
                <ItemCardapio titulo="Yakisoba" img={yaki} descricao="O yakisoba é um prato japonês de macarrão frito, que geralmente inclui legumes, carne e molho de soja." />
            </Col>
        </Row>
    </div>
        )
    }
export default Cardapio