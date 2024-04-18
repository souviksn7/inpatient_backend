const frontendRepository = require("../respository/frontend.repository");

const getHospitalDataService = async () => {
  try {
    const result = frontendRepository.getHospitalDetails();

    return result;
  } catch (error) {
    return { error };
  }
};

const addHospitalService = async (data) => {
  try {
    const result = await frontendRepository.addHospital(data);

    return result;
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

    return result;
  } catch (error) {
    return { error };
  }
};

const signupService = async (data) => {
  try {
    const result = await frontendRepository.signup(data);
    return result;
  } catch (error) {
    return { error };
  }
};

const loginService = async (data) => {
  try {
    const result = frontendRepository.login(data);
    return result;
  } catch (error) {
    return { error };
  }
};

const addConfigService = async (data) => {
  try {
    const result = await frontendRepository.addConfig(data);
    return result;
  } catch (error) {
    return { error };
  }
};

const totalHitsPerDayService = async () => {
  try {
    const result = await frontendRepository.totalHitsPerDay();
    
    return result.rows;
  } catch (error) {
    return { error };
  }
};

const hospitalRegPerDayService = async () => {
    try{
        const result = await frontendRepository.hospitalRegPerDay();
        // console.log(result)
        return result.rows;
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
  hospitalRegPerDayService
};
