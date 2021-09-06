import React, { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', phone: '040-123456' },
    { name: 'Ada Lovelace', phone: '39-44-5323523' },
    { name: 'Dan Abramov', phone: '12-43-234345' },
    { name: 'Mary Poppendieck', phone: '39-23-6423122' }
  ])
  const [ newName, setNewName ] = useState('')
  const [ newPhone, setNewPhone ] = useState('')
  const [ filterValue, setFilterValue] = useState('')
  
  // Reads input name and updates its corresponding state
  const handleName = (event) => {
    setNewName(event.target.value)
  }

  // Reads input phone number and updates its corresponding state
  const handleNumber = (event) => {
    setNewPhone(event.target.value)
  }

  // Reads filter input and updates its corresponding state
  const handleFilter = (event) => {
    setFilterValue(event.target.value.toLowerCase())
  }

  // Form Submit handler, adds the current newName and newPhone to the list of persons
  const addPerson = (event) => {
    event.preventDefault()

    //Detects duplicate name and alerts the user
    if ( persons.filter((p) => p.name===newName).length > 0 ){
      window.alert(`${newName} is already on the phonebook.`)
    } else {
      const person = {
        name: newName,
        phone: newPhone
      }  
      setPersons(persons.concat(person))
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>

      <div>Filter by name: <input onChange={handleFilter}/></div>

      <form onSubmit={addPerson}>
        <div> name: <input onChange={handleName}/> </div>
        <div> number: <input onChange={handleNumber}/> </div>
        <div> <button type="submit">add</button>  </div>
      </form>

      <h2>Numbers</h2>
      {persons
        .filter( ({name}) =>  name.toLowerCase().includes(filterValue) )
        .map( (person) => <ul key={person.name}> {person.name} | {person.phone} </ul> )
      }
      
    </div>
  )
}

export default App;
