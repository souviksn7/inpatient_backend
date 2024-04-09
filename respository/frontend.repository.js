const client = require("../connection/db");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require("dotenv").config();

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
        //  console.log("hellooooo")

        await client.query('BEGIN');
    
        let query = `SELECT * FROM stats WHERE client_id ='${hospitalId}' and date='${formattedDate}'`;
        let result = await client.query(query)
        await client.query("COMMIT");
        // console.log(result)
        if (result.rowCount>0){
            return {statistics:result.rows}
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


const signup = async (data) => {
  try {
    await client.query("BEGIN");

    // Check if the email already exists
    let query = `SELECT * FROM users WHERE email='${data.email}'`;
    let result = await client.query(query);

    if (result.rowCount > 0) {
      await client.query('END');
      return { message: "Email Already Exists" };
    } else {
      // Hash the password
      const hashedPassword = await bcrypt.hash(data.password, 10);

      // Insert the user into the database
      query = `INSERT INTO users (name, email, password) VALUES ('${data.name}', '${data.email}', '${hashedPassword}')`;
      result = await client.query(query);

      // Generate JWT token
      const token = jwt.sign({ email: data.email }, process.env.SECRET_KEY, { expiresIn: '1h' });

      await client.query('COMMIT');

      return { message: "SignUp Successfully", token: token };
    }
  } catch (error) {
    await client.query('ROLLBACK');
    console.error(error);
    return { error: error };
  }
}



const login = async (data) => {
  try {
    let query = `SELECT * FROM users WHERE email='${data.email}'`;
    let result = await client.query(query);

    if (result.rows.length === 0) {
      return { message: "User not found" };
    }

   
    const user = result.rows[0];
    const isPasswordValid = await bcrypt.compare(data.password, user.password);

    if (!isPasswordValid) {
      return { message: "Invalid password" };
    }

   
    const token = jwt.sign({ email: data.email }, process.env.SECRET_KEY, { expiresIn: '1h' });

    return { message: "Login successful", token: token };
  } catch (error) {
    console.error(error);
    return { error: error };
  }
}


module.exports = {
  getHospitalDetails,
  addHospital,
  getStats,
  addLisence,
  signup,
  login
};