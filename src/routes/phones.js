const phones = require("express").Router()
const phonesController = require("../controllers/phones")

phones.get("/", phonesController.getAllPhones)

module.exports = phones
