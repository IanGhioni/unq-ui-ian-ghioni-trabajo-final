import axios from "axios";

const baseUrl = "https://word-api-hmlg.vercel.app"

export const existsWord = async (word) => {
    const response =  await axios.get(`${baseUrl}/api/validate?word=${word}`)
    return response.data.exists
}