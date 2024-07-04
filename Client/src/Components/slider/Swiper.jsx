import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import banner1 from "../assets/banner1.jpg";
import banner2 from "../assets/banner2.jpg";
import banner3 from "../assets/banner3.jpg";
import './swiper.css';


const slideImages = [
banner1,
banner2,
banner3,
banner1
];
const Swiper = () => {
  return (
    <div className="slide-container">
      <Slide>
        {slideImages.map((each, index) => (
          <div key={index} className="each-slide">
            <img src={each} alt={`slide ${index}`} className="slide-image" />
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default Swiper
