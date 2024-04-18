const frontendRepository = require("../respository/frontend.repository");

const getHospitalDataService = async () => {
  try {
    const result = frontendRepository.getHospitalDetails();
    if(result.error){
        return {error};
    }else{
        return result;
    }
  } catch (error) {
    return { error };
  }
};

const addHospitalService = async (data) => {
  try {
    const result = await frontendRepository.addHospital(data);
    if(result.error){
        return {error};
    }else{
        return result;
    }
  } catch (error) {
    return { error };
  }
};

const getStatsService = async (data) => {
  try {
    const result = frontendRepository.getStats(data);

    return result;
  } catch (error) {
    return { error };
  }
};

const addLisenceService = async (data) => {
  try {
    const result = await frontendRepository.addLisence(data);
    if(result.error){
        return {error};
    }else{
        return result;
    }
  } catch (error) {
    return { error };
  }
};

const signupService = async (data) => {
  try {
    const result = await frontendRepository.signup(data);
    if(result.error){
        return {error};
    }else{
        return result;
    }
  } catch (error) {
    return { error };
  }
};

const loginService = async (data) => {
  try {
    const result = frontendRepository.login(data);
    if(result.error){
        return {error};
    }else{
        return result;
    }
  } catch (error) {
    return { error };
  }
};

const addConfigService = async (data) => {
  try {
    const result = await frontendRepository.addConfig(data);
    if(result.error){
        return {error};
    }else{
        return result;
    }
  } catch (error) {
    return { error };
  }
};

const totalHitsPerDayService = async () => {
  try {
    const result = await frontendRepository.totalHitsPerDay();
    if(result.error){
        return {error};
    }else{
        return result.rows;
    }
  } catch (error) {
    return { error };
  }
};

const hospitalRegPerDayService = async () => {
    try{
        const result = await frontendRepository.hospitalRegPerDay();
        if(result.error){
            return {error};
        }else{
            return result.rows;
        }
        // console.log(result)
        
    }catch(error){
        return {error};
    }
}

const numHospitalRegService = async () => {
    try{
        const result = await frontendRepository.numHospitalReg();
        if(result.error){
            return {error};
        }else{
            return result.rows;
        }
        // console.log(result)
        
    }catch(error){
        return {error};
    }
}


module.exports = {
  getHospitalDataService,
  addHospitalService,
  getStatsService,
  addLisenceService,
  signupService,
  loginService,
  addConfigService,
  totalHitsPerDayService,
  hospitalRegPerDayService,
  numHospitalRegService
};
