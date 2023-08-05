import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String
    },
    name: {
      type: String,
      require: true
    }
  },
  {
    timestamps: true
  }
)

export default mongoose.models?.Users ?? mongoose.model("Users", userSchema)



