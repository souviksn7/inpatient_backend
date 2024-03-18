const clientController = require("../controller/client.controller");

const auth = async (req, res, next) => {
  try {
    const response = await clientController.checkClientIdController(req, res);
    // console.log(response)
    if (!response.id) {
      res.status(401).send({ error: "ClientId is not Registered" });
    } else {
      next();
    }
  } catch (error) {
    // console.log(error);
    res.status(401).send({ error: "Please authenticate" });
  }
};

module.exports = auth;