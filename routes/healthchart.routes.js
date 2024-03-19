const express = require("express");
const router = express.Router();

// this is file to check that clientId is valid or not 
const auth = require("../middleware/client.auth");

const healthchartController = require("../controller/healthchart.controller");

router.get('/gethealthchartData', auth, healthchartController.gethealthchartDataController);

module.exports = router;
