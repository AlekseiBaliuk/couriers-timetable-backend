const { client } = require("../../db/connection");

const deleteCourier = async (req, res) => {
  const { id } = req.params;
  console.log(id);

  await client.query("DELETE FROM couriers WHERE id = $1", [id]);

  res.status(200).json({ message: "Deleted" });
};

module.exports = deleteCourier;
