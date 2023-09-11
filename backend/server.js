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

app.get("/", (req, res) => {
  res.send("Express on Vercel");
});
// Serve frontend
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/build")));

  app.get("*", (req, res) =>
    res.sendFile(
      path.resolve(__dirname, "../", "frontend", "build", "index.html")
    )
  );
} else {
  app.get("/", (req, res) => res.send("Please set to production"));
}

app.use(errorHandler);

app.listen(PORT, () => console.log(`server started on ${PORT}`));

module.exports = app;

// app.use(
//   cors({
//     origin: "https://wishlist-app-lx53-api.vercel.app/api/users/login",
//     methods: ["POST", "GET", "PUT"],
//     headers: ["Content-Type"],
//     credentials: true,
//   })
// );
// app.options("*", cors());

// app.use(express.urlencoded({ extended: false }));

// app.get("/", (req, res) => {
//   res.json("hi");
// });
// app.use("/api/wishlist", require("./routes/wishlistRoutes.js"));
// app.use("/api/users", require("./routes/userRoutes.js"));

// // Serve frontend

// if (process.env.NODE_ENV === "production") {
//   const path = require("path");
//   app.use(express.static(path.resolve(__dirname, "frontend", "build")));
//   app.get("*", (req, res) => {
//     res.sendFile(
//       path.resolve(__dirname, "frontend", "build", "index.html"),
//       function (err) {
//         if (err) {
//           res.status(500).send(err);
//         }
//       }
//     );
//   });
// }

// Vercel.json

// {
//   "version": 2,
//   "builds": [
//     {
//       "src": "*.js",
//       "use": "@vercel/node"
//     }
//   ],
//   "routes": [
//     {
//       "src": "/(.*)",
//       "dest": "server.js"
//     }
//   ]
// }

// package,json

// {
//   "name": "frontend",
//   "version": "0.1.0",
//   "proxy": "http://localhost:4000",
//   "proxy": "https://wishlist-app-lx53-api.vercel.app/api/",
//   "private": true,
//   "dependencies": {
//     "@reduxjs/toolkit": "^1.9.5",
//     "@testing-library/jest-dom": "^5.17.0",
//     "@testing-library/react": "^13.4.0",
//     "@testing-library/user-event": "^14.4.3",
//     "axios": "^1.5.0",
//     "cors": "^2.8.5",
//     "http-proxy-middleware": "^2.0.6",
//     "react": "^18.2.0",
//     "react-dom": "^18.2.0",
//     "react-redux": "^8.1.2",
