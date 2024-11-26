import Category from '~/models/categoryModel'
import Course from '~/models/courseModel'

const createCate = async (reqBody) => {
  try {
    const res = await Category.create({ ...reqBody })

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

const getAllCate = async () => {
  try {
    const res = await Category.find()

    return {
      message: 'Lấy tất cả thể loại',
      data: res
    }
  } catch (error) {
    throw error
  }
}

const getCate = async (_id) => {
  try {
    const res = await Course.find({ categoryId: _id }).select('-__v -updatedAt -createdAt -categoryId')
    return {
      message: 'Lấy chi tiết các sách thuộc thể loại',
      data: res
    }
  } catch (error) {
    throw error
  }
}

const deleteCate = async (_id) => {
  try {
    const res = await Category.deleteOne({ _id })

    return {
      message: 'Xóa thành công',
      data: res._id
    }
  } catch (error) {
    throw error
  }
}

export const categoryService = { createCate, getAllCate, deleteCate, getCate }
