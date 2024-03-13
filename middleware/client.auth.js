
const auth = async (req, res, next) => {
  try {
   console.log("hello i am in auth")

    next();
  } catch (error) {
    res.status(401).send({ error: "Please authenticate" });
  }
};

module.exports = auth;