import mongoose from "mongoose"

const { Schema } = mongoose

const postSchema = new Schema({
  title: {
    type: String,
    unique: true,

  },
  desc: {
    type: String,
    required: true,


  },
  img: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  }
}, { timestamps: true })


const Model = mongoose.models.PostNextjsBlog || mongoose.model("PostNextjsBlog", postSchema)

export default Model
// export default mongoose.models.Post || mongoose.model("PostNextjsBlog", postSchema)
