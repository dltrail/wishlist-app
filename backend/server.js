const express = require("express");
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 5000;

const app = express();

app.listen(PORT, () => console.log(`server started on ${PORT}`));

app.get("/api/goals", (req, res) => {
  res.status(200).json({
    message: "goals gotten",
  });
});
