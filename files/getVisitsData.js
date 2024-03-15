
const visitsData = require("../data/visitsData")

const visitsApiCall = async () =>{
  var result = new Promise((resolve, reject) => {
    resolve(visitsData);
  });
  return result;
}


module.exports = {
    visitsApiCall
}