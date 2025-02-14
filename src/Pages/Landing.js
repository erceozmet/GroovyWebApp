import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Card,Container, Row, Col} from 'react-bootstrap';
import Grid from '@material-ui/core/Grid';


class Landing extends React.Component {
    render(){
        return(
            <Container fluid = "lg">
                <Row>
                    <Col >
                        <img className="img-fluid" src = "Sketchpad.png"></img>
                    </Col>
                    <Col sm = {5}>
                
                        <Card>
                            <Card.Img variant="top" src="logo192.png" />
                            <Card.ImgOverlay>
                                <Card.Title>Check our Store</Card.Title>
                                <Card.Text>
                                Check out our vintage clothes. 
                                </Card.Text>
                                <Button variant="dark">Purchase</Button>
                                
                            </Card.ImgOverlay>
                        </Card>
                        
                    </Col>
                </Row>
                <br></br>
                <Row sm = {2} md={2} lg = {3}>  
                        <Col sm = {6}>
                        
                        <Card>
                                <Card.Img src="logo192.png" alt="Card image" />
                                <Card.ImgOverlay>
                                    <Card.Title>Weekly Deals</Card.Title>
                                    <Card.Text>
                                    Here is one of todays top deals. Don't miss out or I'll chop your dick off.
                                    </Card.Text>
                                </Card.ImgOverlay>
                        </Card>
        
                           
                        </Col>
                        <Col sm = {6}>
                            <Card>
                            <Card.Img src="logo192.png" alt="Card image" />
                                <Card.ImgOverlay>
                                    <Card.Title>Summer Groove</Card.Title>
                                    <Card.Text>
                                    New summer merch curated just for you.
                                    </Card.Text>
                                </Card.ImgOverlay>
                            </Card>
                        </Col>
                        <Col sm = {6}>
                        <Card>
                            <Card.Img src="logo192.png" alt="Card image" />
                                <Card.ImgOverlay>
                                    <Card.Title>Winter Groove</Card.Title>
                                    <Card.Text>
                                    New winter merch curated just for you.
                                    </Card.Text>
                                </Card.ImgOverlay>
                            </Card>
                        </Col>


                </Row>

            </Container>
        )
    }
}

export default Landing