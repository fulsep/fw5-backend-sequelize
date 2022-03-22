const Sequelize = require("sequelize")
const sequelize = require("../helpers/sequelize")

const Product = require("./product")

const ProductImage = sequelize.define("product_images", {
  productId: {
    type: Sequelize.INTEGER,
    references: {
      model: Product,
      key: "id"
    }
  },
  imagesProduct: Sequelize.STRING
})

module.exports = ProductImage
