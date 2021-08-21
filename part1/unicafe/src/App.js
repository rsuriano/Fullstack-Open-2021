import React, { useState } from 'react'

const StatisticLine = ({name, value}) => {
  return(
    <>
    {name} {value} <br/>
    </>
  )
}

const Statistics = ({good, neutral, bad}) => {
  
  const all = good + neutral + bad
  
  if (all === 0) 
    return (
      <>
        <h1> Statistics: </h1>
        <p> No feedback given. </p>
      </>
      )
      
  return(
    <>
      <h1> Statistics: </h1>
      <p>
        <StatisticLine name='Good' value={good} />
        <StatisticLine name='Neutral' value={neutral} />
        <StatisticLine name='Bad' value={bad} />
        <StatisticLine name='All' value={all} />
        <StatisticLine name='Average' value={(good*1 + bad*-1)/3} />
        <StatisticLine name='Positive' value={all==0 ? 0 : good / all} />
      </p>
    </>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handlerGood = () => setGood(good + 1) 
  const handlerNeutral = () => setNeutral(neutral + 1)
  const handlerBad = () => setBad(bad + 1)

  return (
    <>
      <h1>Give feedback:</h1> 
      <Button onClick={handlerGood} text='good' />
      <Button onClick={handlerNeutral} text='neutral'/>
      <Button onClick={handlerBad} text='bad' />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </>
  )
}

const Button = ({onClick, text}) => {
  return (
    <button onClick={onClick}>{text}</button>
  )
}

export default App