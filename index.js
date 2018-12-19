const tracer = require('dd-trace').init({
  debug: true
})

const express = require('express')
const request = require('request')
const proxy = require('express-http-proxy');

tracer.use('express')


const app = express()

app.use('/proxy', proxy('http://localhost:8888/'));

app.get('/ids/:id', function(req, res){ 

	var url = "http://127.0.0.1:8888/ids/"
	url += req.params['id']

    request(url, function (error, response, body) {

          res.send(body)

    });

})

app.listen(3000)