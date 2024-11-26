import mongoose from 'mongoose'
const categorySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    courseIds: [
      {
        type: mongoose.Schema.ObjectId,
        ref: 'Course'
      }
    ]
  },
  {
    timestamps: true
  }
)

const Category = mongoose.model('Category', categorySchema)
export default Category
