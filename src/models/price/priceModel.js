import mongoose from "mongoose";

const priceSchema = mongoose.Schema(
  {
    basic: { type: Number, required: true },
    standard: { type: Number, required: true },
    pro: { type: Number, required: true },
    enterprise: { type: Number, required: true },
  },
);

export default mongoose.model("price", priceSchema);