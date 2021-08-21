import React, { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handlerGood = () => setGood(good + 1) 
  const handlerNeutral = () => setNeutral(neutral + 1)
  const handlerBad = () => setBad(bad + 1)

  return (
    <div>
      <p>Give feedback:</p> 
      <Button onClick={handlerGood} text='good' />
      <Button onClick={handlerNeutral} text='neutral'/>
      <Button onClick={handlerBad} text='bad' />
    
      <p>Statistics:</p>
      good {good} <br/>
      neutral {neutral} <br/>
      bad {bad} <br/>
    </div>
  )
}

const Button = ({onClick, text}) => {
  return (
    <button onClick={onClick}>{text}</button>
  )
}

export default App