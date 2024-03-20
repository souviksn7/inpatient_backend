
const { response } = require('express');
const attemptLimitRepository = require('../respository/attemptLimit.repository');

const attemptLimitService = async (clientId) =>{
      try{
       
        // console.log(patientId,clientId)
        const result = await attemptLimitRepository.attemptLimitRepository(clientId)
       return result
        
        
      }catch(error){
        return { error }
      }
}

const updateAttemptDetailsService = async (data) =>{
  try{
   
    // console.log(patientId,clientId)
    const result = await attemptLimitRepository.updateAttemptDetails(data)
   return result
    
    
  }catch(error){
    return { error }
  }
}



module.exports = {
    attemptLimitService,
    updateAttemptDetailsService
}