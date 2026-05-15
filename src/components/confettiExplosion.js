import React, {useEffect, useState} from 'react'
import Confetti from 'react-confetti';
// import Comfetti from 'react-confetti'

const ConfettiExplosion = ({ trigger }) => {

    const [run, setRun] = useState(false);

    useEffect(() => {
        if(trigger) {
            setRun(true);

            // setTimeout(() => setRun(false), 4000);
        }
    }, [trigger]);
  return (
    <>

    
    run && (
        <Confetti
         width={window.innerWidth}
         height={window.innerHeight}
         numberOfPieces={300}
         gravity={0.3}
         />
    )
    </>
    
  )
}

export default ConfettiExplosion