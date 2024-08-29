import mongoose from "mongoose";

const cowSchema = mongoose.Schema(
  {
    profileImg: {
      type: String,
      default: null,
    },
    race: {
      type: String,
      default: null,
    },
    plateNumber: {
      type: String,
      default: null,
    },
    fatherPlateNumber: {
      type: String,
      default: null,
    },
    motherPlateNumber: {
      type: String,
      default: null,
    },
    group: {
      type: String,
      default: null,
    },
    birthDate: {
      type: String, // "admin" , "user"
      default: null,
    },
    birthLoc: {
      type: String,
      default: null,
    },
    weight: {
      type: String,
      default: null,
    },
    receptionTime: {
      type: String,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("cows", cowSchema);
