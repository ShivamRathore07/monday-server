import mongoose from "mongoose";

const priceSchema = mongoose.Schema(
  {
    basic: { type: Number },
    standard: { type: Number },
    pro: { type: Number },
    enterprise: { type: String },
    individual: { type: Number },
    individualFeature:{ type:[String], required: true},
    basicFeature:{ type:[String], required: true},
    standardFeature:{ type:[String], required: true},
    proFeature:{ type:[String], required: true},
    enterpriseFeature:{ type:[String], required: true},
    plan:{ type:[Object], required: true},
    team:{ type:[Object], required: true},
    wall:{ type:[Object], required: true},
    file:{ type:[Object], required: true},
    product:{ type:[Object], required: true},
    manage:{ type:[Object], required: true},
    dashboard:{ type:[Object], required: true},
  },
);

export default mongoose.model("price", priceSchema);