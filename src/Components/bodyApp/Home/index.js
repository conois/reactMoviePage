
import React, { Component } from 'react';
import {Grid, Row, Col, Button} from 'react-bootstrap';

//components
import Slider from './slider.js';
import naranja from './imgCarousel/naranja_mecanica.jpg';
import efecto from './imgCarousel/efecto_mariposa.jpg';
import inception from './imgCarousel/inception.jpeg';

class Home extends Component {
  render() {
    return (
        <Grid>
            <Row>
                <Col md={6} lg={6} mdOffset={3} className='flexCenter topMiddle'>
                   <Slider photo1={naranja} photo2={efecto} photo3={inception}/>
                </Col>
            </Row>
            <Row>
                <Col md={3} lg={3} mdOffset={9}>
                    <Button> + peliculas </Button>
                </Col>
            </Row>
        </Grid>
    )
  }
};
export default Home

/*             <Row>
                <Col md={6} lg={6} className='flexCenter topMiddle'>
                    <Slider photo1='' photo2='' photo3=''/> 
                </Col>                
            </Row>*/
