const express = require("express");

const userRouter = express.Router();

userRouter.post("/registration", registration);
userRouter.post("/login", userLogin);
userRouter.post("/change-password", authCheck, changePassword);
userRouter.post("/forgot-password", forgotPassword);
userRouter.get("/users", getAllUsers);

module.exports = userRouter;

