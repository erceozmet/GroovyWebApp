
import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Card,Container, Row, Col} from 'react-bootstrap';


class AboutUs extends React.Component{
    
    constructor(){
        super()

    };

    render(){
        return(
            <>
            <Container fluid = 'lg'>
                
                    <Col>
                        <h1>Be different. Be Groovy</h1>
                        <h2>
                        Groovy means setting yourself apart from fast fashion and reinvesting in your community and environment instead of large corporations. 
                        Using Groovy you’ll not only help yourself, but also your neighbors and planet too. 
                        Help us repair the 10% of global carbon emissions and 20% of waste water production that fast fashion accounts for each year. Lets be Groovy together.
                        </h2>
                    </Col>
                   <br/>
                    <Col>
                        <h1>Sustainable. Effortless. Quality. That's Groovy.
                        </h1>
                        <h2>
                        Groovy wants to help combat fast fashion and expand the second hand clothing market to be more accessible for both sellers and buyers. Groovy’s goal is to help individuals and second hand stores sell their clothes online seamlessly. 
                        Groovy works to ensure the quality of each item repurposed so that everyone is happy with their new clothes.
                        </h2>
                    </Col>
                    <br/>
                    <Col>
                        <h1>Let us Spend Our Time, Not Yours</h1>
                        <h2>At Groovy we believe your time is valuable, so let us handle the hard part of shipping and handling so that you can chill.
                        When a Groovy customer buys something on our website, we schedule a time with the seller to pick up their goods and ensure the customer gets quality, clean products straight to their door.
                        </h2>
                    </Col>
                    <br/>
                    <Col>
                        <h1>Our Story</h1>
                        <h2>Groovy is made and run by environmentally and community health conscious Tufts University students who welcome your insight and feedback. 
                        Our goal is to hear you so that we can continue to improve and raise the standard of how to best be Groovy.  
                        </h2>
                    </Col>
   
            </Container>
            </>
        )
    }
}

export default AboutUs
