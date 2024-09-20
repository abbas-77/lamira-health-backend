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
      default: null,
    },
    userId: {
      type: String,
      default: null,
    },
    cowId: {
      type: String,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("drugs", drugSchema);
