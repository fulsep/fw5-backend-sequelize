const Sequelize = require("sequelize")
const sequelize = require("../helpers/sequelize")

const BlogCategory = sequelize.define("blogCategory", {
    category_name: {
        type: Sequelize.STRING,
        validate: {
            notEmpty: {
                msg: "Category name cannot be empty!"
            }
        }
    }
})

module.exports = BlogCategory
