import express from 'express'
import dotenv from 'dotenv'
import router from './routes/coins'
dotenv.config()

const PORT = process.env.PORT

const app = express()

app.use('/api', router)

export {
  app, PORT
}
