import { StatusCodes } from 'http-status-codes'
import { contactService } from '~/services/contactService'

const createContact = async (req, res, next) => {
  try {
    const con = await contactService.createContact(req.body)
    return res.status(StatusCodes.CREATED).json(con)
  } catch (error) {
    next(error)
  }
}

const getAllContact = async (req, res, next) => {
  try {
    const cons = await contactService.getAllContact()
    return res.status(StatusCodes.OK).json(cons)
  } catch (error) {
    next(error)
  }
}

const deleteContact = async (req, res, next) => {
  try {
    const cate = await contactService.deleteContact(req.params.id)
    return res.status(StatusCodes.OK).json(cate)
  } catch (error) {
    next(error)
  }
}

export const contactController = { createContact, getAllContact, deleteContact }
