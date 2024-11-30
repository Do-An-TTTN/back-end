import mongoose from 'mongoose'

const newsSchema = new mongoose.Schema(
  {
    writerId: {
      type: mongoose.Schema.ObjectId,
      required: true,
      ref: 'User'
    },
    title: {
      type: String,
      required: true
    },
    slug: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    description: {
      type: String,
      default: '',
      required: true
    },
    content: {
      type: String,
      default: '',
      required: true
    },
    count: {
      type: Number,
      default: 0
    }
  },
  { timestamps: true }
)

const News = mongoose.model('News', newsSchema)
export default News
