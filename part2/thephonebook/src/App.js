import React, { useState, useEffect } from 'react'
import pbService from './services/phonebookService'

const Phonebook = ({persons, filterValue, removeHandler}) => {
  return(
    <>{
      persons
      .filter(({name}) =>  name.toLowerCase().includes(filterValue))
      .map((person) => <PhonebookEntry key={person.name} data={person} removeHandler={removeHandler}/>)
    }</>
    
  )
}

const PhonebookEntry = ({data, removeHandler}) => {
  return(
    <ul> {data.name} | {data.phone} <button onClick={() => removeHandler(data)}>remove</button></ul> 
  )
}

const PersonForm = ({submitHandler, nameHandler, numberHandler, newName, newPhone}) => {
  return(
    <form onSubmit={submitHandler}>
        <div> Name: <input value={newName} onChange={nameHandler}/> </div>
        <div> Number: <input value={newPhone} onChange={numberHandler}/> </div>
        <div> <button type="submit">add</button>  </div>
      </form>
  )
}

const Filter = ({filterHandler}) => {
  return(
    <>Filter by name: <input onChange={filterHandler}/></>
    )
}

const App = () => {
  const [ persons, setPersons] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newPhone, setNewPhone ] = useState('')
  const [ filterValue, setFilterValue] = useState('')

  //Fetches phonebook data from json-server using the phonebook service and the Effect Hook
  useEffect(() => {
    pbService
      .getAll()
      .then(personList => {setPersons(personList)})
  }, [])
  
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

  const handleRemoveButton = (data) => {
    if (window.confirm(`Delete ${data.name}?`)){
      pbService
        .removeEntry(data.id)
        .then(() => {
          pbService.getAll()
            .then(personList => setPersons(personList))
        })
    }
  }

  // Form Submit handler, adds the current newName and newPhone to the list of persons
  const addPerson = (event) => {
    event.preventDefault()

    //Detects duplicate name and alerts the user
    if ( persons.filter((p) => p.name===newName).length > 0 ){
      window.alert(`${newName} is already on the phonebook.`)
    } else {
      const newPerson = {
        name: newName,
        phone: newPhone
      }  

      //Saves data to server using the phonebook service and clears input form state
      pbService
        .addEntry(newPerson)
        .then(newEntry => {
          setPersons(persons.concat(newEntry))
          setNewName('')
          setNewPhone('')
        })
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter filterHandler={handleFilter} />

      <h3>Add a new person:</h3>
      <PersonForm submitHandler={addPerson} newName={newName} newPhone={newPhone} nameHandler={handleName} numberHandler={handleNumber} />

      <h3>Numbers</h3>
      <Phonebook persons={persons} removeHandler={handleRemoveButton} filterValue={filterValue} />
      
    </div>
  )
}

export default App;
