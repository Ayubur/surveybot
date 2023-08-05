import mongoose from "mongoose";

const creatorSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, "++ email is required"],
      unique: true
    },
    password: {
      type: String,
      required: [true, "++ password is required"],
    },
    username: {
      type: String,
      required: [true, "++ username is required"],
    }
  },
  {
    timestamps: true
  }
)

export default mongoose.models?.Creators ?? mongoose.model("Creators", creatorSchema)



