import { Card } from 'react-bootstrap';
import './style.css';

const Cardfilm = (props) => {
    return (
        <Card>
            <Card.Img className='imgcard' variant='top' src={props.gambar}/>
            <Card.Body>
                <Card.Title>{props.judul}</Card.Title>
                <Card.Text>
                    Show
                </Card.Text>
                <a href={props.judul} className="btn btn-primary">Go{props.judul}</a>
            </Card.Body>
        </Card>
    )
}
export default Cardfilm;
