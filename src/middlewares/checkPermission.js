import { StatusCodes } from 'http-status-codes'
import ApiError from '~/utils/ApiError'

const checkPermission = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      throw new ApiError(StatusCodes.FORBIDDEN, 'You do not have permission to perform this action')
    }
    next()
  }
}
export default checkPermission
