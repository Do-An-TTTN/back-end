import express from 'express'
import cookieParser from 'cookie-parser'
import cors from 'cors'

import connectDB from '~/config/connectDB'
import { env } from '~/config/environment'
import { errorHandlingMiddleware } from '~/middlewares/exampleMiddleware'
import { API } from '~/routes'
import { corsOptions } from '~/config/cors'

const app = express()

// --------------------CONNECT MONGO-DB----------------------
connectDB()
// --------------------CONFIG APP----------------------
app.use(cors(corsOptions))
app.use(express.json({ limit: '10kb' }))
app.use(cookieParser())
//---static file
app.use('/images', express.static('public/images'))

app.use('/api', API)

app.use(errorHandlingMiddleware)

if (env.NODE_ENV === 'production') {
  app.listen(env.PRODUCTION_APP_PORT, () => {
    console.log(`Server is running ${env.LOCAL_DEV_APP_HOST}:${env.PRODUCTION_APP_PORT}`)
  })
} else {
  app.listen(env.LOCAL_DEV_APP_PORT, () => {
    console.log(`Hello everybody, I am running at ${env.LOCAL_DEV_APP_HOST}:${env.LOCAL_DEV_APP_PORT}`)
  })
}
