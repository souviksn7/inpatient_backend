
const attemptLimitService = require('../service/attemptLimit.service')

const updateAttemptDetailsController = async (req,res) =>{
    try{ 
       
    //    console.log(req.tokenResponse)
        const response = await attemptLimitService.updateAttemptDetailsService(req.state)
        if(response.error){
           return {error:response.error}
            
        }else{
            // console.log(response)
            if(response.count>=response.max_limit){
                return {error:"Max limit reached"}
            }else{
                return true
            }
        }
        // return response
    }catch(error){
        return {error}
    }
     
      
}

const checkAttemptLimit = async (req,res) =>{
    try{ 
       
       
        const response = await attemptLimitService.attemptLimitService(req.clientId)
        if(response.error){
           return {error:response.error}
            
        }else{
            // console.log(response)
            if(response.count>=response.max_limit){
                return {error:"Max limit reached"}
            }else{
                return true
            }
        }
        // return response
    }catch(error){
        return {error}
    }
     
      
}


module.exports = {
    checkAttemptLimit,
    updateAttemptDetailsController
}