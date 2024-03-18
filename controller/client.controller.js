const clientService = require('../service/cleint.service')


const checkClientIdController = async (req,res) =>{
    try {
        const response = await clientService.checkClientIdService(req.headers.clientid)
        return response[0]
        // res.status(200).send(response);
    } catch(error){
        // res.status(403).send({error:"ID not found"});
        return error
    }
}

module.exports = {
    checkClientIdController
}