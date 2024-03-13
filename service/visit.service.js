const visitRepository = require("../respository/visit.repository")

const getVisitDataService = async ()=>{
    try{
        const result = await visitRepository.getVisitData();
        
        return result
    }catch (error) {
        return error;
      }
}

module.exports = {
    getVisitDataService
}