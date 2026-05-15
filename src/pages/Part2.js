import React, {useEffect, useState} from 'react'
import ConfettiExplosion from '../components/confettiExplosion'
import '../App.css'
import FantasyDisney from '../components/fantasudisney';

function Part2() {

   const [paricles, setParticles] = useState([])

   useEffect(() => {
    const handleMove = (e) => {
      const newParticles = {
        id: Date.now() + Math.random(),
        x: e.clientX,
        y: e.clientY,
        color: getRandomColor(),
        size: Math.random() * 8 + 4
      };

      setParticles((prev) => [...prev, newParticles]);

      setTimeout(() => {
        setParticles ((prev) =>
        prev.filter((p) => p.id !== newParticles.id));
      },800);
    }
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
   },[]);

   
  const getRandomColor = () => {
    const colors = ["#ff4d6d", "#ffd166", "#06d6a0", "#118ab2", "#9b5de5"];
    return colors[Math.floor(Math.random() * colors.length)];
  };
  return (
    <>
    <div className='cont1'>
      <ConfettiExplosion />

    </div>

    <div className='confetti-cont'>
      {paricles.map((p) => (
        <div 
        key={p.id}
        className='confetti-piece'
        style={{
          left: p.x,
          top: p.y,
          backgroundColor: p.color,
          width: p.size,
          height: p.size,
        }}
        />
      ))}
    </div>
    <div>
      <FantasyDisney/>
    </div>
 
    </>
  )
}

export default Part2