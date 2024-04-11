const client = require("../connection/db");

const countTable = async () => {
  try {
      await client.query("BEGIN");
      const query = `SELECT * from counter`;
      const result = await client.query(query);
      // console.log("table data", result);
      await client.query("END")
      return result
  } catch (error) {
    // console.log(error)
    await client.query("ROLLBACK");
    return error;
  }
}

const checkClientID = async (clientId) => {
  try {
    // console.log(clientId)
    await client.query("BEGIN");
    const query = `SELECT * fROM clients WHERE clientid_dev='${clientId}'`;
    // console.log(query);
    const result = await client.query(query);
    // console.log("repo",result)
    if (result.rowCount == 1) await client.query("END");
    else await client.query("ROLLBACK");
    return result;
  } catch (error) {
    // console.log("repo",error)
    await client.query("ROLLBACK");
    return error;
  }
};


const updateCounter = async (patientId, clientId)=>{
  try{
    // console.log(patientId,clientId)
    await client.query("BEGIN");
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, "0");
    const day = String(currentDate.getDate()).padStart(2, "0");
    const formattedDate = `${year}-${month}-${day}`;
    const query = `SELECT * FROM counter WHERE client_id = '${clientId}' AND date_record = '${formattedDate}' `;

    // console.log(query);
    const result = await client.query(query);
    // console.log("repo",result.rows)
    if (result.rowCount == 1) {
      // console.log("hiiiiiiiiiiiii")
      await client.query("END")
      await client.query("BEGIN");
      const query1 = `UPDATE counter
      SET count = count + 1 
      WHERE client_id = '${clientId}' AND date_record = '${formattedDate}';
      `;
      
      const result1 = await client.query(query1)
      await client.query("END")
      // console.log(result1)
    }
    else await client.query("ROLLBACK");
    await client.query("BEGIN");
   const finalresult =  await client.query(query);
   
  //  console.log(finalresult)
    return finalresult;
  }catch(error){
    console.log(error)
    await client.query("ROLLBACK");
    return {error};
  }

}


const clientConfigPath = async (clientId) => {
  try{
     await client.query("BEGIN")
    //  console.log(clientId)
     const query = `SELECT * FROM hospitalconfig where hospital_id = ${clientId}`;
     const result = await client.query(query)
     return result
  }catch(error){
    return {error}
  }
}
module.exports = {
  checkClientID,
  updateCounter,
  countTable,
  clientConfigPath
};
