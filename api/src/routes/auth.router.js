const express = require("express");
const AuthController = require("../controllers/auth.controller");
const router = express.Router();
const resetMiddleware = require("../middlewares/reset.middleware");

router.post("/auth/signin", AuthController.signin);
router.post("/auth/signup", AuthController.signup);
router.post("/auth/forgot-password", AuthController.resetPassword);
router.post(
  "/auth/reset-password/:id",
  //   resetMiddleware,
  AuthController.updatePassword
);

module.exports = router;
