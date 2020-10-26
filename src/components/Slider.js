import React, { Component } from 'react'  
import "slick-carousel/slick/slick.css";  
import "slick-carousel/slick/slick-theme.css";  
import Slider from "react-slick";
import header from "../assets/images/Header1.jpg";
import header2 from "../assets/images/Header2.jpg";
import header3 from "../assets/images/Header3.jpg";

export class SlickDemo extends Component {  
    render() {  
        var settings = {  
          dots: true,  
          infinite: true,  
          speed: 500,  
          centerMode: true,  
          slidesToShow: 1,  
          slidesToScroll: 1  
          };  
          return (  
            <div>  
                <Slider {...settings} >
                    <div className="wdt">  
                        <img  className="img" src= {header} className="img"/>  
                    </div>  
                    <div className="wdt">  
                        <img  className="img" src= {header2} className="img"/>  
                    </div >  
                    <div className="wdt">  
                        <img  className="img" src= {header3} className="img"/>  
                    </div>
                </Slider>  
            </div>  
          );  
        }  
      }  
  
export default SlickDemo  