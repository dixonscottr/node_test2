const tracer = require('dd-trace').init({
    debug: true
  })
  var express = require('express');
  var app = express();
  var http = require('http');
  const request = require('request');
  
  tracer.use('express')
  
  
  app.get('/test', function (req, res) {
    console.log("sending request...")
    
    request('http://localhost:3030/', function (error, response, body) {
            res.send('')
            //console.log(response.body)
      if (error) {
       console.log(error)
      }
     console.log(body)
      });
   
  })
  
  
  
  var server = app.listen(8081, function () {
  
     var host = server.address().address
     var port = server.address().port
  
     console.log("Example app listening at http://%s:%s", host, port)
  })
  