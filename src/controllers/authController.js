import { StatusCodes } from 'http-status-codes'
import { userService } from '~/services/userService'

const register = async (req, res, next) => {
  try {
    const regis = await userService.register(req.body)
    regis.password = undefined
    return res.status(StatusCodes.CREATED).json({
      message: 'Đăng ký thành công',
      data: regis
    })
  } catch (error) {
    next(error)
  }
}

const login = async (req, res, next) => {
  try {
    const user = await userService.login(req.body)

    return res.status(StatusCodes.OK).json({
      message: 'Đăng nhập thành công',
      data: user._id
    })
  } catch (error) {
    next(error)
  }
}

export const authController = { register, login }
