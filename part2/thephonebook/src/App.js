import { getQueriesForElement } from '@testing-library/dom'
import React, { useState, useEffect } from 'react'
import Phonebook from './Phonebook'
import pbService from './services/phonebookService'

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
  return(<>Filter by name: <input onChange={filterHandler}/></>)
}

const Alert = ({message}) => {
  const alertStyle = {
    color: 'green',
    background: 'lightgrey',
    fontSize: 20,
    borderStyle: 'solid',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10
  }

  if (message === null) {
    return null
  }

  return(
    <div style={alertStyle}>{message}</div>
  )
}

const App = () => {
  const [ persons, setPersons] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newPhone, setNewPhone ] = useState('')
  const [ filterValue, setFilterValue] = useState('')
  const [ alertMessage, setAlertMessage ] = useState(null)

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

  // Removes person from server and from front end
  const handleRemoveButton = (data) => {
    if (window.confirm(`Delete ${data.name}?`)){
      pbService
        .removeEntry(data.id)
        .then(() => {
          setPersons(persons.filter(p => p.name !== data.name))
          setAlertMessage(`${data.name} has been removed from the phonebook.`)
          setTimeout(() => setAlertMessage(null), 5000)
        })
    }
  }

  // Form Submit handler, adds the current newName and newPhone to the list of persons
  const addPerson = (event) => {
    event.preventDefault()

    //Checks for empty input values
    if (newName === '') {
      window.alert("Name field is empty.")
      return(null)
    }
    if (newPhone === '') {
      window.alert("Phone field is empty.")
      return(null)
    }

    //Creates the new person data object
    const newPerson = {
      name: newName,
      phone: newPhone
    } 

    //Detects duplicate name and asks the user if it wants to update the number
    const existingPerson = persons.filter((p) => p.name===newName)
    if ( existingPerson.length > 0 ){
      const update = window.confirm(`${newName} is already on the phonebook, replace the old number with a new one?`)
      if (update){
        pbService
          .updateEntry(existingPerson[0].id, newPerson)
          .then(updatedEntry => {
            setPersons(persons.map(p => p.id !== updatedEntry.id ? p : updatedEntry))
            setNewName('')
            setNewPhone('')
            setAlertMessage(`${newPerson.name}'s number has been updated.`)
            setTimeout(() => setAlertMessage(null), 5000)
          })
      }
    } else {
      
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
      <Alert message={alertMessage} />
      <Filter filterHandler={handleFilter} />

      <h3>Add a new person:</h3>
      <PersonForm submitHandler={addPerson} newName={newName} newPhone={newPhone} nameHandler={handleName} numberHandler={handleNumber} />

      <h3>Numbers</h3>
      <Phonebook persons={persons} removeHandler={handleRemoveButton} filterValue={filterValue} />
      
    </div>
  )
}

export default App;
