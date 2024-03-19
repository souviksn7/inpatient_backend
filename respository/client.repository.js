const client = require("../connection/db");

const countTable = async () => {
  try {
      await client.query("BEGIN");
      const query = `SELECT * from stats`;
      const result = await client.query(query);
      // console.log("table data", result);
      await client.query("END")
      return result
  } catch (error) {
    console.log(error)
    await client.query("ROLLBACK");
    return error;
  }
}

const checkClientID = async (clientId) => {
  try {
    await client.query("BEGIN");
    const query = `SELECT * fROM client WHERE clientId_dev='${clientId}'`;
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


const updateStats = async (patientId, clientId)=>{
  try{
    console.log(patientId,clientId)
    await client.query("BEGIN");
    const query = `SELECT * FROM stats WHERE client_id = '${clientId}' AND patient_id = '${patientId}'`;

    // console.log(query);
    const result = await client.query(query);
    console.log("repo",result.rows)
    if (result.rowCount == 1) {
      // console.log("hiiiiiiiiiiiii")
      await client.query("END")
      await client.query("BEGIN");
      const query1 = `UPDATE stats 
      SET count = count + 1 
      WHERE client_id = '${clientId}' 
      AND patient_id = '${patientId}';
      `;
      
      const result1 = await client.query(query1)
      await client.query("END")
      // console.log(result1)
    }
    else await client.query("ROLLBACK");
    await client.query("BEGIN");
   const finalresult =  await client.query(query);
   console.log(finalresult)
    return finalresult;
  }catch(error){
    console.log(error)
    await client.query("ROLLBACK");
    return error;
  }

}
module.exports = {
  checkClientID,
  updateStats,
  countTable
};
