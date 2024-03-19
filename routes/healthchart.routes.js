const express = require("express");
const router = express.Router();

// this is file to check that clientId is valid or not 
const auth = require("../middleware/client.auth");

const healthchartController = require("../controller/healthchart.controller");
const clientController = require('../controller/client.controller')

router.get('/gethealthchartData', auth, healthchartController.gethealthchartDataController);
router.get('/getcounts', clientController.countTableController)

module.exports = router;
