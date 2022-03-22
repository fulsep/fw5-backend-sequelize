const blogCategory = require("express").Router()

const categoryBlogController = require("../controllers/blogCategory")

blogCategory.get("/", categoryBlogController.getCategoryName)
blogCategory.post("/", categoryBlogController.createCategoryBlog)
blogCategory.patch("/:id", categoryBlogController.updateCategoryBlogName)
blogCategory.get("/:id", categoryBlogController.categoryNameDetail)
blogCategory.delete("/:id", categoryBlogController.deleteCategoryName)

module.exports = blogCategory
