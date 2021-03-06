var express = require('express');
var router = express.Router();
var Team=require('../models/Team');
var TeamMember = require('../models/TeamMember');
router.get('/:id?',function(req,res,next){
  if(req.params.id){
      Team.getTeamById(req.params.id,function(err,rows){
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
   Team.getAllTeams(function(err,rows){

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


router.post('/',function(req,res,next){
        Team.addTeam(req.body,function(err,count){
            //console.log(req.body);
            if(err)
            {
                res.json(err);
            }
            else{
                    res.json(req.body);//or return count for 1 & 0
            }
        });
});
router.post('/:id',function(req,res,next){
  console.log(req.body);
  if(req.body.hasOwnProperty('persons')){
    Team.addMember(req.body,function(err,count){
      if(err)
      {
        res.json(err);
      }
      else
      {
        res.json(count);
      }
    });
  }else if(req.body.hasOwnProperty('teams')){
    Team.addTeam(req.body,function(err,count){
        //console.log(req.body);
        if(err)
        {
            res.json(err);
        }
        else{
            res.json(req.body);//or return count for 1 & 0
        }
    });
  }else if(req.body.hasOwnProperty('_method') && req.body._method=='delete'){
    var teamId = req.params.id;
    Team.deleteTeam(teamId,function(err,count){
      if(err){
        res.json(err);
      }else{
        res.json(count);
      }
    });
  }

});
router.delete('/:id',function(req,res,next){
  Team.deleteTeam(req.params.id,function(err,count){
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
router.put('/:id',function(req,res,next){
    Team.updateTeam(req.params.id,req.body,function(err,rows){
        if(err)
        {
            res.json(err);
        }
        else
        {
            res.json(rows);
        }
    });
});
module.exports=router;
