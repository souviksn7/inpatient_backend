const clientService = require('../service/cleint.service')
let tokenResponse

const countTableController = async (req,res) => {
    try {
        const response = await clientService.countTableService();
        
        res.status(200).send(response)
    } catch (error) {
        res.status(403).send({error:"problem with the api"})
    }
}

const checkClientIdController = async (req,res) =>{
    try {
        tokenResponse = JSON.parse(req.headers.tokenresponse)
        function base64UrlDecode(str) {
         // Add padding if needed and replace characters specific to base64url encoding
         str = str.replace(/-/g, '+').replace(/_/g, '/');
         while (str.length % 4) {
             str += '=';
         }
     
         // Decode base64
         return atob(str);
     }
     
     function decodeJwt(jwt) {
         const parts = jwt.split('.');
         
         if (parts.length !== 3) {
             throw new Error('Invalid JWT format');
         }
     
         const encodedPayload = parts[1];
         const decodedPayload = base64UrlDecode(encodedPayload);
     
         return JSON.parse(decodedPayload);
     }
     let decodedPayload;
     // Example usage
     const token = tokenResponse.access_token;  // Replace with your actual JWT
     try {
         decodedPayload = decodeJwt(token);
         
     } catch (err) {
         console.error('Error decoding JWT:', err.message);
     }
    //  console.log("decoded",decodedPayload)
        const response = await clientService.checkClientIdService(decodedPayload.client_id)
        req.clientId = decodedPayload.client_id
        req.hospital_name = response[0].hospital_name
        // console.log()
        return response[0]
        // res.status(200).send(response);
    } catch(error){
        // res.status(403).send({error:"ID not found"});
        return error
    }
}


const updateStatsController = async (req,res) =>{
    try{
        console.log("helloooo")
       
       const response = await clientService.updateStatsService(tokenResponse.patient,req.clientId)
       return response
    }catch(error){
        return error
    }
}
module.exports = {
    checkClientIdController,
    updateStatsController,
    countTableController
}