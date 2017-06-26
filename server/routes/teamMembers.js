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

router.post('/:id',function(req,res,next){

  TeamMember.deleteMember(req.params.id,req.body._userId,function(err,count){
    if(err)
    {
      res.json(err);
    }
    else
    {
      res.json(count);
    }
  });
});
module.exports=router;
