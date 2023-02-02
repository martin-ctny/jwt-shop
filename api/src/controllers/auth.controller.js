const User = require("../models/user.model");
const Token = require("../models/resetToken.model");
const bcrypt = require("bcrypt");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");

const AuthController = {
  signup: async (req, res) => {
    const { email, password, firstName, lastName } = req.body;

    const hash = await bcrypt.hash(password, 10);

    try {
      const user = await User.create({
        email,
        password: hash,
        firstName,
        lastName,
      });
      delete user.password;
      res.send(user);
    } catch (error) {
      return res.status(400).send({ error: error.message });
    }
  },
  signin: async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email }).select("+password");
    if (!user) {
      return res.status(400).send({ error: "User not found" });
    }

    const ressult = await bcrypt.compare(password, user.password);

    if (!ressult) {
      return res.status(400).send({ error: "Invalid password" });
    }

    const accessToken = jwt.sign(
      {
        _id: user._id,
        email,
        firstName: user.firstName,
        lastName: user.lastName,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: 86400,
      }
    );

    res.send({ accessToken });
  },
  resetPassword: async (req, res) => {
    const { email } = req.body;
    const user = await User.findOne({ email });
    console.log(user);
    if (!user)
      return res
        .status(400)
        .send("Aucun utilisateur n'a été trouvé avec cet email");

    const token = await Token.create({
      userId: user._id,
      expires: new Date() + 3600000,
      token: crypto.randomBytes(16).toString("hex"),
    });

    const transporter = nodemailer.createTransport({
      service: "localhost",
      port: 25,
      secure: false,
    });

    var mailOptions = {
      from: "youremail@gmail.com",
      to: `${email}`,
      subject: "Sending Email using Node.js",
      text: `<a href="http://localhost:3000/reset/${token.token}">Reset password</a>`,
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });

    res.send("Mail sent");
  },

  updatePassword: async (req, res) => {
    const { token, password } = req.body;

    const hash = await bcrypt.hash(password, 10);

    const resetToken = await Token.findOne({ token });

    console.log("updatePassword : ", token);

    try {
      const user = await User.findOneAndUpdate(
        resetToken.userId,
        {
          password: hash,
        },
        {
          new: true,
        }
      );
      console.log(user);
      res.send(user);
    } catch (error) {
      return res.status(400).send({ error: error.message });
    }
  },
};

module.exports = AuthController;
