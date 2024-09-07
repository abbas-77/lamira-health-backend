import mongoose from "mongoose";

const drugSchema = mongoose.Schema(
  {
    name: {
      type: String,
      default: null,
    },
    dose: {
      type: String,
      default: null,
    },
    DateOfTakingMedicine: {
      type: String,
      required: [true, "Please add the DateOfTakingMedicine"],
    },
    userId: {
      type: String,
      required: [true, "Please add the userId"],
    },
    cowId: {
      type: String,
      required: [true, "Please add the cowId"],
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("drugs", drugSchema);
