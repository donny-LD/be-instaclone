require("dotenv").config();
const express = require("express");
const cors = require("cors");

const userRouter = require("./users/routes");
const User = require("./users/model");

const port = process.env.PORT || 5001;

const app = express();

// const sequelize = require("./db/connection");

app.use(cors());
app.use(express.json());

app.use("/users", userRouter);

const syncTables = async () => {
  try {
    await User.sync();

    // await sequelize.sync({ alter: true });

    console.log("All tables synced sucessfully.");
  } catch (error) {
    console.error(" Failed to synced tables", error);
  }
};

app.get("/health", (req, res) => {
  res.status(200).json({ message: "API is healthy" });
});

app.listen(port, () => {
  syncTables();
  console.log(`server is listening on port ${port} `);
});
