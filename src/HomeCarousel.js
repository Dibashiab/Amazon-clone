import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import AmazonImage1 from './assets/images/amazon-newyear-newdeals_.jpg';
import AmazonImage2 from './assets/images/amazon-ship-to-45-million.jpg';
import AmazonImage3 from './assets/images/amazon-shop-toys&games.jpg';
import AmazonImage4 from './assets/images/amazon-refresh-your-space.jpg';
import AmazonImage5 from './assets/images/amazon-discover-our-beauty.jpg';


const HomeCarousel = () => {
    return (
        
      <Carousel fade={true} pause={false} indicators={false}>
      <Carousel.Item interval={2000}>
        <img
          className="home__image d-block w-100"
          src={AmazonImage1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="home__image d-block w-100"
          src={AmazonImage2}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="home__image d-block w-100"
          src={AmazonImage3}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="home__image d-block w-100"
          src={AmazonImage4}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="home__image d-block w-100"
          src={AmazonImage5}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>   
       
    )
}

export default HomeCarousel;
