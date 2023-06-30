import React from 'react'
import'./Portfolio.css'
import {Swiper, SwiperSlide} from "swiper/react";
import Portfolioimg from "../../img/Portfolio.png";
import Ecommerce from "../../img/ecommerce.png";
import HOC from "../../img/hoc.png";
import Musicapp from "../../img/musicapp.png";
import "swiper/css";
import { themeContext } from '../../Context'
import { useContext } from 'react'





  


  


export default function Portfolio() {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id='Portfolio'>
        {/*heading */}
        <span style={{color: darkMode? 'white': ''} }>Recent Projects</span>
        <span>Portfolio</span>

        {/*Slider */}

        <Swiper 
        spaceBetween={1}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"      
      >
          
            <SwiperSlide>
                <img src={Portfolioimg} alt="" />
            </SwiperSlide>

            <SwiperSlide>
                <img src={Ecommerce} alt="" />
            </SwiperSlide>{""}
           
            <SwiperSlide>
                <img src={Musicapp} alt="" />
            </SwiperSlide>
           
            <SwiperSlide>
                <img src={HOC} alt="" />
            </SwiperSlide>

        </Swiper>
    </div> 
  )
}
