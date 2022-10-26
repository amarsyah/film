import { Container, Row, Col } from 'react-bootstrap';
import Logo from '.././assets/images/cinema/c.png';

const Footer = () => {
    return (
        <div className='bg-dark text-muted py-5 footer'>
            <Container>
                <Row>
                    <Col className='text-center'>
                        <img src={Logo} alt="Cinema_21" width="1200px" />
                        <p>Copyright &copy; Musthofal Amarsyah - 2022</p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default Footer;