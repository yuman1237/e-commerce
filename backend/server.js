const express = require("express");
require("dotenv").config();
const connectDB = require("./config/db");
const productRoutes = require("./routes/productRoutes");
const app = express();
connectDB();

app.use(express.json());

app.use("/api/products", productRoutes);
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
// "start": "node backend/server.js",

//   "test": "echo \"Error: no test specified\" && exit 1",

//     "server": "nodemon backend/server.js",
//     "client": "npm start --prefix frontend",
//     "start": "concurrently \"npm run server\" \"npm run client\"",
//     "data:import": "node backend/seederScript.js",
