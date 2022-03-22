const comments = require("express").Router()

const commentsController = require("../controllers/comments")

comments.get("/", commentsController.getAllComment )
comments.get("/users/", commentsController.getAllUserComment)
comments.post("/", commentsController.createComment)
comments.delete("/:id", commentsController.deleteComment)
comments.patch("/:id", commentsController.updateComment)

module.exports = comments
