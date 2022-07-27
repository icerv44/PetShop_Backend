const jwt = require("jsonwebtoken");
const createError = require("../utils/createError");
const { User, Distributor } = require("../models");
module.exports = async (req, res, next) => {
  try {
    const { authorization } = req.headers;
    if (!authorization || !authorization.startsWith("Bearer")) {
      createError("you are unauthorized", 401);
    }

    const token = authorization.split(" ")[1];
    if (!token) {
      createError("you are unauthorized", 401);
    }

    const payload = jwt.verify(token, process.env.JWT_SECRET_KEY);
    console.log("Payload : ", payload);

    if (payload.role == "user") {
      const user = await User.findOne({
        where: { id: payload.id },
        attributes: {
          exclude: ["password"],
        },
      });

      if (!user) {
        createError("you are unauthorized", 401);
      }
      req.user = user;
      // console.log("User ID : ", user);
      // console.log("User : ", req.user);
    } else if (payload.role == "admin") {
      const distributor = await Distributor.findOne({
        where: { id: payload.id },
        attributes: {
          exclude: ["password"],
        },
      });

      console.log(" distributor play", JSON.parse(JSON.stringify(distributor)));

      if (!distributor) {
        createError("you are unauthorized", 401);
      }
      req.distributor = distributor;
    }
    // console.log("distributor : " + req.distributor);
    next();
  } catch (err) {
    next(err);
  }
};
