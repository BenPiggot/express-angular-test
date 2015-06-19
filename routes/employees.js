var express = require('express')
var mongoose = require('mongoose')
var Employee = mongoose.model('Employee')
var Team = mongoose.model('Team')
var router = express.Router();


router.get('/', function(req, res, next) {
  Employee.find().exec(function(error, results) {
  if (error) {
    next(error)
  }
  res.json(results)
})
})

router.post('/', function(req,res, next) {
  Employee.create({
    id: req.body.id,
    name: {first: req.body.first, last: req.body.last}
  },function(error, data) {
  if (error) {
    next(error)
  }
  res.json(data)
})

})

// router.get('/:employeeId', function(req, res, next) {
//   Employee.findOne({
//     id: req.params.employeeId
//   }).populate('team').exec(function(error, results) {
//     if (error) {
//       next(error)
//     }
//     if (!results) {
//       res.send(404)
//     }
//     res.json(results)
//   })
// })

router.delete('/:employeeId', function(req, res, next) {
   Employee.remove({id: req.params.employeeId}, function(err) {
    if (err) {
      return next(err);
    }
    Employee.find().exec(function(error, results) {
      if (error) {
        next(error)
      }
      res.send(results)
    })
   })
})





module.exports = router;