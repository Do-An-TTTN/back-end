import { env } from '~/config/environment'
import jwt from 'jsonwebtoken'

const signToken = (payload) => {
  return jwt.sign({ payload }, env.JWT_SECRET, {
    expiresIn: env.JWT_EXPIRES_IN
  })
}

export const createSignToken = (user, statusCode, res) => {
  const token = signToken(user)
  const cookieOptions = {
    expires: new Date(Date.now() + env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000),
    httpOnly: true
  }
  if (env.BUILD_MODE === 'production') {
    cookieOptions.secure = true
  } else {
    cookieOptions.secure = false
  }

  res.cookie('token', token, cookieOptions)

  return token
}
