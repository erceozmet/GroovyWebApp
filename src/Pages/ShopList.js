
import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Card,Container, Row, Col} from 'react-bootstrap';

class ShopList extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            items: []
        }

        this.ListifyItems = this.ListifyItems.bind(this)
        this.CuratedList = this.CuratedList.bind(this)
    }
    componentDidMount() {
        fetch("http://localhost:5000/items/list")
        .then(response => response.json())
        .then( responseJson=> {
          this.setState({ items: responseJson.data });
        },
    )}

    CuratedList(){
        return(
            <Card style={{ width: '18rem', margin: '1em 2em 1em'}}>
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

    ListifyItems(count){
        
        const final = [];

        for (let i = 0; i < count; i++) {
            final.push(<Col md>{this.CuratedList()}</Col>);
        }
        return (
            final
        );
        
    }
    render(){
        return(
            <div>
                <Container fluid >
                <Row  sm = {1} md={2} lg = {3} xl = {4}>
                    {this.ListifyItems(10)}
                </Row>
               
                </Container>
            </div>
            
        )
    }

    

}

export default ShopList


//Implement Mapping Function