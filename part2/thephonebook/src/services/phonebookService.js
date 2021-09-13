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
    return axios.delete(`${baseUrl}/${id}`)
}

const updateEntry = (id, newData) => {
    const req = axios.put(`${baseUrl}/${id}`, newData)
    return req.then(response => response.data)
}

const exportedObject = { getAll, addEntry, removeEntry, updateEntry }
export default exportedObject