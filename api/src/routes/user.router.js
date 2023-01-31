const express = require("express");
const UserController = require("../controllers/user.controller");
const TokenMiddleware = require("../middlewares/token.middleware");
const router = express.Router();

router.put("/account", TokenMiddleware, UserController.update);
router.put("/account/password", TokenMiddleware, UserController.updatePassword);

module.exports = router;
