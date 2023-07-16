import React from "react";
import "./Works.css";
import Html from "../../img/html.png";
import React1 from "../../img/react.png";
import Js from "../../img/js.png";
import Css from "../../img/css.png";
import Php from "../../img/php.png";
import { themeContext } from "../../Context";
import { useContext } from "react";
import { motion } from "framer-motion";

export default function Works() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="works" id="Works">
      {/*left side*/}
      <div className="awesome">
        <span style={{ color: darkMode ? "white" : "" }}>
          Works For All These
        </span>
        <span>Languages</span>

        <span>
          Html, Css, React,
          <br />
          JavaScript,
          <br />
          Php
        </span>

        {/* <button className="button s-button">Hire me</button>*/}

        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>

      {/*right side*/}

      <div className="w-rigth">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          transition={{ duration: 3.5, type: "spring" }}
          viewport={{ margin: "-40px" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src={Html} alt="" />
          </div>

          <div className="w-secCircle">
            <img src={React1} alt="" />
          </div>

          <div className="w-secCircle">
            <img src={Js} alt="" />
          </div>

          <div className="w-secCircle">
            <img src={Css} alt="" />
          </div>

          <div className="w-secCircle">
            <img src={Php} alt="" />
          </div>
        </motion.div>
        <div>
          <div className="w-backCircle blueCircle"></div>
          <div className="w-backCircle yellowCircle"></div>
        </div>
      </div>
    </div>
  );
}
