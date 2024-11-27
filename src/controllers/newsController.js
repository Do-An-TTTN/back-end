import { StatusCodes } from 'http-status-codes'
import { newsService } from '~/services/newsService'

const createNews = async (req, res, next) => {
  try {
    const news = await newsService.createNews(req.body)
    return res.status(StatusCodes.CREATED).json(news)
  } catch (error) {
    next(error)
  }
}

const getAllNews = async (req, res, next) => {
  try {
    const news = await newsService.getAllNews()
    return res.status(StatusCodes.OK).json(news)
  } catch (error) {
    next(error)
  }
}

const getNews = async (req, res, next) => {
  try {
    const news = await newsService.getNews(req.params.id)
    return res.status(StatusCodes.OK).json(news)
  } catch (error) {
    next(error)
  }
}

const updateNews = async (req, res, next) => {
  try {
    const news = await newsService.updateNews(req.params.id, req.body)
    return res.status(StatusCodes.OK).json(news)
  } catch (error) {
    next(error)
  }
}

const deleteNews = async (req, res, next) => {
  try {
    const news = await newsService.deleteNews(req.params.id)
    return res.status(StatusCodes.OK).json(news)
  } catch (error) {
    next(error)
  }
}

const addImages = async (req, res, next) => {
  try {
    const images = await newsService.addImages(req.body)
    return res.status(StatusCodes.OK).json(images)
  } catch (error) {
    next(error)
  }
}

const getAllImages = async (req, res, next) => {
  try {
    const images = await newsService.getAllImages()
    return res.status(StatusCodes.OK).json(images)
  } catch (error) {
    next(error)
  }
}

export const newsController = { createNews, getAllNews, getNews, updateNews, deleteNews, addImages, getAllImages }
