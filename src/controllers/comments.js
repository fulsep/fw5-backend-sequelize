const Comments = require("../models/comments")
const Users = require("../models/users")

exports.getAllComment = async(req,res)=>{
  try{
    const comments = await Comments.findAll()
    return res.send({
      success: true,
      message : "List all comments",
      results : comments
    })
  } catch(err){
    return res.status(500).send({
      success: false,
      message : "Unexpected error",
      results: err.errors.map(err => ({field: err.path, message: err.message}))
    })
  }
    
}

exports.getAllUserComment = async(req, res)=>{
  try{
    const results = await Users.findAll({
      include : Comments
    })
    return res.send({
      success : true,
      message : "List Users with comments",
      results
    })
  } catch(err){
    return res.status(500).send({
      success: false,
      message : "Unexpected error",
      results: err.errors.map(err => ({field: err.path, message: err.message}))
    })
  }
    
}

exports.createComment = async(req, res)=>{
  try{
    const user = await Users.findByPk(req.body.userId)
    if(user){
      const results = await Comments.create(req.body)
      return res.send({
        success: true,
        message : "Comments Created",
        results 
      })
    } else{
      return res.status(404).send({
        success : false,
        message : "user not found"
      })
    }
  } catch(err){
    return res.status(500).send({
      success: false,
      message : "Unexpected error",
      results: err.errors.map(err => ({field: err.path, message: err.message}))
    })
  }
}

exports.deleteComment = async(req, res)=>{
  try{
    const { id } = req.params
    const comment = await Comments.findByPk(id)
    if(comment){
      await comment.destroy()
      return res.send({
        success: true,
        message :"Comment Deleted",
        results : comment 
      })
    } else {
      return res.status(404).send({
        success : false,
        message : "Data not found"
      })
    }
        
  } catch(err){
    return res.status(500).send({
      success: false,
      message : "Unexpected error",
      results: err.errors.map(err => ({field: err.path, message: err.message}))
    })
  }
}

exports.updateComment = async(req,res)=>{
  try{
    const {id} = req.params
    const comment = await Comments.findByPk(id)
    if(comment){
      for(let key in req.body){
        comment[key] = req.body[key]
      }
      await comment.save()
      return res.send({
        success : true,
        message : "Update Successfully ",
        results : comment
      })
    } else{
      return res.status(404).send({
        success : false,
        message : "Data not found"
      })
    }
  } catch(err){
    return res.status(500).send({
      success: false,
      message : "Unexpected error",
      results: err.errors.map(err => ({field: err.path, message: err.message}))
    })
  }
}
