const pg = require("pg");
require("dotenv").config();

// const path = require("path");

// const configPath = path.join(__dirname, "..", ".env");
// require("dotenv").config({ path: configPath });

const conString = process.env.CONNECTION_URL;
const client = new pg.Client(conString);

const connectToDb = async () => {
  try {
    await client.connect();
    console.log("connected");

    const { rows } = await client.query(
      // "CREATE TABLE COURIERS (id serial primary key, courier text,  destination text, startDate text, startTime text, endDate text, endTime text)"
      "SELECT * FROM COURIERS"
    );
  } catch (error) {
    console.error("connection error", error.stack);
  }
};

module.exports = { connectToDb, client };
