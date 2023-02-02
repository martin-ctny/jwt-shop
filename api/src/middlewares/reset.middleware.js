const ResetToken = require("../models/resetToken.model");

const verifyToken = async (req, res, next) => {
  const token = req.params.token;

  const ResetToken = await ResetToken.findOne({ token });
  if (!ResetToken) {
    return res.status(400).json({
      message: "Token de réinitialisation de mot de passe non valide",
    });
  }

  if (ResetToken.expires < Date.now()) {
    return res
      .status(400)
      .json({ message: "Token de réinitialisation de mot de passe expiré" });
  }

  req.ResetToken = ResetToken;
  next();
};

module.exports = verifyToken;
