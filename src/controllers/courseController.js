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

const getAllCourse = async (req, res, next) => {
  try {
    const course = await courseService.getAll()
    return res.status(StatusCodes.OK).json(course)
  } catch (error) {
    next(error)
  }
}

const getCourse = async (req, res, next) => {
  try {
    const course = await courseService.getOne(req.params.id)
    return res.status(StatusCodes.OK).json(course)
  } catch (error) {
    next(error)
  }
}

const deleteCourse = async (req, res, next) => {
  try {
    const course = await courseService.deleteOne(req.params.id)
    return res.status(StatusCodes.OK).json(course)
  } catch (error) {
    next(error)
  }
}

const updateCourse = async (req, res, next) => {
  try {
    const course = await courseService.updateOne(req.params.id, req.body)
    return res.status(StatusCodes.OK).json(course)
  } catch (error) {
    next(error)
  }
}

export const courseController = { createCourse, getAllCourse, getCourse, deleteCourse, updateCourse }
