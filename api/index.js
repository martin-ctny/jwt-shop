const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 8000;
const connect = require("./config/mongo.config");
const AuthRouter = require("./src/routes/auth.router");
const ShopRouter = require("./src/routes/shop.router");
const UserRouter = require("./src/routes/user.router");

connect();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api", AuthRouter);
app.use("/api", ShopRouter);
app.use("/api", UserRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
