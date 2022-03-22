const routes = require("express").Router()

routes.use("/users", require("./users"))
routes.use("/comments", require("./comments"))
routes.use("/phones", require("./phones"))

module.exports = routes
