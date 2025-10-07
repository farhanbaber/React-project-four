import React from 'react'
import styles from './Hero.module.css'
import { useState } from 'react'


function Hero() {
  const [text, setText] = useState("Click the button to get a joke")
  
  const getjoke=() => {
    fetch('https://official-joke-api.appspot.com/random_joke')
    .then(res => res.json())
    .then(data => setText(`${data.setup} ... ${data.punchline}`))
    .catch(err =>{
      console.log(err)

      setText("Something went wrong")
    })
    }
        return (
          <div>
            <h1>Random Password Generator</h1>
            <p>{text}</p>
            <button onClick={getjoke}>Get Joke</button>
          </div>
        )
      }
    
    


export default Hero;
