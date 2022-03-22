const blogCategory = require("../models/blogCategory")
// const Sequelize = require("sequelize")

exports.getCategoryName = async(req, res)=> {
  try {
    // const {search=""} = req.query
    const results = await blogCategory.findAll()
    return res.send({
      success: true,
      message: "List all users",
      results
    })
  } catch (e) {
    return res.status(500).send({
      success: false,
      message: "Unexpected Error"
    })
  }
}

exports.createCategoryBlog = async(req, res)=>{
  try{
    const categoryName = await blogCategory.create(req.body)
    return res.send({
      success: true,
      message: "Category created!",
      results: categoryName
    })
  }catch(e){
    return res.status(500).send({
      success: false,
      message: "Error",
      results: e.errors.map(err => ({field: err.path, message: err.message}))
    })
  }
}

exports.updateCategoryBlogName = async (req, res)=> {
  try {
    const {id} = req.params
    const categoryName = await blogCategory.findByPk(id)
    if(categoryName){
      for(let key in req.body){
        categoryName[key] = req.body[key]
      }
      await categoryName.save()
      return res.send({
        success: true,
        message: "Category Name updated!",
        results: categoryName
      })
    }else{
      return res.status(404).send({
        success: false,
        message: "Category Name not found!"
      })
    }
  } catch (e) {
    return res.status(500).send({
      success: false,
      message: "Error",
      results: e.errors.map(err => ({field: err.path, message: err.message}))
    })
  }
}

exports.categoryNameDetail = async(req, res)=> {
  try {
    const {id} = req.params
    const categoryName = await blogCategory.findByPk(id)
    if(categoryName){
      return res.send({
        success: true,
        message: "Category Name Detail",
        results: categoryName
      })
    }else{
      return res.status(404).send({
        success: false,
        message: "Category Name not found!"
      })
    }
  } catch (e) {
    return res.status(500).send({
      success: false,
      message: "Error",
      results: e.errors.map(err => ({field: err.path, message: err.message}))
    })
  }
}

exports.deleteCategoryName = async(req, res)=> {
  const {id} = req.params
  const categoryName = await blogCategory.findByPk(id)
  if(categoryName){
    await categoryName.destroy()
    return res.send({
      success: true,
      message: "Category Name Deleted!"
    })
  }else{
    return res.status(404).send({
      success: false,
      message: "Category Name not found!"
    })
  }
}
