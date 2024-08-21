import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import bteaimg from '../images/Black-Tea-.webp'
import gteaimg from '../images/Greentea.png'
import lteaimg from '../images/Lemon tea.jpg'
import { Link } from 'react-router-dom'


function FourthCard() {
    return (
        <>
            <div className="cointainer ">
                <div className="row ">
                    <div className="col d-flex justify-content-center pt-4">
                        <Card className='blackteaht m-2 ' style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={bteaimg} />
                            <Card.Body>
                                <Card.Title style={{ fontSize: "16px" }}>Black Tea 500g-290 Rs </Card.Title>
                            </Card.Body>
                        </Card>
                        <Card className='blackteaht m-2' style={{ width: '18rem', fontSize: "18px" }}>
                            <Card.Img variant="top" src={gteaimg} />
                            <Card.Body>
                                <Card.Title style={{ fontSize: "16px" }}>Green Tea 500g-380Rs </Card.Title>
                            </Card.Body>
                        </Card>
                        <Card className='blackteaht m-2' style={{ width: '18rem', fontSize: "18px" }}>
                            <Card.Img variant="top" src={lteaimg} />
                            <Card.Body>
                                <Card.Title style={{ fontSize: "16px" }}>Citrus Bliss 500g-780 Rs </Card.Title>
                            </Card.Body>

                        </Card>
                    </div>
                </div>

                <Button variant="primary" className='showmorebtn'>
                    <Link to="/shopnow"> Show More Products</Link>
                </Button>
            </div>
        </>
    );
}

export default FourthCard;