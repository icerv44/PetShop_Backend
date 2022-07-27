const { User } = require("../models");
exports.getMe = async (req, res) => {
  const user = JSON.parse(JSON.stringify(req.user));

  res.json({ user });
};
