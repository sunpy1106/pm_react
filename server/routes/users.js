var express = require('express');
var router = express.Router();
var User=require('../models/user');

router.get('/:id?',function(req,res,next){
  if(req.params.id){
      User.getUserById(req.params.id,function(err,rows){
          if(err)
          {
              res.json(err);
          }
          else{
              res.json(rows);
          }
      });
  }
  else{
   User.getAllUsers(function(err,rows){

          if(err)
          {
              res.json(err);
          }
          else
          {
              res.json(rows);
          }

      });
  }
});


module.exports=router;
