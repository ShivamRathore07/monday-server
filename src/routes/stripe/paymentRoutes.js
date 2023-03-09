import express from "express";
import passport from "passport";
import { stripeCheckout } from "../../controllers/stripe/paymentController.js";

const router = express.Router();

const auth = passport.authenticate("jwt", { session: false });

router.post("/create-checkout-session", auth, stripeCheckout);

export default router;
