import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
    const req = axios.get(baseUrl)
    return req.then(response => response.data)
}

const addEntry = (newEntry) => {
    const req = axios.post(baseUrl, newEntry)
    return req.then(response => response.data)
}

const removeEntry = (id) => {
    const req = axios.delete(`${baseUrl}/${id}`)
    return req.catch(error => {
        console.log(error.response.status)
        console.log(error.response.headers)
        window.alert(`The entry couldn't be deleted. It may not be in the server anymore. Error code ${error.response.status}`)
    })
}

const updateEntry = (id, newData) => {
    const req = axios.put(`${baseUrl}/${id}`, newData)
    return req.then(response => response.data)
}

const exportedObject = { getAll, addEntry, removeEntry, updateEntry }
export default exportedObject