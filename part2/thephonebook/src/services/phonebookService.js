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
    return req.then(response => response.data)
}

const exportedObject = { getAll, addEntry, removeEntry }
export default exportedObject