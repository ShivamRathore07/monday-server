import mongoose from "mongoose";
import { userRole } from "../../utils/userEnum.js";

const userSchema = mongoose.Schema(
  {
    userName: { type: String, trim: true, required: true },
    email: { type: String, trim: true, required: true },
    password: { type: String, trim: true, required: true },
    profession: { type: String, trim: true, required: true },
    current_role: { type: String, trim: true, required: true },
    teamSize: { type: String, trim: true, required: true },
    companySize: { type: String, trim: true, required: true },
    manage: { type: String, trim: true, required: true },
    focusOnFirst: { type: String, trim: true, required: true },
    hereAboutUs: { type: String, trim: true, required: true },
    role: {
      type: String,
      required: true,
      enum: Object.values(userRole),
      default: userRole.USER,
    },
  },
);

export default mongoose.model("user", userSchema);