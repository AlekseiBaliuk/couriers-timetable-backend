const express = require("express");
const logger = require("morgan");
const cors = require("cors");
require("dotenv").config();
// const path = require("path");

// const configPath = path.join(__dirname, ".env");
// require("dotenv").config({ path: configPath });

const couriersRouter = require("./routes/api/couriers");

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api", couriersRouter);

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  const { status = 500 } = err;
  res.status(status).json({ message: err.message });
});

module.exports = app;
