import { Row, Col } from "reactstrap";
import CarouselInicio from "../components/CarouselInicio";
import ItemCardapio from "../components/ItemCardapio";
import burguer from '../images/burguer.jpg';
import comida from '../images/comida.jpg';
import pizza from '../images/pizza.jpg';
import coxinha from '../images/coxinha.jpg';

function Home() {
    return (
        <div>
            <Row>
                <Col>
                    {/* Aqui vai o Carousel */}
                    <CarouselInicio />
                </Col>
            </Row>
            <Row>
                <Col className="text-center my-3">
                    <h1>Mais pedidos</h1>
                </Col>
            </Row>
            <Row>

                <Col>
                <ItemCardapio titulo="Burguer" img={burguer} descricao="O hambúrguer, também conhecido como hamburgo, hamburguesa ou sanduíche de carne, é um preparado de carne temperada e moldada em formato circular." />
                </Col>

                <Col>
                <ItemCardapio titulo="Comida Brasileira" img={comida} descricao="A culinária brasileira é rica, saborosa e diversificada. Cada um dos estados brasileiros tem seus pratos típicos, de acordo com as tradições." />
                </Col>

                <Col>
                <ItemCardapio titulo="Pizza" img={pizza} descricao="Pizza ou piza é uma preparação culinária que consiste em um disco de massa fermentada de farinha de trigo, coberto com molho de tomate."/>
                </Col>

                <Col>
                <ItemCardapio titulo="Coxinha"img={coxinha} descricao="A coxinha é um salgado brasileiro, de origem paulista, feito com massa de farinha de trigo e caldo de galinha, que envolve um recheio elaborado com carne." />
                </Col>
            </Row>
        </div> 
    )
}
export default Home