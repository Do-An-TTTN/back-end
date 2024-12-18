import db from '~/models'

const createContact = async (reqBody) => {
  try {
    const res = await db.Contact.create({ ...reqBody })

    return {
      message: 'Create Successfully',
      data: res
    }
  } catch (error) {
    throw error
  }
}

const getAllContact = async () => {
  try {
    const res = await db.Contact.findAll({ order: [['createdAt', 'DESC']] })

    return {
      message: 'Lấy tất cả thông tin liên hệ',
      data: res
    }
  } catch (error) {
    throw error
  }
}

const deleteContact = async (id) => {
  try {
    await db.Contact.destroy({ where: { id } })

    return {
      message: 'Xóa thành công',
      data: id
    }
  } catch (error) {
    throw error
  }
}

export const contactService = { createContact, getAllContact, deleteContact }
