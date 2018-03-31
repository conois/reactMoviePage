import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import './../../../index.css'
//components


class Slider extends Component {
    render(){
        return (
            <Carousel className='separateTop'>
                <Carousel.Item>
                    <img className='topMiddle' alt="900x500" src={this.props.photo1} />
                    <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className='topMiddle' alt="900x500" src={this.props.photo2}/>
                    <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className='topMiddle'  alt="900x500" src={this.props.photo3} />
                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                </Carousel>
        )
    }
}

  export default Slider
  
