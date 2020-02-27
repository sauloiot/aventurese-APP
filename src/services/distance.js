import axios from 'axios'

const distance = axios.create({
    baseURL: 'https://maps.googleapis.com/maps/api'
})

export default distance
