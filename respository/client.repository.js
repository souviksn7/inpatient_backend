const client = require("../connection/db");

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

module.exports = {
  checkClientID,
};
