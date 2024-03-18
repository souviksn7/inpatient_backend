const visitRepository = require("../respository/visit.repository")

const getFileNameService = async ()=>{
    try{
        const result = await visitRepository.getFileName();
        if (result.rowCount == 0) return {};
        else return result.rows;
    }catch (error) {
        return error;
      }
}

module.exports = {
    getFileNameService
}