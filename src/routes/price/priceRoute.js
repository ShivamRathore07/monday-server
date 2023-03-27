import express from "express";
import passport from "passport";
import {
  getOneData,
  updatePrice,
} from "../../controllers/price/priceController.js";
import permission from "../../middlewares/permission.js";
import { userRole } from "../../utils/userEnum.js";

const router = express.Router();

const auth = passport.authenticate("jwt", { session: false });

router
  .route("/:id")
  .patch(auth, permission(userRole.ADMIN), updatePrice)
  .get(auth, getOneData);
// 64212a2eb090a91a90ce806e
export default router;
