const frontendService = require("../service/frontend.services");

const getHospitalDataController = async (req, res) => {
  try {
    const response = await frontendService.getHospitalDataService();
    if (response.error) {
      res.status(401).send(response.error);
    } else {
      res.status(200).send(response);
    }
  } catch (error) {
    res.status(401).send(error);
  }
};

const addHospitalController = async (req, res) => {
  try {
    const data = req.body;
    // console.log(data)
    const response = await frontendService.addHospitalService(data);

    if (response.error) {
      res.status(401).send(response.error);
    } else {
      res.status(200).send(response);
    }
  } catch (error) {
    res.status(401).send(error);
  }
};

const getStatsController = async (req, res) => {
  try {
    const response = await frontendService.getStatsService(req.body);
    if (response.error) {
      res.status(401).send(response.error);
    } else {
      res.status(200).send(response);
    }
  } catch (error) {
    res.status(401).send(error);
  }
};

const addLisenceController = async (req, res) => {
  try {
    const data = req.body;
    // console.log(data)
    const response = await frontendService.addLisenceService(data);

    if (response.error) {
      res.status(401).send(response.error);
    } else {
      res.status(200).send(response);
    }
  } catch (error) {
    res.status(401).send(error);
  }
};

const signupController = async (req, res) => {
  try {
    const response = await frontendService.signupService(req.body);
    if (response.error) {
      res.status(401).send(response.error);
    }else{

      res.status(200).send(response);
    }
  } catch (error) {
    res.status(401).send(error);
  }
};

const loginController = async (req, res) => {
  try {
    const response = await frontendService.loginService(req.body);
    if (response.error) {
      res.status(401).send(response.error);
    }else{

      res.status(200).send(response);
    }
  } catch (error) {
    res.status(401).send(error);
  }
};

const addConfigController = async (req, res) => {
  try {
    const response = await frontendService.addConfigService(req.body);
    if (response.error) {
      res.status(401).send(response.error);
    }else{

      res.status(200).send(response);
    }
  } catch (error) {
    res.status(401).send(error);
  }
};

const totalHitsPerDayController = async (req, res) => {
  try {
    const response = await frontendService.totalHitsPerDayService();
    if (response.error) {
      res.status(401).send(error);
    }else{

      res.status(200).send(response);
    }
  } catch (error) {
    res.status(401).send(error);
  }
};

const hospitalRegPerDayController = async (req, res) => {
  try {
    const response = await frontendService.hospitalRegPerDayService();
    if (response.error) {
      res.status(401).send(response.error);
    }else{

      res.status(200).send(response);
    }

  } catch (error) {
    res.status(401).send(error);
  }
};

const numHospitalRegController = async (req, res) => {
  try {
    const response = await frontendService.numHospitalRegService();
    if (response.error) {
      res.status(401).send(response.error);
    }else{

      res.status(200).send(response);
    }

  } catch (error) {
    res.status(401).send(error);
  }
};

module.exports = {
  getHospitalDataController,
  addHospitalController,
  getStatsController,
  addLisenceController,
  loginController,
  signupController,
  addConfigController,
  totalHitsPerDayController,
  hospitalRegPerDayController,
  numHospitalRegController
};
