import React from "react";
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import slide1 from '../../assets/images/slider1.png';
import slide2 from '../../assets/images/prod1.png';
import slide3 from '../../assets/images/prod3.png';
import slide4 from '../../assets/images/slider4.png';

export const Slider = () => {
  const [index, setIndex] = useState(0);
  const imgArray = [
    {slide:slide1 ,title:'المنتج الأول' , description: "lorem sorem oni-chan baka des ga?", bg:'#a5637c'},
    {slide:slide2 ,title:'المنتج الثاني' , description: "lorem sorem oni-chan baka des ga?", bg:'#96c3d5'},
    {slide:slide3 ,title:'المنتج الثالث' , description: "lorem sorem oni-chan baka des ga?", bg:'#cbb0a0'},
    {slide:slide4 ,title:'المنتج الرابع' , description: "lorem sorem oni-chan baka des ga?", bg:'#9091c9'}
  ];
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
    {
      imgArray.map(el=>{
        return(
          
    <Carousel.Item style={{background:`${el.bg}`}}>
    <div className="slide-container">

      <img
        className="d-block w-100"
        src={el.slide}
        alt="First slide"
      />
      <div className="slide-text">
        <h3>{el.title}</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </div>
    </div>
    </Carousel.Item>
          
        )
      })
    }
    
  </Carousel>
  );
};
