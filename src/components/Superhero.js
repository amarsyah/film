import { Container, Row, Col} from 'react-bootstrap'
import Batman from '.././assets/images/superhero/batman.jpg'
import Avenger from '.././assets/images/superhero/avenger.jpg'
import Robinhood from '.././assets/images/superhero/robinhood.jpg'
import Antman from '.././assets/images/superhero/antman.jpg'
import Spiderman from '.././assets/images/superhero/spiderman-cover.jpg'
import Superman from '.././assets/images/superhero/superman.jpg'
import Card from'./Cardfilm';

const Superhero = () => {
    return (
        <div className="superhero pt-5" id='superhero'>
            <Container className="py-3 text-center">
                <h1 className="text-light">SUPERHERO</h1>
                <Row>
                    <Col>
                    <Card gambar={Batman} judul="Batman"/>
                    </Col>
                    <Col>
                    <Card gambar={Antman} judul="Antman"/>
                    </Col>
                    <Col>
                    <Card gambar={Robinhood} judul="Robinhood"/>
                    </Col>
                </Row>
                <Row>                    
                    <Col>
                    <Card gambar={Avenger} judul="Avenger"/>
                    </Col>
                    <Col>
                    <Card gambar={Spiderman} judul="Spiderman"/>
                    </Col>
                    <Col>
                    <Card gambar={Superman} judul="Superman"/>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Superhero;