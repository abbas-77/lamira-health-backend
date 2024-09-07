import mongoose from "mongoose";

const vaccineSchema = mongoose.Schema(
  {
    name: {
      type: String,
      default: null,
    },
    dose: {
      type: Number,
      default: null,
    },
    DateOfVaccination: {
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

export default mongoose.model("vaccines", vaccineSchema);
