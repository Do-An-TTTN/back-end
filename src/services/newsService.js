import { StatusCodes } from 'http-status-codes'
import Gallery from '~/models/galleryModel'
import News from '~/models/newsModel'
import ApiError from '~/utils/ApiError'
import slugify from '~/utils/slugify'

const createNews = async (reqBody) => {
  try {
    const res = await News.create({
      ...reqBody,
      slug: slugify(reqBody.title)
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

const getAllNews = async () => {
  try {
    const res = await News.find()
    return {
      message: 'Tất cả bảng tin',
      data: res
    }
  } catch (error) {
    throw error
  }
}

const getNews = async (_id) => {
  try {
    const res = await News.findOne({ _id })
    return {
      message: 'Thông tin chi tiết bài tin tức',
      data: {
        _id: res._id,
        title: res.title
      }
    }
  } catch (error) {
    throw error
  }
}

const updateNews = async (_id, reqBody) => {
  try {
    const res = await News.findByIdAndUpdate(_id, reqBody, {
      new: true,
      runValidators: true
    })
    if (!res) {
      throw new ApiError(StatusCodes.NOT_FOUND, 'Không tìm thấy bài đăng')
    }
    return {
      message: 'Thông tin chi tiết bài tin tức',
      data: {
        _id: res._id,
        title: res.title
      }
    }
  } catch (error) {
    throw error
  }
}

const deleteNews = async (_id) => {
  try {
    await News.deleteOne({ _id })
    return { message: 'Xóa bài tin tức thành công' }
  } catch (error) {
    throw error
  }
}

const addImages = async (reqBody) => {
  try {
    const res = await Gallery.create({ ...reqBody })
    return {
      message: 'Thêm hình thành công',
      data: {
        ...res._doc
      }
    }
  } catch (error) {
    throw error
  }
}

const getAllImages = async () => {
  try {
    const res = await Gallery.find().select('-__v -createdAt').sort({ createdAt: -1 })
    return {
      message: 'Tất cả hình ảnh',
      data: res
    }
  } catch (error) {
    throw error
  }
}

export const newsService = { createNews, getAllNews, getNews, updateNews, deleteNews, addImages, getAllImages }
