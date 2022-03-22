const ProductImage = require("../models/productImage")
const Sequelize = require("sequelize")

exports.getAllImages = async (req, res) => {
  // const { search = "" } = req.query
  const results = await ProductImage.findAll({
    limit: 5,
    offset: 0
  })
  return res.send({
    success: true,
    message: "List all Images",
    results
  })
}


exports.createImages = async (req, res) => {
  try {
    const image = await ProductImage.create(req.body)
    return res.send({
      success: true,
      message: "Images created!",
      results: image
    })
  } catch (e) {
    return res.status(400).send({
      success: false,
      message: "Error",
      results: e.message
    })
  }
}


exports.deleteImage = async (req, res) => {
  const { id } = req.params
  const image = await ProductImage.findByPk(id)
  console.log(image)
  if (image) {
    await image.destroy()
    return res.send({
      success: true,
      message: "User Deleted!"
    })
  } else {
    return res.status(404).send({
      success: false,
      message: "User not found!"
    })
  }
}

exports.updateImage = async (req, res) => {
  const { id } = req.params
  const image = await ProductImage.findByPk(id)
  if (image) {
    for (let key in req.body) {
      image[key] = req.body[key]
    }
    await image.save()
    return res.send({
      success: true,
      message: "Image Product updated!",
      results: image
    })
  } else {
    return res.status(404).send({
      success: false,
      message: "Image Product  found!"
    })
  }
}
