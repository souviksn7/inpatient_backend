const express = require("express");
const router = express.Router();

// this is file to check that clientId is valid or not 
const auth = require("../middleware/client.auth");

const visitController = require("../controller/visit.controller");

router.get('/getVisitData',  visitController.getFileNameController);

module.exports = router;
