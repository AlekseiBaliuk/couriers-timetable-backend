const express = require("express");
const router = express.Router();

const validation = require("../../middlewares/validation");
const couriersJoiSchema = require("../../db/validationSchema");

const { couriers: ctrl } = require("../../controllers");

const ctrlWrapper = require("../../helpers/ctrlWrapper");

router.get("/couriers", ctrlWrapper(ctrl.getCouriers));

router.post(
  "/couriers",
  validation(couriersJoiSchema),
  ctrlWrapper(ctrl.addCourier)
);

router.get("/couriers/date/:date", ctrlWrapper(ctrl.getCouriersByDate));

router.get("/couriers/time/:time", ctrlWrapper(ctrl.getCouriersByTime));

router.delete("/couriers/:id", ctrlWrapper(ctrl.deleteCourier));

module.exports = router;
