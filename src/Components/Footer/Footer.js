import React from "react";
import "./Footer.css";
import wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Github from "@iconscout/react-unicons/icons/uil-github";
export default function Footer() {
  return (
    <div>
      <div className="footer">
        <img src={wave} alt="" />
        <div className="f-content">
          <span>indula333@gmail.com</span>
          <div className="f-icons">
            <Insta color="white" size="3rem" />
            <Facebook color="white" size="3rem" />
            <Github color="white" size="3rem" />
          </div>
        </div>
      </div>
    </div>
  );
}
