import React, { useState } from 'react'

const App = () => {
  const [ persons, setpersons ] = useState([
    {
      name: 'Arto Hellas'
    }
  ])
  const [ newName, setNewName ] = useState('')
  
  // Reads input value and updates its corresponding state
  const handleInput = (event) => {
    setNewName(event.target.value)
  }

  // Form Submit handler, adds the current newName to the list of persons
  const addPerson = (event) => {
    event.preventDefault()
    const person = {
      name: newName
    }
    setpersons(persons.concat(person))
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input onChange={handleInput}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>

      <h2>Numbers</h2>
      {persons.map((person) => <ul key={person.name}>{person.name}</ul>)}
    </div>
  )
}

export default App;
