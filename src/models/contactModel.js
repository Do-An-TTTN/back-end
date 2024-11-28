import mongoose from 'mongoose'
const contactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    phone: {
      type: String,
      required: true
    },
    message: {
      type: String,
      maxlength: 100
    }
  },
  {
    timestamps: true
  }
)

const Contact = mongoose.model('Contact', contactSchema)
export default Contact
