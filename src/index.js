const express = require("express");
const cors = require("cors");
// require("../connection/db");
require("dotenv").config();

// import router files
const visitRouter = require('../routes/visit.routes')

// create express app
const app = express();

// cross origin 
app.use(cors());
// parsing request 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// redirect to respective routing file
app.use('/visits',visitRouter)

const PORT = process.env.PORT || 3005;

// App running at port 
app.listen(PORT, () => {
  console.log(`App is running at port ${PORT}`);
});