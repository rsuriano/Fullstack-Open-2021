import React, {useState} from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]

  const [selected, setSelected] = useState(0)
  const [votes, setVote] = useState(Array.apply(null, new Array(anecdotes.length)).map(Number.prototype.valueOf,0))
  
  //'Next Anecdote' button handler: it generates a different random number from the current one to render a new anecdote.
  const handleAnecdotes = () => {
    let rand = Math.round(Math.random() * (anecdotes.length - 1))
    while(rand===selected){
      rand = Math.round(Math.random() * (anecdotes.length - 1))
    }
    setSelected(rand)
  }

  //Vote handler: updates the votes state array.
  const handleVotes = () => {
    const newVotes = [...votes]
    newVotes[selected] +=1
    setVote(newVotes)
  }

  return(
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]} <br/>
      has {votes[selected]} {votes[selected]===1 ? 'vote': 'votes'} <br/>
      <Button onClick={handleVotes} text='vote' />
      <Button onClick={handleAnecdotes} text='next anecdote' />
      
      <h1>Anecdote with most votes</h1>
      {Math.max(...votes)===0 ? 'None yet. Vote your favorite to see it here!' : anecdotes[votes.indexOf(Math.max(...votes))]}
      
    </div>
  )
}

const Button = ({onClick, text}) => {
  return (
    <button onClick={onClick}>{text}</button>
  )
}

export default App