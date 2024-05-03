const clientService = require('../service/cleint.service')
const {search }= require('../src/http')
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
    //    console.log(decodedPayload)
         return JSON.parse(decodedPayload);
     }
     let decodedPayload;
    //  console.log(decodeURIComponent(tokenResponse.dob))
    //  try{
    //     console.log(search)
    //     await search(`FHIR/R4/Encounter/${tokenResponse.encounter}`).then(function(data){
    //         console.log(data.participant)
    //      })
    //  }
    //  // Example usage
    // catch(error){
    //     console.log(error)
    //  }
     const token = tokenResponse.access_token;  // Replace with your actual JWT
     try {
         decodedPayload = decodeJwt(token);
         
     } catch (err) {
         console.error('Error decoding JWT:', err.message);
     }
    //  console.log("decoded",decodedPayload)
        const response = await clientService.checkClientIdService(decodedPayload.client_id)
        // console.log(response)
        req.clientId = response[0].id
        req.state = JSON.parse(req.headers.state)
        req.patientId = tokenResponse.patient
        req.hospital_name = response[0].hospital_name
        req.allowcustomhosts = response[0].allowcustomhosts

        const config = await clientService.getConfigFilePathService(req.clientId)
        console.log(config)
        
        req.config = config.rows[0]
        // console.log("heloo",response)
        console.log("hehriuriuyeruyweiuryiuw",req.config)
        return response[0]       // res.status(200).send(response);
    } catch(error){
        console.log("erro",error)
        // res.status(403).send({error:"ID not found"});
        return error
    }
}


const updateCounterController = async (req,res) =>{
    try{
        // console.log("helloooo")
       
       const response = await clientService.updateCounterService(tokenResponse.patient,req.clientId)
       return response
    }catch(error){
        console.log("controller",error)
        return {error}
    }
}
module.exports = {
    checkClientIdController,
    updateCounterController,
    countTableController
}