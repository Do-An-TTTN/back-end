import { env } from '~/config/environment'

const mongoose = require('mongoose')

export const connectDB = () => {
  mongoose.connect(env.MONGODB_URI).then(() => console.log('Connected'))
}
