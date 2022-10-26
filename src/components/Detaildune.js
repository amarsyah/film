import { Container, Row, Col } from "react-bootstrap";

const Detaildune = () => {
    return (
        <Container fluid className="bg-dark my-5">
            <Container>
                <Row className="mt-3">
                    <Col className="bg-light p-3 rounded">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/w0HgHet0sxg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </Col>
                    <Col className="text-light">                 
                        <h2>Keterangan</h2>
                        <p>Ia rupanya punya kekuatan untuk mengontrol orang lain lewat suara, yang ternyata diturunkan dari sang ibu.</p>

                        <p>Ia lantas mengajari putranya bagaimana cara menggunakan kekuatan itu.</p>

                        <p>Sementara itu, penguasa planet Arrakis, Baron Harkonnen (Stellan Skarsgaard) berusaha menjebak dan mengkhianati orang-orang Atreides ini.</p>

                        <p>Duke, Lady Jessica, dan Lady Jessica sebenarnya tahu akan hal ini.</p>

                        <p>Namun, mereka tetap harus pergi mencari spice untuk rakyatnya.</p>
                    </Col>
                </Row>
                <Row>
                    <Col className="text-light">
                    <h2 className="mt-5">Sinopsis</h2>
                        <p>Sinopsis Dune kali ini menceritakan tentang perjalanan Duke

                        Atreides Oscar Isaac menjelajahi gurun bernama Dune untuk
                        mendapat sumber spice rempah-rempah.

                        Kekuatan spice yang luar biasa bisa membantu manusia 
                        berumur panjang, sangat cerdas, bahkan mampu menjelajahi

                        luar angkasa dengan kecepatan cahaya.</p>
                    </Col>
                </Row>

            </Container>
        </Container >
    )
}

export default Detaildune;