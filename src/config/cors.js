import { env } from '~/config/environment'
import { StatusCodes } from 'http-status-codes'
import ApiError from '~/utils/ApiError'

const WHITELIST_DOMAINS = ['http://localhost:5175', 'https://star-english.vercel.app']
export const corsOptions = {
  origin: function (origin, callback) {
    if (env.NODE_ENV === 'development') {
      return callback(null, true)
    }

    if (!origin) {
      return callback(null, true)
    }

    if (WHITELIST_DOMAINS.includes(origin)) {
      return callback(null, true)
    }

    // Cuối cùng nếu domain không được chấp nhận thì trả về lỗi
    return callback(new ApiError(StatusCodes.FORBIDDEN, `${origin} not allowed by our CORS Policy.`))
  },

  optionsSuccessStatus: 200,

  credentials: true
}
