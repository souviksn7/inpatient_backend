const { cli } = require("webpack");
const client = require("../connection/db");

const attemptLimitRepository = async (clientId) => {
  try {
    await client.query("BEGIN");
    
    // Check if the client exists
    let query = `SELECT * FROM clients WHERE id = '${clientId}'`;
    let result = await client.query(query);

    if (result.rowCount > 0) {
      // Get the current date
      const currentDate = new Date();
      const year = currentDate.getFullYear();
      const month = String(currentDate.getMonth() + 1).padStart(2, "0");
      const day = String(currentDate.getDate()).padStart(2, "0");
      const formattedDate = `${year}-${month}-${day}`;
      
      // Check if there is a record for the current client and date in the "counter" table
      query = `SELECT s.client_id, l.max_limit, s.count
               FROM counter s
               JOIN lisence l ON s.client_id = l.client_id
               WHERE s.client_id = '${clientId}'
               AND s.date_record = '${formattedDate}'`;

      result = await client.query(query);

      if (result.rowCount > 0) {
        await client.query("COMMIT");
        return result.rows[0];
      } else {
        // If no record found for the current date, insert a new record into the "counter" table
        query = `INSERT INTO counter (client_id, date_record) VALUES (${clientId}, '${formattedDate}') RETURNING *`;
        result = await client.query(query);
        // console.log(result)
        await client.query("COMMIT");
        return result.rows[0];
      }
    } else {
      // If the client does not exist, return an error
      await client.query("ROLLBACK");
      return { error: "No match found for the client" };
    }
  } catch (error) {
    await client.query("ROLLBACK");
    return { error };
  }
};


const updateAttemptDetails = async (data) =>{
  try{
    console.log(data)
  await client.query("BEGIN");
  let query = `SELECT * FROM clients WHERE clientid_dev = '${data.clientId}' `
  let result = await client.query(query)
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, "0");
  const day = String(currentDate.getDate()).padStart(2, "0");
  const formattedDate = `${year}-${month}-${day}`;
  const hospitalname = result.rows[0].hospital_name
  const hospitalId = result.rows[0].id 
  await client.query("END")

  query = `INSERT INTO stats (baseurl,serverurl,patient_id,patient_fname,patient_lname,userid,hospital_name,dob,encounter_id,date,timestamp,client_id)
  values('${data.baseUrl}','${data.serverUrl}','${data.tokenResponse.patient}','${data.tokenResponse.fname}','${data.tokenResponse.lname}','${decodeURIComponent(data.tokenResponse.user)}','${hospitalname}','${decodeURIComponent(data.tokenResponse.dob)}','${data.tokenResponse.encounter}','${formattedDate}','${currentDate}',${hospitalId})`
  console.log(query)
  result = await client.query(query)
  return {mess:"hello"}
  }
  catch(error){
    console.log(error)
    await client.query("ROLLBACK");
    return {error}
  }
}


module.exports = {
  attemptLimitRepository,
  updateAttemptDetails
};
