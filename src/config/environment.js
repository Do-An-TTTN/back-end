import 'dotenv/config'

// export const env = {
//   MONGODB_URI: process.env.MONGODB_URI,
//   DATABASE_NAME: process.env.DATABASE_NAME,

//   LOCAL_DEV_APP_HOST: process.env.LOCAL_DEV_APP_HOST,
//   LOCAL_DEV_APP_PORT: process.env.LOCAL_DEV_APP_PORT,

//   BUILD_MODE: process.env.BUILD_MODE,
//   AUTHOR: process.env.AUTHOR,

//   JWT_SECRET: process.env.JWT_SECRET,
//   JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN,
//   JWT_COOKIE_EXPIRES_IN: process.env.JWT_COOKIE_EXPIRES_IN
// }

export const env = {
  DATABASE_NAME: process.env.DATABASE_NAME,
  DATABASE_USER_NAME: process.env.DATABASE_USER_NAME,
  DATABASE_USER_PASSWORD: process.env.DATABASE_USER_PASSWORD,

  LOCAL_DEV_APP_HOST: process.env.LOCAL_DEV_APP_HOST,
  LOCAL_DEV_APP_PORT: process.env.LOCAL_DEV_APP_PORT,
  BUILD_MODE: process.env.BUILD_MODE,

  JWT_SECRET: process.env.JWT_SECRET,
  JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN,
  JWT_COOKIE_EXPIRES_IN: process.env.JWT_COOKIE_EXPIRES_IN
}
