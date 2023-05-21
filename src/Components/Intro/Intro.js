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
import { themeContext } from '../../Context'
import { useContext } from 'react'
import {motion} from 'framer-motion'




export default function Intro() {
  const transition ={duration: 2, type: 'spring'}
  const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

  return (
    <div className='intro'>
      <div className="i-left">
        <div className="i-name">
            <span style={{color: darkMode? 'white': ''} } >Hi! I Am </span>
            <span>Indula Perera</span>
            <span>Frontend Developer with high level of experiance in web designing and developmenr, producting the quality work</span>
        </div>
        <button className="button i-button">Hire me</button>

        <div className="i-icons">
            <a href="https://github.com/Indula-Perera"><img src={Github} alt="github" /></a>
            <img src={LinkedIn} alt="linkdin" />
            <img src={Instergram} alt="insta" />

        </div>
      </div>

      <div className="i-right " >

        <img src={Vector1} alt="vector1" />
        <img src={Vector2} alt="Vector2" />
        <img src={boy} alt="me" />
        <motion.img 
        initial={{ left:"-36%" }}
        whileInView={{left :"-24%"}}
        transition={transition}
        
        src={glassesimo} alt="glassimoji " />

        <motion.div 
         initial={{ top:"-4%", left: "84%" }}
         whileInView={{left :"68%"}}
         transition={transition}
        
        style={{top:'-4%', left:'68%'}}
        className='floating-div'
        >

        <FloatingDiv image={Crown} text1='Web' text2='Developer' />
        
        </motion.div>

        <motion.div 
         initial={{ top:"18rem", left: "9rem" }}
         whileInView={{left :"0rem"}}
         transition={transition}

        style={{top:'18rem', left:'0rem'}}
        className='floating-div'
        
        >

          <FloatingDiv image={thumbup} text1='Best Desing' text2='Award'/>

        </motion.div>
        {/*blur divs*/}
        <div className='blur' style={{background: "rgb(238 210 255)"}}></div>
        <div className='blur' style={{background: '#C1F5FF',top:'17rem',width:'21rem',height:'11rem',left:'-9rem'}}></div>
      </div>
    </div>
  )
}
