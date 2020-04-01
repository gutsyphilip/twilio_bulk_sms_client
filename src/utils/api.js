import axios from "axios";

export function sendMessage(phones, message) {
  return axios.post(`/message`, { message, phones });
}
