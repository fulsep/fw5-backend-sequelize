const routes = require("express").Router()

routes.use("/users", require("./users"))
routes.use("/product", require("./product"))
routes.use("/blogCategory", require("./blogCategory"))

module.exports = routes
