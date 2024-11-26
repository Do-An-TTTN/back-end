import { StatusCodes } from 'http-status-codes'
import { categoryService } from '~/services/categoryService'

const createCate = async (req, res, next) => {
  try {
    const cate = await categoryService.createCate(req.body)
    return res.status(StatusCodes.CREATED).json(cate)
  } catch (error) {
    next(error)
  }
}

const getAllCate = async (req, res, next) => {
  try {
    const cates = await categoryService.getAllCate()

    return res.status(StatusCodes.OK).json(cates)
  } catch (error) {
    next(error)
  }
}

const getCate = async (req, res, next) => {
  try {
    const cate = await categoryService.getCate(req.params.id)
    return res.status(StatusCodes.OK).json(cate)
  } catch (error) {
    next(error)
  }
}

const deleteCate = async (req, res, next) => {
  try {
    const cate = await categoryService.deleteCate(req.params.id)
    return res.status(StatusCodes.OK).json(cate)
  } catch (error) {
    next(error)
  }
}

export const categoryController = { createCate, getAllCate, getCate, deleteCate }
