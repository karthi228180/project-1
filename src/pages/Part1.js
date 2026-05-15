import React from 'react'
import '../App.css'
import { useState, useEffect } from 'react'
import Note  from '../components/note'

function Part2() {
  

  const [time, setTime] = useState("");
  // const [show, setShow] = useState(false)
  const [display, setDisplay] = useState(false)
  


  useEffect(() => {
    const startDate = new Date("2025-07-22T07:30:00");

    const interval = setInterval(() => {
      const now = new Date();
      const diff = now - startDate;

      const seconds = Math.floor(diff / 1000) % 60;
      const minutes = Math.floor(diff / (1000 * 60)) % 60;
      const hours = Math.floor(diff / (1000 * 60 * 60)) % 24;
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));

      setTime(
        `${days} days ${hours} hrs ${minutes} mins ${seconds} secs`
      );
    }, 1000);

    return () => clearInterval(interval);
  },[]);

  const stars = Array.from({ length: 30 });





  return (
    <>
    <div className='Main-2'>
      <div className="stars-layer">
        {stars.map((_, i) => (
          <span
            key={i}
            className="star"
            style={{
              left: `${Math.random() * 100}%`,
              animationDuration: `${3 + Math.random() * 5}s`,
              animationDelay: `${Math.random() * 5}s`,
              fontSize: `${8 + Math.random() * 10}px`
            }}
          >
            ✦
          </span>
        ))}
      </div>
          <div className='timer-main'>
             <div className='timer'>
              <h2>{time}</h2>
              </div>

          </div>

    </div>
{/*           ❤️ */}

    <div className='surprice'>
                {/* <div className='part1-btnmain'>
      <a href='/part2' style={{textDecoration:"none"}}>
       <button className='prt1-btn' >
            Surprise 
        </button>
      </a>
      </div> */}
    <div>
        <Note/>
    </div>
  </div> 



    </>
  )
}

export default Part2