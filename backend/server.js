const express = require("express");
const path = require("path");
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 4000;
const { errorHandler } = require("./middleware/errorMiddleware");
const colors = require("colors");
const connectDB = require("./config/db");
const cors = require("cors");

connectDB();

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));

app.use("/api/wishlist", require("./routes/wishlistRoutes.js"));
app.use("/api/users", require("./routes/userRoutes.js"));

app.use(express.static(path.join(__dirname, "../frontend/build")));

app.get("*", function (_, res) {
  res.sendFile(
    path.join(__dirname, "../frontend/build/index.html"),
    function (err) {
      if (err) {
        res.status(500).send(err);
      }
    }
  );
});

app.use(errorHandler);

app.listen(PORT, () => console.log(`server started on ${PORT}`));
