import express from 'express'
import { connectDB } from '~/config/connectDB'
import { env } from '~/config/environment'

const app = express()

// --------------------CONNECT MYSQL----------------------
connectDB()
// --------------------CONFIG APP----------------------
app.use(express.json({ limit: '10kb' }))

app.get('/', (req, res) => {
  res.end('<h1>Hello World!</h1><hr>')
})

app.listen(env.LOCAL_DEV_APP_PORT, () => {
  console.log(`Hello everybody, I am running at ${env.LOCAL_DEV_APP_HOST}:${env.LOCAL_DEV_APP_PORT}`)
})
