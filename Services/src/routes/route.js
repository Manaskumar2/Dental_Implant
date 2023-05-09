const express = require("express");
const router = express.Router();

const { createAppointement } = require("../controller/appointementController");

router.post ("/createAppontments",createAppointement)


module.exports =router