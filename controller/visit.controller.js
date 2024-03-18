// const visitService = require("../service/visit.service");
const chopBusinessLogic = require("../src/chopBusinessLogic")
// const projectDirectory = process.cwd();
const path = require('path');
const fs = require('fs');


const getFileNameController = async (req,res) =>{
    try{ 
    //  console.log("tokenresponse:",)
    //  console.log("healthchart:",req.headers.healthchart)

    const response = await chopBusinessLogic.buildApp(JSON.parse(req.headers.tokenresponse),JSON.parse(req.headers.state),JSON.parse(req.headers.sessionstorage))
    // const projectDirectory = process.cwd();
    // var response = []
   
    res.status(200).send(response);
  } catch (error) {
    console.log(error);
    res.status(403).send({});
  }

}


module.exports = {
    getFileNameController
}