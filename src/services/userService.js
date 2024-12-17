import bcrypt from 'bcryptjs'
import { StatusCodes } from 'http-status-codes'
import db from '~/models'
// import User from '~/models/userModel'
import ApiError from '~/utils/ApiError'

const register = async (reqBody) => {
  try {
    const newUser = {
      ...reqBody,
      password: await bcrypt.hash(reqBody.password, 12)
    }
    return await db.User.create(newUser)
  } catch (error) {
    throw error
  }
}

const login = async (reqBody) => {
  try {
    const { phone, password } = reqBody
    if (!phone || !password) {
      throw new ApiError(StatusCodes.NOT_FOUND, 'Vui lòng nhập phone và mật khẩu')
    }
    const user = await db.User.findOne({ where: { phone: reqBody.phone } })
    if (!user) {
      throw new ApiError(StatusCodes.NOT_FOUND, 'Phone không tồn tại!')
    }
    const matchUser = await bcrypt.compare(password, user.password)
    if (!matchUser) {
      throw new ApiError(StatusCodes.NOT_FOUND, 'Sai mật khẩu!')
    }

    return user
  } catch (error) {
    throw error
  }
}

export const userService = { login, register }
