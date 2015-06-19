var mongoose = require('mongoose');
var dbUrl = 'mongodb://127.0.0.1'

mongoose.connect(dbUrl);

process.on('SIGINT', function() {
  mongoose.connection.close(function(){
    console.log('Mongoose default connection disconnected')
    rpocess.exit(0)
  })
})

require('../models/employee')
require('../models/team')