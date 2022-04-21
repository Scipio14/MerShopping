require("dotenv").config();
const express = require("express");
const port = process.env.PORT || 4000;
const connectDB = require("./config/db");
const productRoutes = require("./routes/productRoutes");
connectDB();

const app = express();

app.use(express.json());

app.use("/api/products", productRoutes);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
