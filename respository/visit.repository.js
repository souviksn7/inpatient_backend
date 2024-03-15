const client = require("../connection/db");

const getFileName = async () => {
  try {
    await client.query("BEGIN");
    const query = `SELECT * fROM visits WHERE filename='chopData' `;
    // console.log(query);
    const result = await client.query(query);
    
    // console.log("repo",result)
    await client.query("END");

    return result;
  } catch (error) {
    // console.log("repo",error)
    await client.query("ROLLBACK");
    return error;
  }
};

module.exports = {
  getFileName,
};
