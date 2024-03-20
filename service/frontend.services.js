const frontendRepository = require('../respository/frontend.repository')

const getHospitalDataService = async () => {
try{
    const result = frontendRepository.getHospitalDetails()
    
    return result
}catch(error){
    return {error}
}

    

}

const addHospitalService = async (data) =>{
    try{
        const result = await frontendRepository.addHospital(data)
    
    
        return result
    }catch(error){
        return {error}
    }
}

const getStatsService = async (data) => {
    try{
        const result = frontendRepository.getStats(data)
        
        return result
    }catch(error){
        return {error}
    }

}

const addLisenceService = async (data) =>{
    try{
        const result = await frontendRepository.addLisence(data)
    
    
        return result
    }catch(error){
        return {error}
    }
}
module.exports = {
    getHospitalDataService,
    addHospitalService,
    getStatsService,
    addLisenceService
}