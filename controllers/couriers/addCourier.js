const { client } = require("../../db/connection.js");

const addCourier = async (req, res, next) => {
  const query = `
  INSERT INTO couriers(courier,destination,startDate,startTime,endDate,endTime)
   VALUES($1,$2,$3,$4,$5,$6)
   RETURNING *;
   `;
  const values = [
    req.body.courier,
    req.body.destination,
    req.body.startDate,
    req.body.startTime,
    req.body.endDate,
    req.body.endTime,
  ];

  const { rows } = await client.query(query, values);
  res.status(201).json(rows);
};

module.exports = addCourier;
