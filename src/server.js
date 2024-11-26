import express from 'express'
import { connectDB } from '~/config/connectDB'
import { env } from '~/config/environment'
import { errorHandlingMiddleware } from '~/middlewares/exampleMiddleware'
import { API } from '~/routes'

const app = express()

// --------------------CONNECT MYSQL----------------------
connectDB()
// --------------------CONFIG APP----------------------
app.use(express.json({ limit: '10kb' }))
app.use('/api', API)

app.use(errorHandlingMiddleware)

app.listen(env.LOCAL_DEV_APP_PORT, () => {
  console.log(`Hello everybody, I am running at ${env.LOCAL_DEV_APP_HOST}:${env.LOCAL_DEV_APP_PORT}`)
})
