const tracer = require('dd-trace').init({
    debug: true
})
const express = require('express');
const http = require('http');
const request = require('request');

tracer.use('express')

const app = express();

app.get('/test', function (req, res) {
    console.log("sending request...")

    request('http://localhost:8888/', function (error, response, body) {
      res.send('')
      if (error) {
        console.log(error)
      }
      console.log("headers: ", response.headers);
      console.log("body: ", body)
      });
})

app.get('/test2', function (req, res) {
    console.log("receiving request...")
    console.log("headers: ", JSON.stringify(req.headers))
    res.end()
})



const server = app.listen(8081, function () {

    const host = server.address().address
    const port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)
})
