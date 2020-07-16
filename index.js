var express = require('express');
var cfenv = require('cfenv');
appEnv = cfenv.getAppEnv();

var app = express();
var port = appEnv.isLocal ? 3000 : appEnv.port;

app.get('/', function(req, res) {

res.send("application running from my node js");

});

app.listen(port,function(){

console.log("applicaiton running on port  "+port);

});