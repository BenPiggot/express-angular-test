var debug = require('debug')('example server');
var express = require('express')
var app = express();
var bodyParser = require("body-parser");
require('./lib/connection')
var employeeService = require('./lib/employees')
var responder = require('./lib/responseGenerator')
var staticFile = responder.staticFile('/public')
var employeesCtrl = require("./routes/employees");
var teamsCtrl = require("./routes/teams");

app.set('port', process.env.PORT || 3000)

var server = app.listen(app.get('port'), function() {
  debug('Express server listening on port ' + server.address().port)
  console.log('Server running at http://localhost:3000')
})

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json())
app.use(express.static(__dirname + "/public"));

app.use("/api/employees", employeesCtrl);

app.use("/api/teams", teamsCtrl)

app.get('/*', function(req, res) {
  res.render('home.ejs')
})
