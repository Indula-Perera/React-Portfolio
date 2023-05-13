import React from 'react'
import "./Intro.css"
import  Github  from "../../img/github.png";
import  LinkedIn  from "../../img/linkedin.png";
import  Instergram  from "../../img/instagram.png";
import  Vector1  from "../../img/Vector1.png";
import  Vector2  from "../../img/Vector2.png";
import  boy  from "../../img/boy.png";
import  thumbup  from "../../img/thumbup.png";
import  Crown  from "../../img/crown.png";
import  glassesimo  from "../../img/glassesimoji.png";
import FloatingDiv from '../FloatingDiv/FloatingDiv';



export default function Intro() {
  return (
    <div className='intro'>
      <div className="i-left">
        <div className="i-name">
            <span >Hy! I Am </span>
            <span>Indula Perera</span>
            <span>Frontend Developer with high level of experiance in web designing and developmenr, producting the quality work</span>
        </div>
        <button className="button i-button">Hire me</button>

        <div className="i-icons">
            <a href="https://github.com/sunil9813"><img src={Github} alt="github" /></a>
            <img src={LinkedIn} alt="linkdin" />
            <img src={Instergram} alt="insta" />

        </div>
      </div>

      <div className="i-right">

        <img src={Vector1} alt="vector1" />
        <img src={Vector2} alt="Vector2" />
        <img src={boy} alt="me" />
        <img src={glassesimo} alt="glassimoji " />

        <div style={{top:'-4%', left:'68%'}}>

        <FloatingDiv image={Crown} text1='Web' text2='Developer'/>
        
        </div>

        <div style={{top:'18rem', left:'0rem'}}>
          <FloatingDiv image={thumbup} text1='Best Desing' text2='Award'/>
        </div>
        {/*blur divs*/}
        <div className='blur' style={{background: "rgb(238 210 255)"}}></div>
        <div className='blur' style={{background: '#C1F5FF',top:'17rem',width:'21rem',height:'11rem',left:'-9rem'}}></div>
      </div>
    </div>
  )
}
