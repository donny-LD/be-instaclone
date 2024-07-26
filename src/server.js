require("dotenv").config();
const express = require("express");
const User = require("./users/model");

const userRouter = require("./users/routes");

const port = process.env.PORT || 5001;

const app = express();

app.use(express.json());

const syncTables = async () => {
  try {
    await User.sync();

    console.log("All tables synced seccessfully.");
  } catch (error) {
    console.error(" Failed to synced tavles", error);
  }
};

app.use("/users", userRouter);

app.get("/health", (req, res) => {
  res.status(200).json({ message: "API is healthy" });
});

app.listen(port, () => {
  syncTables();
  console.log(`server is listening on port ${port} `);
});
