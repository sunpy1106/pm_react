var express = require('express');
var router = express.Router();
var TeamMember = require('../models/TeamMember');

router.get('/:id?',function(req,res,next){
  if(req.params.id){
    TeamMember.getTeamMemberById(req.params.id,function(err,rows){
      if(err){
        res.json(err);
      }else{
        res.json(rows);
      }
    });
  }

});
module.exports=router;
