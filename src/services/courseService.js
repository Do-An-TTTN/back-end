import Course from '~/models/courseModel'

const createNew = async (reqBody) => {
  try {
    const res = await Course.create(reqBody)

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

export const courseService = { createNew }
