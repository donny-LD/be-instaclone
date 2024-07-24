require("dotenv").config();
const express = require("express");

const port = process.env.PORT || 5001;



app.get("/health", (req, res) => {
  res.status(200).json({ message: "API is healthy" });
});

app.listen(port, () => {
  syncTables();
  console.log(`server is listening on port ${port} `);
});