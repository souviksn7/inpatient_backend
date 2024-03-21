const express = require("express");
const router = express.Router();

// this is file to check that clientId is valid or not 
const auth = require("../middleware/client.auth");
const attemptLimit = require('../middleware/attemptLimit')

const healthchartController = require("../controller/healthchart.controller");
const clientController = require('../controller/client.controller')


router.use(auth)
router.use(attemptLimit)
router.get('/gethealthchartData',  healthchartController.gethealthchartDataController);
router.get('/getcounts', clientController.countTableController)

module.exports = router;
