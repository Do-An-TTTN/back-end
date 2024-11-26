import express from 'express'

const app = express()

const hostname = 'localhost'
const port = 4000

app.get('/', (req, res) => {
  res.end('<h1>Hello World!</h1><hr>')
})

app.listen(port, hostname, () => {
  console.log(`Hello everybody, I am running at ${hostname}:${port}`)
})
