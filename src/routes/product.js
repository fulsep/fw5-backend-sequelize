const product = require("express").Router()

const productImagesController = require("../controllers/productImages")

product.get("/images", productImagesController.getAllImages)
product.post("/images", productImagesController.createImages)
product.patch("/images/:id", productImagesController.updateImage)
product.delete("/images/:id", productImagesController.deleteImage)

module.exports = product
