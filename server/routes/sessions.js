var express = require('express');
var router = express.Router();
var Session=require('../models/session');


router.post('/',function(req,res,next){
  console.log(`user login in ${req.body}`);
  Session.login(req.body,function(err,count){

      if(err)
      {
          res.json(err);
      }
      else{
          res.json(req.body);//or return count for 1 & 0
      }
  });
});

module.exports=router;
