const express = require("express");
const cors = require("cors");
require("../connection/db");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 3005;

app.listen(PORT, () => {
  console.log(`App is running at port ${PORT}`);
});