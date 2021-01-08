
import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Card,Container, Row, Col} from 'react-bootstrap';

class ShopList extends React.Component{
    constructor(){
        super()
        this.CuratedList = this.CuratedList.bind(this)
    }
    CuratedList(){
        return(
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="logo192.png" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        );    
    }

    render(){
        return(
            <Container>
                
                <Col>
                    <Row >
                        <Col>
                        {this.CuratedList()}
                        </Col>
                        <Col>
                        {this.CuratedList()}
                        </Col>
                    </Row>
                    <Row >
                        <Col>
                        {this.CuratedList()}
                        </Col>
                        <Col>
                        {this.CuratedList()}
                        </Col>
                    </Row>
                </Col>
            </Container>
        )
    }

    

}

export default ShopList