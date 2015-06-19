var async = require('async');
var mongoose = require('mongoose');
require(process.cwd() + '/lib/connection');
var Employee = mongoose.model('Employee');
var Team = mongoose.model('Team');

var data = {
  employees: [
    {
      id: '1000003',
      name: {
        first: 'Colin',
        last: 'Ihrig'
      },
      image: 'images/employees/1000003.png',
      address: {
        lines: ['11 Wall Street'],
        city: 'New York',
        state: 'NY',
        zip: '10118'
      }
    },
      {
      id: '1000021',
      name: {
        first: 'Adam',
        last: 'Bretz'
      },
      address: {
        lines: ['46 18th St', 'St. 210'],
        city: 'Pittsburgh',
        state: 'PA',
        zip: '15222'
      }
    },
      {
      id: '1000022',
      name: {
        first: 'Matt',
        last: 'Liegey'
      },
      address: {
        lines: ['2 S Market Suqre', '(Market Square)'],
        city: 'Pittsburgh',
        state: 'PA',
        zip: '15222'
      }
    },
      {
      id: '1000025',
      name: {
        first: 'Aleksey',
        last: 'Smolenchuk'
      },
      image: 'images/employees/1000025.png',
      address: {
        lines: ['3803 Forbes Ave'],
        city: 'Pittsburgh',
        state: 'PA',
        zip: '15213'
      }
    },
      {
      id: '1000030',
      name: {
        first: 'Sarah',
        last: 'Gay'
      },
      address: {
        lines: ['8651 University Blvd'],
        city: 'Pittsburgh',
        state: 'PA',
        zip: '15108'
      }
    },
    {
      id: '1000031',
      name: {
        first: 'Dave',
        last: 'Beshero'
      },
      address: {
        lines: ['1539 Washington Rd.'],
        city: 'Mt. Lebanon',
        state: 'PA',
        zip: '15228'
      }
    }
  ],
  teams: [
    {
      name: 'Software and Services Group'
    },
    {
      name: 'Project Deelopment'
    }
  ]
}

var deleteEmployees = function(callback) {
  console.log('Deleting employees')
  Employee.remove({}, function(error, response) {
    if (error) {
      console.log('Error deleting employees: ' + error);
    }

    console.log('Done deleting employees')
    callback()
  })
}

var addEmployees = function(callback) {
  console.log('Adding employees')
  Employee.create(data.employees, function(error) {
    if (error) {
      console.log('Error: ' + error);
    }

    console.log('Done adding employees')
    callback()
  })
}

var deleteTeams = function(callback) {
  console.log('Deleting teams')
  Team.remove({}, function(error, response) {
    if (error) {
      console.log('Error deleting teams: ' + error);
    }
    console.log('Done deleting teams')
    callback()
  })
}

var addTeams = function(callback) {
  console.log('Adding employees')
  Team.create(data.teams, function(error, team1) {
    if (error) {
      console.log('Error: ' + error);
    }
    else {
      data.team_id = team1._id;
    }
    console.log('Done adding teams')
    callback()
  })
}

var updateEmployeeTeams = function(callback) {
  console.log('Updating employee teams');
  var team = data.teams[0]

  // Set eveyone to be on the same team to start
  Employee.update({}, {
    team: data.team_id
  }, {
    multi: true
  }, function (error, numberAffected, response) {
    if (error) {
      console.log('Error updating employee team: ' + error);
    }

    console.log('Done updating employee teams')
    callback()
  }

  )
}

async.series([
  deleteEmployees,
  deleteTeams,
  addEmployees,
  addTeams,
  updateEmployeeTeams
], function(error, results) {
  if (error) {
    console.log('Error: ' + error)
  }

  mongoose.connection.close();
  console.log('Done!')
})



