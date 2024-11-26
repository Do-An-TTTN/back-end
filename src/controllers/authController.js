import { StatusCodes } from 'http-status-codes'
import { userService } from '~/services/userService'
import { createSignToken } from '~/utils/createSignToken'

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
    user.password = undefined
    const token = createSignToken(user, StatusCodes.OK, res)

    return res.status(StatusCodes.OK).json({
      message: 'Đăng nhập thành công',
      data: { user, token }
    })
  } catch (error) {
    next(error)
  }
}

export const authController = { register, login }
