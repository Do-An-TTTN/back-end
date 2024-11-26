import Course from '~/models/courseModel'
import slugify from '~/utils/slugify'

const createNew = async (reqBody) => {
  try {
    const res = await Course.create({
      ...reqBody,
      slug: slugify(reqBody.name)
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

export const courseService = { createNew }
