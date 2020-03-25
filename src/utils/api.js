import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;


export function sendMessage(phones, message) {
    return axios.post(`${API_BASE_URL}/message`, {message, phones})
}