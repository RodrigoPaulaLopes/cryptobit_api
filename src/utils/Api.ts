import axios from 'axios'
import dotenv from 'dotenv'

dotenv.config()
const CRYPTO_URL = process.env.API_URL

export const API = axios.create({
  baseURL: CRYPTO_URL
})
