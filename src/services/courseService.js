import { StatusCodes } from 'http-status-codes'
import Course from '~/models/courseModel'
import ApiError from '~/utils/ApiError'
import slugify from '~/utils/slugify'

const createNew = async (reqBody) => {
  try {
    const res = await Course.create({
      ...reqBody,
      slug: slugify(reqBody.name)
    })

    return {
      message: 'Create Successfully',
      data: {
        ...res._doc
      }
    }
  } catch (error) {
    throw error
  }
}

const getAll = async () => {
  try {
    const res = await Course.find()

    return {
      message: 'Lấy tất cả sản phẩm',
      data: res
    }
  } catch (error) {
    throw error
  }
}

const getOne = async (_id) => {
  try {
    const res = await Course.findOne({ _id }).select('-__v -createdAt -updatedAt')
    if (!res) {
      throw new ApiError(StatusCodes.NOT_FOUND, 'không tìm thấy sản phẩm')
    }
    return {
      message: 'Lấy 1 sản phẩm',
      data: res
    }
  } catch (error) {
    throw error
  }
}

const deleteOne = async (_id) => {
  try {
    const res = await Course.deleteOne({ _id })

    return {
      message: 'Xóa thành công',
      data: res._id
    }
  } catch (error) {
    throw error
  }
}

const updateOne = async (_id, reqBody) => {
  try {
    const res = await Course.findByIdAndUpdate(_id, reqBody, {
      new: true,
      runValidators: true
    })
    if (!res) {
      throw new ApiError(StatusCodes.NOT_FOUND, 'không tìm thấy sản phẩm')
    }

    return {
      message: 'Sửa thành công',
      data: res._id
    }
  } catch (error) {
    throw error
  }
}

export const courseService = { createNew, getAll, getOne, deleteOne, updateOne }
