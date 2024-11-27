import mongoose from 'mongoose'

const gallerySchema = new mongoose.Schema(
  {
    writerId: {
      type: mongoose.Schema.ObjectId,
      required: true,
      ref: 'User'
    },
    newsId: {
      type: mongoose.Schema.ObjectId,
      required: true,
      ref: 'News'
    },
    url: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
)

const Gallery = mongoose.model('Gallery', gallerySchema)
export default Gallery
