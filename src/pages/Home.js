import React, { useEffect } from 'react'
import { useState, useRef } from 'react'
import '../App.css'
import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
// import Image1 from '../src/images/image1.jpg'
// import Image2 from '../src/images/image2.jpg'


function Home() {

    const [display, setDisplay] = useState("");
    const [valid, setValid] = useState(false)
    const imgRef = useRef();
    

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.from(imgRef.current, {
            x: -120,
            // opacity:0,
            stagger:0.25,
            duration:1,
            ease: "power3.out",
            scrollTrigger: {
                trigger: imgRef.current,
                start: "top 80%"
            }
        });
    },[]);
    

    const handleButtonclick = (value) => {
        if(display === "CORRECT" || display === "WRONG"){
            setDisplay(value);
        }else {
            setDisplay(display + value);
        }
    };

    const handleClear = () => {
        setDisplay("");
    };

    const handleCheck = () => {
        if(display === "1606") {
            setDisplay("CORRECT");
            setValid(true);
        } else {
            setDisplay("WRONG");
            setValid(false);
        } 
    };
    
  return (
    <>
    <div className='Main'>
        <div className='Main-1'>
            <div className='sub-1'>
                <h1>enter your pin</h1>

                <div id='numberpad'>
                    <div id='dispaly'>{display}</div>
                    <div id='numberspace'>
                        <div onClick={() => handleButtonclick("1")} className='btn'>1</div>
                        <div onClick={() => handleButtonclick("2")} className='btn'>2</div>
                        <div onClick={() => handleButtonclick("3")} className='btn'>3</div>
                        <div onClick={() => handleButtonclick("4")} className='btn'>4</div>
                        <div onClick={() => handleButtonclick("5")} className='btn'>5</div>
                        <div onClick={() => handleButtonclick("6")} className='btn'>6</div>
                        <div onClick={() => handleButtonclick("7")} className='btn'>7</div>
                        <div onClick={() => handleButtonclick("8")} className='btn'>8</div>
                        <div onClick={() => handleButtonclick("9")} className='btn'>9</div>
                        <div onClick={handleClear} id='clearbtn'>C</div>
                        <div onClick={() => handleButtonclick("0")} className='btn'>0</div>
                        <div onClick={handleCheck} id='checkbtn'>OK</div>
                    </div>
                </div>
                <br/>
                <br/>
                {valid && 
                // <button className='nxt-btn'>NEXT</button>
                <a href='/part1' style={{textDecoration:"none"}}>
                <button className="button">
                    <span>NEXT</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 66 43">
                        <polygon
                        points="39.58,4.46 44.11,0 66,21.5 44.11,43 39.58,38.54 56.94,21.5"
                        ></polygon>
                        <polygon
                        points="19.79,4.46 24.32,0 46.21,21.5 24.32,43 19.79,38.54 37.15,21.5"
                        ></polygon>
                        <polygon
                        points="0,4.46 4.53,0 26.42,21.5 4.53,43 0,38.54 17.36,21.5"
                        ></polygon>
                    </svg>
                </button>
                </a>
                }
            </div>
            {/* <div className='sub-2'>
                <img ref={imgRef} className='img1' src={Image1} alt='image1.jpg'/>
                <img className='img2' src={Image2} alt='image2.jpg'/>
            </div> */}
        </div>

    </div>

    
    </>
  )
}

export default Home