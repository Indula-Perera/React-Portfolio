import React from 'react'
import'./Portfolio.css'
import {Swiper, SwiperSlide} from "swiper/react";
import Sidebar from "../../img/sidebar.png";
import Ecommerce from "../../img/ecommerce.png";
import HOC from "../../img/hoc.png";
import Musicapp from "../../img/musicapp.png";
import "swiper/css";


export default function Portfolio() {
  return (
    <div className="portfolio">
        {/*heading */}
        <span>Recent Projects</span>
        <span>Portfolio</span>

        {/*Slider */}

        <Swiper 
        spaceBetween={1}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"      
      >
          
            <SwiperSlide>
                <img src={Sidebar} alt="" />
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