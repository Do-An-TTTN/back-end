import Contact from '~/models/contactModel'

const createContact = async (reqBody) => {
  try {
    const res = await Contact.create({ ...reqBody })

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

const getAllContact = async () => {
  try {
    const res = await Contact.find()

    return {
      message: 'Lấy tất cả thông tin liên hệ',
      data: res
    }
  } catch (error) {
    throw error
  }
}

const deleteContact = async (_id) => {
  try {
    const res = await Contact.deleteOne({ _id })

    return {
      message: 'Xóa thành công',
      data: res._id
    }
  } catch (error) {
    throw error
  }
}

export const contactService = { createContact, getAllContact, deleteContact }
