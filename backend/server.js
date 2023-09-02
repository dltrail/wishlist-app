const express = require("express");
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 5000;

const app = express();

app.use("/api/wishlist", require("./routes/wishlistRoute.js"));

app.listen(PORT, () => console.log(`server started on ${PORT}`));
