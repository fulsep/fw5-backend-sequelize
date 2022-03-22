const Sequelize = require("sequelize")
const sequelize = require("../helpers/sequelize")
// const Users = require("./users")

const Comments = sequelize.define("comments",{
  comment :{
    type: Sequelize.STRING,
    validate: {
      notEmpty: {
        msg: "Name cannot be empty!"
      }
    }
  },
  userId :{
    type: Sequelize.INTEGER,
    // reference :{
    //     model : Users,
    //     key: "id"
    // }
  }
})

module.exports = Comments
