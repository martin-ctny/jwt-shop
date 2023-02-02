const express = require("express");
const ShopController = require("../controllers/shop.controller");
const TokenMiddleware = require("../middlewares/token.middleware");
const router = express.Router();

router.post("/shops", TokenMiddleware, ShopController.create);
router.get("/shops", ShopController.getAll);
router.get("/shops/user", TokenMiddleware, ShopController.getAllShopsFromUser);
router.get("/shops/:id", ShopController.getOne);
router.put("/shops/:id", TokenMiddleware, ShopController.update);
router.delete("/shops/:id", TokenMiddleware, ShopController.delete);

module.exports = router;
