import db from '~/models'

const createCate = async (reqBody) => {
  try {
    const res = await db.Category.create({ ...reqBody })

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
    const res = await db.Category.findAll()

    return {
      message: 'Lấy tất cả thể loại',
      data: res
    }
  } catch (error) {
    throw error
  }
}

const getCate = async (id) => {
  try {
    const res = await db.Course.findAll({ where: { categoryId: id } })
    return {
      message: 'Lấy chi tiết các Course thuộc Category',
      data: res
    }
  } catch (error) {
    throw error
  }
}

const deleteCate = async (id) => {
  try {
    await db.Category.destroy({ where: { id } })

    return {
      message: 'Xóa thành công',
      data: id
    }
  } catch (error) {
    throw error
  }
}

export const categoryService = { createCate, getAllCate, deleteCate, getCate }
