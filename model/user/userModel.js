import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      default: null,
    },
    lastName: {
      type: String,
      default: null,
    },
    username: {
      type: String,
      required: [true, "Please add the UserName"],
    },
    phoneNumber: {
      type: String,
      required: [true, "Please add the phoneNumber"],
    },
    password: {
      type: String,
      required: [true, "Please add the Password"],
    },
    role: {
      type: String, // "admin" , "user"
      required: [true, "Please add the role"],
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("users", userSchema);
