import React from 'react'
import './Services.css'
import HeartEmoji from "../../img/heartemoji.png";
import Glass from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from '../Card/Card';
import CV from './Cv.pdf'



export default function Services() {
  return (
    <div className='services'>
        {/*left side*/ }
        <div className="awesome">
            <span>My Aweseome</span>
            <span>Services</span>

            <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque,  
                <br />
                Lorem ipsum dolor sit amet, consectetur. 
            </span>
            <a href={CV} download>
            <button className='button s-button'>Download CV</button></a>
            <div className="blur s-blur1" style={{background:"#ABF1FF94"}}></div>

        </div>

        {/*right side*/ }

        <div className="cards" >

            <div style={{left: "24rem"}}>
                <Card
                emoji={HeartEmoji}
                heading={'Design'}
                detail = {" Figma,  Sketch,  Photoshop,  Adobe XD "}
                 
                />
            </div>

            {/* Second Card */}

            <div style={{top:'12rem',left: '4rem'}}>
                <Card
                emoji={Glass}
                heading={'Developer'}
                detail = {" Html, Css, JavaScript, React "}
                
                />
            </div>

             {/* 3rd Card */}

             <div style={{top:'19rem',left: '20rem'}}>
                <Card
                emoji={Humble	}
                heading={'UI/UX'}
                detail = {"Figma, Adobe XD "}
                
                />
            </div>

                <div className="blur s-blur2" style={{background: "var(--purple)"}}></div>

        </div>
    </div>
  )
}
