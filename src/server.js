const http = require('http')
const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const port = 3001

app.get('/',(request,response)=>{
  response.send('hello from express!')
})

app.listen(port,(err) =>{
  if(err){
    return console.log('something bad happened',err)
  }
  console.log( `server is listening on ${port}`)
})

app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: true }));
// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000' );

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware

    next();
});

app.get('/login',(request,response)=>{
  response.json({
    userName:'liufei',
    nickName:'sunpy'
  })
})

app.post('/login', function(request, response){
  console.log(request.body);      // your JSON
  response.send(request.body);    // echo the result back
});

app.post('/team/:id',function(request,response){
  console.log(request.body);
  var val = request.body;

  console.log(val);
  response.json({
    userId:'101',
    userNickName:'liufei101',
    userName:'刘飞101',
    role:'组长'
  });
});

app.post('/teamadd/:id',function(request,response){
  console.log(request.body);
  var val = request.body;

  console.log(val);
  response.json(
    {teamId:'12346',
    teamName:'数据仓库A',
    teamMember:[
      {
        userId:'1',
        userNickName:'liufei',
        userName:'刘飞1',
        role:'组长'
      },
      {
        userId:'2',
        userNickName:'liufei2',
        userName:'刘飞2',
        role:'组员'
      },
      {
        userId:'3',
        userNickName:'liufei3',
        userName:'刘飞3',
        role:'组员'
      },
      {
        userId:'4',
        userNickName:'liufei4',
        userName:'刘飞4',
        role:'组员'
      }
  ]});
});


app.get('/teams',(request,response)=>{
  console.log(request.query.userId);
  response.json(
    [
      {
        teamId:'12345',
        teamName:'数据仓库',
        teamMember:[
          {
            userId:'1',
            userNickName:'liufei',
            userName:'刘飞1',
            role:'组长'
          },
          {
            userId:'2',
            userNickName:'liufei2',
            userName:'刘飞2',
            role:'组员'
          },
          {
            userId:'3',
            userNickName:'liufei3',
            userName:'刘飞3',
            role:'组员'
          },
          {
            userId:'4',
            userNickName:'liufei4',
            userName:'刘飞4',
            role:'组员'
          }
        ],
        children:[{
          teamId:'12346',
          teamName:'贴源组',
          teamMember:[
            {
              userId:'10',
              userNickName:'liufei',
              userName:'刘飞10',
              role:'组长'
            },
            {
              userId:'11',
              userNickName:'liufei2',
              userName:'刘飞11',
              role:'组员'
            },
            {
              userId:'12',
              userNickName:'liufei3',
              userName:'刘飞12',
              role:'组员'
            }
          ],
          children:[]
        }
      ]
      },
      {
        teamId:'12323',
        teamName:'新一代企业级数据仓库贴源组',
        teamMember:[
          {
            userId:'5',
            userNickName:'liufei',
            userName:'刘飞5',
            role:'组长'
          },
          {
            userId:'6',
            userNickName:'liufei2',
            userName:'刘飞6',
            role:'组员'
          },
          {
            userId:'7',
            userNickName:'liufei3',
            userName:'刘飞7',
            role:'组员'
          },
          {
            userId:'8',
            userNickName:'liufei4',
            userName:'刘飞8',
            role:'组员'
          }
        ],
        children:[]
      }
    ]
  )
})
