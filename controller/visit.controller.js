const visitService = require("../service/visit.service");


const getVisitDataController = async (req,res) =>{
    try{ 
    const response = await visitService.getVisitDataService()
    // console.log(response)
    res.status(200).send(response);
  } catch (error) {
    console.log(error);
    res.status(403).send({});
  }

}


module.exports = {
    getVisitDataController
}