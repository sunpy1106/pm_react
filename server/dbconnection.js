var mysql=require('mysql');
var connection=mysql.createPool({

host:'localhost',
user:'sunpy',
password:'liufei302',
database:'reactdb',
multipleStatements:true
});
module.exports=connection;
