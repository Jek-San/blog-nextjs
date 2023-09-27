import mongoose from "mongoose"

const { Schema } = mongoose

const userSchema = new Schema({
  name: {
    type: String,
    unique: true,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true
  }
}, { timestamps: true })

const Model = mongoose.models.UserNextjs || mongoose.model("UserNextjs", userSchema)
export default Model