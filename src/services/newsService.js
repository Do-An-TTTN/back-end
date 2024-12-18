import { StatusCodes } from 'http-status-codes'
import db from '~/models'
// import Gallery from '~/models/galleryModel'
import ApiError from '~/utils/ApiError'
import slugify from '~/utils/slugify'

const createNews = async (reqBody) => {
  try {
    const res = await db.News.create({
      ...reqBody,
      slug: slugify(reqBody.title)
    })
    return {
      message: 'Create Successfully',
      data: res
    }
  } catch (error) {
    throw error
  }
}

const getAllNews = async () => {
  try {
    const res = await db.News.findAll({
      include: { model: db.User, attributes: { exclude: ['password', 'createdAt', 'updatedAt'] } },
      order: [['createdAt', 'DESC']]
    })

    return {
      message: 'Tất cả bảng tin',
      data: res
    }
  } catch (error) {
    throw error
  }
}

const getNews = async (id) => {
  try {
    const res = await db.News.findOne({ where: { id }, include: { model: db.User, attributes: { exclude: ['password', 'createdAt', 'updatedAt'] } } })
    return {
      message: 'Thông tin chi tiết bài tin tức',
      data: res
    }
  } catch (error) {
    throw error
  }
}

const updateNews = async (id, reqBody) => {
  try {
    const res = await db.News.update(reqBody, { where: { id } })
    if (!res) {
      throw new ApiError(StatusCodes.NOT_FOUND, 'Không tìm thấy bài đăng')
    }
    return {
      message: 'Sửa thông tin thành công',
      data: {
        id: res.id,
        title: res.title
      }
    }
  } catch (error) {
    throw error
  }
}

const deleteNews = async (id) => {
  try {
    await db.News.destroy({ where: { id } })
    return { message: 'Xóa bài tin tức thành công' }
  } catch (error) {
    throw error
  }
}

export const newsService = { createNews, getAllNews, getNews, updateNews, deleteNews }
