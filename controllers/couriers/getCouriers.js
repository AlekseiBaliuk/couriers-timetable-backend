const { client } = require("../../db/connection");

const getCouriers = async (req, res, next) => {
  const { rows } = await client.query("SELECT * FROM COURIERS");

  res.status(200).json(rows);
};

module.exports = getCouriers;
