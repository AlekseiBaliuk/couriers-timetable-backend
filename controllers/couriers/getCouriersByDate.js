const { client } = require("../../db/connection");

const getCouriersByDate = async (req, res) => {
  const { date } = req.params;
  const { rows } = await client.query(
    `SELECT * FROM COURIERS WHERE CAST(startdate AS DATE) = '${date}'`
  );

  res.status(200).json(rows);
};

module.exports = getCouriersByDate;
