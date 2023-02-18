const { client } = require("../../db/connection");

const getCouriersByTime = async (req, res) => {
  const { time } = req.params;
  console.log(time);
  const { rows } = await client.query(
    `SELECT * FROM COURIERS WHERE CAST(endtime AS TIME) >= '${time}'`
  );

  res.status(200).json(rows);
};

module.exports = getCouriersByTime;
