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
    <ul> {data.name} | {data.number} <button onClick={() => removeHandler(data)}>remove</button></ul> 
)
}

export default Phonebook;