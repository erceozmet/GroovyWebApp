
import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Card,Container, Row, Col} from 'react-bootstrap';

class ShopList extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            items: [],
            isLoaded: false
        }

    
    }
    componentDidMount() {
        fetch("http://localhost:5000/items/list")
        .then(response => response.json())
        .then( responseJson => {
          this.setState({ items: responseJson.data, isLoaded: true });
        },
    )}

    
    render(){

        return(
            <div>
                {
                this.state.isLoaded ? 

                <Container fluid >
                    <Row  sm = {1} md={2} lg = {3} xl = {5}>

                        {this.state.items.map((item) => (
                            <Col>
                            <Card className = "item" id = {item._id} style={{ width: '18rem', margin: '1em 2em 1em'}}>
                                <Card.Img variant="top" src="logo192.png" />
                                <Card.Body>
                                <Card.Title>{item.itemName}</Card.Title>
                                <Card.Text>
                                    {item.description}
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>:
                <h1>Loading</h1>
                }
               
            </div>
            
        )
    }

    

}

export default ShopList


//Implement Mapping Function