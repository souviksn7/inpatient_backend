const client = require("../connection/db");

const getHospitalDetails = async (clientId) => {
  try {

    await client.query('BEGIN');
    const query = `SELECT * FROM clients;`

    const result = await client.query(query)

    if (result.rowCount>0){
      await client.query("COMMIT");
        return result.rows
    }else{
      await client.query("COMMIT");
        return {error:"No Hospital Registered"}
    }

  } catch (error) {
    await client.query("ROLLBACK");
    return { error };
  }
};


const addHospital = async (data) =>{
    try {

        await client.query('BEGIN');
    
        let query = `SELECT * FROM clients WHERE clientid_dev ='${data.clientid_dev}' or clientid_prod='${data.clientid_prod}'`;
        let result = await client.query(query)
        await client.query("COMMIT");
        // console.log(result)
        if(result.rowCount>0){
            
            return {error:"Client Id DEV or PROD already exists"}
        }else{
            query = `INSERT INTO clients (clientid_dev, clientid_prod, hospital_name, description) 
            VALUES ('${data.clientid_dev}', '${data.clientid_prod}', '${data.hospital_name}', '${data.description}')`;
            
    
            result = await client.query(query)
            await client.query("COMMIT");
            console.log(result)
            return {message:'Hospital added successfully'}
        }


       
    
      } catch (error) {
        console.log(error)
        await client.query("ROLLBACK");
        return { error };
      }
}


const getStats = async (data) =>{
    try {
         const hospitalId = data.hospitalId
         const date = new Date(data.date)
         const year = date.getFullYear();
         const month = String(date.getMonth() + 1).padStart(2, "0");
         const day = String(date.getDate()).padStart(2, "0");
         const formattedDate = `${year}-${month}-${day}`;
         console.log("hellooooo")

        await client.query('BEGIN');
    
        let query = `SELECT * FROM stats WHERE client_id ='${hospitalId}' and date='${formattedDate}'`;
        let result = await client.query(query)
        await client.query("COMMIT");
        // console.log(result)
        if (result.rowCount>0){
            return result.rows
        }else{
            return {error:"No Logs Found"}
        }
    
     
       
    
      } catch (error) {
        console.log(error)
        await client.query("ROLLBACK");
        return { error };
      }
}


const addLisence = async (data) =>{
    try {

        await client.query('BEGIN');
    
        let query = `SELECT * FROM lisence WHERE client_id ='${data.hospitalId}'`;
        let result = await client.query(query)
        // console.log(result)
        if(result.rowCount>0){
            
            return {error:"Lisence Already exists"}
        }else{
            query = `INSERT INTO lisence (client_id,max_limit) 
            VALUES ('${data.hospitalId}', '${data.max_limit}')`;
            
    
            result = await client.query(query)
            await client.query("COMMIT");
            console.log(result)
            return {message:'Lisence added successfully'}
        }


       
    
      } catch (error) {
        console.log(error)
        await client.query("ROLLBACK");
        return { error };
      }
}


module.exports = {
  getHospitalDetails,
  addHospital,
  getStats,
  addLisence
};
