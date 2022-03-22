const Sequelize = require("sequelize")
const sequelize = require("../helpers/sequelize")


const Tag = sequelize.define("tag", {
    name: {
        type: Sequelize.STRING,
        validate: {
            notEmpty: {
                msg: "Name cannot be empty!"
            }
        }
    },
    description: {
        type: Sequelize.STRING,
        validate: {
            notEmpty: {
                msg: "Description cannot be empty!"
            }
        }
    },
})

module.exports = Tag
