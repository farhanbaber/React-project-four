import React from 'react'

const Hero = () => {
  return (
    <div>
      <h1>Random Password Generator</h1>
      <p id='para'>Generate a secure  joke with just a click!</p>
      <button 
      onClick={() => {
        fetch('https://official-joke-api.appspot.com/random_joke')
        .then(res => res.json())
        .then(data => {
            document.getElementById('para').innerHTML = data.setup + " ... " + data.punchline

        })
        .catch(err =>{
            console.log(err)
            document.getElementById('para').innerHTML = "Error fetching joke"
        })

      }
      

      > Get Joke</button>
    </div>
  )
}

export default Hero
