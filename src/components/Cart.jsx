import { Row, Col, ListGroup, Button } from 'react-bootstrap';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const Cart = ({ cart, calculateTotalPrice, removeFromCart, clearCart }) => {
    const totalPrice = calculateTotalPrice(); // Get the total price of the cart

    return (
        <section className='cartSection'>
            <div className='container text-center py-4 px-0'>
                {cart.length === 0 ? (
                    <>
                        <h2>Your Cart</h2>
                        <h4 className='pt-4'><b>Cart is empty!</b></h4>
                        <button className='shopnowbtn px-0 py-2'>
                            <Link to="/shopnow">Shop Now</Link>
                        </button>
                    </>
                ) : (
                    <>
                        <h2>Your Cart</h2>
                        <Row className='py-4'>
                            <Col md={4}>
                                <h4>Product</h4>
                            </Col>
                            <Col md={4}>
                                <h4>Quantity</h4>
                            </Col>
                            <Col md={4}>
                                <h4>Total Price</h4>
                            </Col>
                        </Row>
                        <ListGroup variant="flush">
                            {cart.map((product) => (
                                <ListGroup.Item key={product.id}>
                                    <Row>
                                        <Col md={4}>
                                            <strong>{product.name}</strong> - Rs {product.price} x {product.quantity}
                                        </Col>
                                        <Col md={4}>
                                            <Button variant="danger" onClick={() => removeFromCart(product)}>
                                                <RiDeleteBin5Line /> Remove
                                            </Button>
                                        </Col>
                                        <Col md={4}>
                                            = Rs {product.totalPrice}
                                        </Col>
                                    </Row>
                                </ListGroup.Item>
                            ))}

                            <div className='py-2 d-flex justify-content-end align-items-center'>
                                <h5 className='totalprice pt-3'>Total Price: Rs {totalPrice}</h5>
                            </div>
                            <div>
                                <h6 className='endline text-end'>Taxes and shipping calculated after placing order</h6>
                            </div>
                            <div className='d-flex justify-content-center align-items-center'>
                                <Link to={{ pathname: "/checkout", state: { amount: totalPrice } }}>
                                    <button className='placeorderProd pt-2'>Place Order</button>
                                </Link>
                                <Button variant="warning" className='clearallProd ms-3' onClick={clearCart}>Clear All</Button>
                            </div>
                        </ListGroup>
                    </>
                )}
            </div>
        </section>
    );
};

export default Cart;
