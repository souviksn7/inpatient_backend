// const client = require('../connection/db')
const clientRepository = require('../respository/client.repository')

const checkClientIdService = async (clientId) =>{
    try {
        const result = await clientRepository.checkClientID(clientId);
        // console.log("service",result)
        if (result.rowCount == 0) return [{}];
        else return result.rows;
    } catch(error){
        return error
    }
}

module.exports = {
    checkClientIdService
}