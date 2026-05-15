import React from 'react'
import Confetti from 'react-confetti';

const ConfettiExplosion = () => {

  return (
    <>
    
        <Confetti
         width={window.innerWidth}
         height={window.innerHeight}
         numberOfPieces={300}
         gravity={0.3}
         />
    
    </>
    
  )
}

export default ConfettiExplosion