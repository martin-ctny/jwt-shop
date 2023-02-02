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

const nodemailer = require("nodemailer");
app.get("/api/send-mail", (req, res) => {
  const transporter = nodemailer.createTransport({
    service: "localhost",
    port: 25,
    secure: false,
  });
  const { user } = req;
  var mailOptions = {
    from: "youremail@gmail.com",
    to: user.email,
    subject: "Sending Email using Node.js",
    text: "That was easy!",
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });

  res.send("Mail sent");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
