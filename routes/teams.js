var express = require('express')
var mongoose = require('mongoose')
var Employee = mongoose.model('Employee')
var Team = mongoose.model('Team')
var router = express.Router();

router.get('/', function(req, res, next) {
  Team.find().exec(function(error, results) {
    if (error) {
      return next(error)
    }

    res.json(results)
  })
})

router.get('/:teamId', function(req, res, next) {
  Team.findOne({
    _id: req.params.teamId
  }, function(error, results) {
    if (error) {
      return next(error)
    }
    console.log(results)
    res.json(results)
  })
})



module.exports = router;