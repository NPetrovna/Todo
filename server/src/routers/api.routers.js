const apiRouter = require("express").Router();
const userRouter = require("./user.api.routers");

apiRouter.use("/user", userRouter);

module.exports = apiRouter;