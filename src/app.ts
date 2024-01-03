import express from 'express'
import dotenv from 'dotenv'

dotenv.config()

const PORT = process.env.PORT

const app = express()

app.get('/api/', (req, res) => {
  res.status(200).json({ message: 'Hello api v1.0.1' })
})

export {
  app, PORT
}
