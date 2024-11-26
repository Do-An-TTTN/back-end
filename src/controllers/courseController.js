import { StatusCodes } from 'http-status-codes'
import { courseService } from '~/services/courseService'

const createCourse = async (req, res, next) => {
  try {
    const createdCourse = await courseService.createNew(req.body)

    return res.status(StatusCodes.CREATED).json(createdCourse)
  } catch (error) {
    next(error)
  }
}

export const courseController = { createCourse }
