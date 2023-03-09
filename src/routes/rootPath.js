// Routes
import userRouter from "./user/userRoute.js";
import priceRouter from "./price/priceRoute.js"
import stripeRouter from "./stripe/paymentRoutes.js"

const RootPath = async (app) => {
  /* --------------------------------- Routes --------------------------------- */

  app.use("/user", userRouter);
  app.use("/price", priceRouter);
  app.use("/payment",stripeRouter)

  return app;
};

export default RootPath;
