const tracer = require('dd-trace').init({
    debug: true
  })
  var express = require('express');
  var app = express();
  var http = require('http');
  
  
  tracer.use('express')
  
  
  // This responds a GET request for the homepage
  app.get('/', function (req, res) {
     console.log("Got a request request for the homepage");
     res.send('Hello World!');
  //   console.log("Headers Here: ")
  //   console.log(res);
  })
  
  app.listen(3030)
  