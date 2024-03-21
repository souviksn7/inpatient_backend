const express = require("express");
const cors = require("cors");
// require("../connection/db");
require("dotenv").config();

// import router files
const healthchartRouter = require('../routes/healthchart.routes')
const frontendRouter = require('../routes/frontend.routes')
const businessLogic = require('./chopBusinessLogic')

// businessLogic.buildApp()
// create express app
const app = express();

// cross origin 
app.use(cors());
// parsing request 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// redirect to respective routing file
app.use('/healthchart',healthchartRouter)
app.use('/frontend',frontendRouter)

const PORT = process.env.PORT || 3005;

// App running at port 
app.listen(PORT, () => {
  console.log(`App is running at port ${PORT}`);
});