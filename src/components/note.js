import React ,{ useEffect, useState } from 'react'
import '../App.css'

  const TypingNote = () => {
    const message = `One Earth, 7 Seas, 7 Continents, 196 Countries, And 8 billion people and somehow, I was lucky enough to meet you ❤️. Have a wonderful day.`

      const [text, setText] = useState("")
      const [index, setIndex] = useState(0);

  useEffect(() => {
    if(index < message.length){
      const timeout = setTimeout(() => {
        setText((prev) => prev + message.charAt(index));
        setIndex(index + 1);
      }, 50);
      return () => clearTimeout(timeout);
    }
  },[index,message]);

  return(
    <>
        <div className='note-main'>
          <div className='paper'>
            <div className='content'>
              {text}
            <span className='cursor'></span>
            </div>
          </div>

          <div className='sup-btn'>
            <a href='/part2'>
              <button className= "nxt-part2" >
              Surprice 🎁
              </button>
            </a>
          </div>
        </div>
    </>
  )

  
  }

export default TypingNote