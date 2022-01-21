import React from "react";
// import { Link } from "react-router-dom";
import "./Home.css";
import HomeCarousel from "./HomeCarousel";
import Homenotice from "./Homenotice";

import Product from "./Product";
const Home = () => {
  return (
    <div className="home ">
      <div className="home__container">
        {/* <img
          className="home__image"
          src="https://m.media-amazon.com/images/I/711Y9Al9RNL._SX3000_.jpg"
          alt="bunner"
        /> */}
        <HomeCarousel />
        <div className="home__row">
          <Product 
            id="12321341"
            title="The Road to React: Your journey to master plain yet pragmatic React.js"
            price={29.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/511-vIg1HaL._AC_UY218_.jpg" 
            />
          <Product  
            id="49538094"
            title="Double Pump Mens Button Down Shirts 100% Cotton Long Sleeve Shirts Regular Fit"
            price={29.24}
            rating={5}
            image="https://m.media-amazon.com/images/I/81gl3CDeAIL._AC_SR135,135_.jpg" 
          />
        </div>
        <div className="home__row">
          <Product   
            id="4903850"
            title="Amazon Basics Executive Office Desk Chair with Armrests, Adjustable Height/Tilt, 360-Degree Swivel, 275Lb Capacity - Black/Pewter"
            price={160.91}
            rating={4}
            image="https://m.media-amazon.com/images/I/71UQ3ltXXpL._AC_SL1500_.jpg" />
          <Product  
           id="23445930"
            title="Seagate Portable 2TB External Hard Drive Portable HDD – USB 3.0 for PC, Mac, PlayStation, & Xbox - 1-Year Rescue Service (STGX2000400)"
            price={64.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/81tjLksKixL._AC_UL320_.jpg" />
          <Product  
            id="3254354345"
            title="New Apple  MacBook Pro (16-inch, 16GB RAM, 1TB Storage, 2.3GHz Intel Core i9) - Silver"
            price={2799.00}
            rating={5}
            image="https://m.media-amazon.com/images/I/81p5n9MO4QL._AC_SL1500_.jpg"/>
        </div>
        <div className="home__row">
        <Product 
            id="90829332"
            title="SAMSUNG 49-inch Odyssey G9 Gaming Monitor | QHD, 240hz, 1000R Curved, QLED, NVIDIA G-SYNC & FreeSync | LC49G95TSSNXZA Model"
            price={1775.78}
            rating={5}
            image="https://m.media-amazon.com/images/I/61SQz8S+fEL._AC_SL1000_.jpg"/>
        </div>
        <div className="home__row">
          <Product 
            id="90829332"
            title="Garmin 010-01689-00 Forerunner 35; Easy-to-Use GPS Running Watch, Black"
            price={112.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/71Jr+ZCusbL._AC_SL1500_.jpg"/>
          <Product 
            id="90829332"
            title="Reebok Men's Classic Vector"
            price={27.50}
            rating={4}
            image="https://m.media-amazon.com/images/I/61RJmCS4RiL._AC_UL320_.jpg"/>
         
            
          <Product 
            id="90829332"
            title="Nike Men's Sportwear Club Shorts"
            price={39.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/71Ew+yRfqWL._AC_UX522_.jpg"/>
          <Product 
            id="90829333"
            title="Nikon D3500 DX-Format DSLR Two Lens Kit with AF-P DX, Black"
            price={699.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/61MBHqoM6KL._AC_SL1000_.jpg"/>
        </div>
        <div className="home__row">
          <Product 
            id="12321341"
            title="HP 24 Pavilion All-in-One PC, 10th Gen Intel i7-10700T Processor, 16 GB RAM, Dual Storage 512 GB SSD and 1TB HDD"
            price={1659.97}
            rating={5}
            image="https://m.media-amazon.com/images/I/81S7qcgHISS._AC_UY218_.jpg" 
            />
          <Product  
            id="49538094"
            title="LimoStudio, 700W Output Lighting Series, LMS103, Soft Continuous Lighting Kit for White and Black Umbrella Reflector with Accessory and Carry Bag"
            price={77.10}
            rating={4}
            image="https://m.media-amazon.com/images/I/71-MiI4cf7L._AC_UY218_.jpg" 
          />
        </div>
        <br/>
      </div>
     <Homenotice />
 
</div>
  );
};
export default Home;
