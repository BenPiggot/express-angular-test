var mongoose = require('mongoose')
var Employee = mongoose.model('Employee')


exports.getEmployees = getEmployees
exports.getEmployee = getEmployee


// polyfill for Array.prototype.find

if (!Array.prototype.find) {
  Array.prototype.find = function(predicate) {
    if (this == null) {
      throw new TypeError('Array.prototype.find called on null or undefined');
    }
    if (typeof predicate !== 'function') {
      throw new TypeError('predicate must be a function');
    }
    var list = Object(this);
    var length = list.length >>> 0;
    var thisArg = arguments[1];
    var value;

    for (var i = 0; i < length; i++) {
      value = list[i];
      if (predicate.call(thisArg, value, i, list)) {
        return value;
      }
    }
    return undefined;
  };
}



function getEmployees(callback) {
  Employee.find().sort('name.last').exec(callback)
}

function getEmployee(employeeId, callback) {
  Employee.findOne({
    id: employeeId
  }).populate('team').exec(callback)
}