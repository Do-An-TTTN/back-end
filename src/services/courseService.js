import { StatusCodes } from 'http-status-codes'
import ApiError from '~/utils/ApiError'
import slugify from '~/utils/slugify'

import db from '~/models'

const createNew = async (reqBody) => {
  try {
    const res = await db.Course.create({
      ...reqBody,
      slug: slugify(reqBody.name)
    })

    return {
      message: 'Create Successfully',
      data: res
    }
  } catch (error) {
    throw error
  }
}

const getAll = async () => {
  try {
    const res = await db.Course.findAll()

    return {
      message: 'Lấy tất cả sản phẩm',
      data: res
    }
  } catch (error) {
    throw error
  }
}

const getOne = async (id) => {
  try {
    const res = await db.Course.findOne({ where: { id } })
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

const deleteOne = async (id) => {
  try {
    const res = await db.Course.destroy({ where: { id } })

    return {
      message: 'Xóa thành công',
      data: res._id
    }
  } catch (error) {
    throw error
  }
}

const updateOne = async (id, reqBody) => {
  try {
    const res = await db.Course.update(reqBody, {
      where: { id }
    })
    if (!res) {
      throw new ApiError(StatusCodes.NOT_FOUND, 'không tìm thấy sản phẩm')
    }

    return {
      message: 'Sửa thành công',
      data: res
    }
  } catch (error) {
    throw error
  }
}

export const courseService = { createNew, getAll, getOne, deleteOne, updateOne }
