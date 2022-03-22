const product = require("express").Router()

const productController = require("../controllers/product")
const productImagesController = require("../controllers/productImages")

product.get("/", productController.getAllProducts)
product.post("/", productController.createProduct)
product.get("/images", productImagesController.getAllImages)
product.get("/with-image", productController.getAllProductWithImage)
product.patch("/:id", productController.updateProduct)
product.get("/:id", productController.detailProduct)
product.delete("/:id", productController.deleteProduct)
product.post("/images", productImagesController.createImages)
product.patch("/images/:id", productImagesController.updateImage)
product.delete("/images/:id", productImagesController.deleteImage)

module.exports = product
