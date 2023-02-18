const { connectToDb } = require("./db/connection");

const app = require("./app");

const { PORT = 3000 } = process.env;

connectToDb();
app.listen(PORT, () => {
  console.log(`Server running. Use our API on port: ${PORT}`);
});
