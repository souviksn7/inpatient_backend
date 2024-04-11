
const attemptLimitController = require('../controller/attemptLimit.controller')
const clientController = require("../controller/client.controller")
const attemptLimit = async (req,res,next) => {
// console.log(req.patientId)
try{
  //  console.log("ejhfkjehfkjdhkfj")
    const response = await attemptLimitController.checkAttemptLimit(req,res)
    console.log(response)
    if(response.error){
        res.status(401).send({error:response.error})
    }else{
        const result = await clientController.updateCounterController(req, res);
        if (result.error){
          res.status(401).send({error:"count is not getting updated"})
          return
        }else{
          
          let updateAttempt = await  attemptLimitController.updateAttemptDetailsController(req,res)
          if(updateAttempt.error){
            res.status(401).send({error:"Stats is not getting updated"})
          }else{
            next();
          }

         
        }
        // next()
    }
    
}catch(error){
    res.status(401).send({error})
}
}


module.exports = attemptLimit