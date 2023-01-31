const Shop = require("../models/shop.model");
const User = require("../models/user.model");

const ShopController = {
  getAll: async (req, res) => {
    try {
      const shops = await Shop.find();
      res.status(200).json(shops);
    } catch (error) {
      res.status(400).json(error);
    }
  },
  getAllShopsFromUser: async (req, res) => {
    try {
      const shops = await Shop.find({ user: req.user._id });
      res.status(200).json(shops);
    } catch (error) {
      console.error(error);
      res.status(400).json(error);
    }
  },

  getOne: async (req, res) => {
    try {
      const shop = await Shop.findById(req.params.id);
      res.status(200).json(shop);
    } catch (error) {
      res.status(400).json(error);
    }
  },

  create: async (req, res) => {
    try {
      const shop = new Shop(req.body);
      const newShop = await shop.save();
      const user = await User.findById(req.user._id);
      user.shops.push(newShop._id);
      await user.save();
      res.status(201).json(newShop);
    } catch (error) {
      res.status(400).json(error);
    }
  },

  update: async (req, res) => {
    try {
      const shop = await Shop.findById(req.params.id);

      if (shop.user.toString() !== req.user._id) {
        return res.status(401).send({ message: "Not authorized" });
      }

      const shopUpdated = await Shop.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
          new: true,
        }
      );
      res.send(shopUpdated);
    } catch (err) {
      res.status(400).send({ message: err.message });
    }
  },

  delete: async (req, res) => {
    try {
      const shop = await Shop.findById(req.params.id);

      if (shop.user.toString() !== req.user._id) {
        return res.status(401).send({ message: "Not authorized" });
      }

      await Shop.findByIdAndDelete(req.params.id);
      res.send({ message: "Shop deleted" });
    } catch (err) {
      res.status(400).send({ message: err.message });
    }
  },
};

module.exports = ShopController;
