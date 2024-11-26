import mongoose from 'mongoose'
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },
    phone: {
      type: String,
      required: true,
      minlength: 10,
      maxlength: 11
    },
    address: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: [true, 'Vui lòng nhập mật khẩu'],
      minlength: 8
    },
    avatar: String,
    role: {
      type: String,
      enum: ['admin', 'customer'],
      default: 'customer'
    }
  },
  {
    timestamps: true
  }
)

const User = mongoose.model('User', userSchema)
export default User
