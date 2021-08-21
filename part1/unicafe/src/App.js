import React, { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handlerGood = () => setGood(good + 1) 
  const handlerNeutral = () => setNeutral(neutral + 1)
  const handlerBad = () => setBad(bad + 1)

  const all = good + neutral + bad
  
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
      all {all} <br/>
      average {(good*1 + bad*-1)/3} <br/>
      positive {all==0 ? 0 : good / (good + neutral + bad)}% 
    </div>
  )
}

const Button = ({onClick, text}) => {
  return (
    <button onClick={onClick}>{text}</button>
  )
}

export default App