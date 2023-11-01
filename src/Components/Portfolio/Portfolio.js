import React from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import Portfolioimg from "../../img/Portfolio.png";
import Zara from "../../img/zara.png";
import HOC from "../../img/hoc.png";
import AdminDash from "../../img/AdminDash.png";
import "swiper/css";
import { themeContext } from "../../Context";
import { useContext } from "react";

export default function Portfolio() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="Portfolio">
      {/*heading */}
      <span style={{ color: darkMode ? "white" : "" }}>Recent Projects</span>
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
          <img src={Zara} alt="" />
        </SwiperSlide>
        {""}

        <SwiperSlide>
          <a href="https://github.com/Indula-Perera/React-Admin-Dashboard.git" target="_blank"> <img src={AdminDash} alt="" /> </a>
        </SwiperSlide>

        <SwiperSlide>
          <img src={HOC} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
