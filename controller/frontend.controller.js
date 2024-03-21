const frontendService = require('../service/frontend.services')


const getHospitalDataController = async (req,res) => {
    try {
        const resposne = await frontendService.getHospitalDataService()
        if(resposne.error){
            res.status(401).send(resposne.error)
        }else{
            res.status(200).send(resposne)
        }
    }catch(error){
        res.status(401).send(error)
    }
}

const addHospitalController = async (req,res) => {
    try {
        const data = req.body
        // console.log(data)
        const resposne = await frontendService.addHospitalService(data)
        
        if(resposne.error){
            res.status(401).send(resposne)
        }else{
            res.status(200).send(resposne)
        }
        
    }catch(error){
        res.status(401).send(error)
    }
}


const getStatsController = async (req,res) => {
    try {
        const resposne = await frontendService.getStatsService(req.body)
        if(resposne.error){
            res.status(401).send(resposne.error)
        }else{
            res.status(200).send(resposne)
        }
    }catch(error){
        res.status(401).send(error)
    }
}

const addLisenceController = async (req,res) => {
    try {
        const data = req.body
        // console.log(data)
        const resposne = await frontendService.addLisenceService(data)
        
        if(resposne.error){
            res.status(401).send(resposne)
        }else{
            res.status(200).send(resposne)
        }
        
    }catch(error){
        res.status(401).send(error)
    }
}

module.exports = {
    getHospitalDataController,
    addHospitalController,
    getStatsController,
    addLisenceController
}