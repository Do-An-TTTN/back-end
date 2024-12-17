// import { env } from '~/config/environment'

// const mongoose = require('mongoose')

// export const connectDB = () => {
//   mongoose.connect(env.MONGODB_URI).then(() => console.log('Connected'))
// }
import { Sequelize } from 'sequelize'
import { env } from './environment'

const sequelize = new Sequelize(env.DATABASE_NAME, env.DATABASE_USER_NAME, env.DATABASE_USER_PASSWORD, {
  host: env.LOCAL_DEV_APP_HOST,
  dialect: 'mysql'
})

const connectDB = async () => {
  try {
    await sequelize.authenticate()
    console.log('Connection has been established successfully.')
  } catch (error) {
    console.error('Unable to connect to the database:', error)
  }
}

export default connectDB
