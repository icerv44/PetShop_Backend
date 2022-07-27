const path = require("path");
require("dotenv").config({ path: path.join(__dirname, ".env") });
const express = require("express");
const cors = require("cors");
const { sequelize } = require("./models");
const app = express();
const PORT = process.env.PORT || 3307;
const authRouter = require("./routes/authRoute");
const petRouter = require("./routes/petRoute");
const userRouter = require("./routes/userRoute");
const authenticate = require("./middlewares/authenticate");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/auth", authRouter);
app.use("/users", authenticate, userRouter);
// app.use("/pets", petRouter);

app.listen(PORT, () => {
  console.log("listening on http://localhost:" + PORT);
  // sequelize.sync({ alter: true });
  // sequelize.sync({ force: true });
});
