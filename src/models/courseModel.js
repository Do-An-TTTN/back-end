import mongoose from 'mongoose'
const courseSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },
    title: {
      type: String,
      required: true,
      trim: true
    },
    slug: String,
    description: {
      type: String,
      trim: true
    },
    duration: {
      type: Number,
      required: true
    },
    price: {
      type: Number,
      required: true,
      min: 0
    },
    image: {
      type: String,
      required: true
    },
    level: {
      type: String,
      enum: ['Beginner', 'Intermediate', 'Advanced']
    },
    status: {
      type: String,
      enum: ['active', 'inactive', 'completed'],
      default: 'active'
    },
    categoryId: {
      type: mongoose.Schema.ObjectId,
      ref: 'Category',
      required: [true, 'Course must have a Category']
    }
  },
  {
    timestamps: true
  }
)

const Course = mongoose.model('Course', courseSchema)
export default Course
