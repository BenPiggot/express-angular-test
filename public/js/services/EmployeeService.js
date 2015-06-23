app.factory('EmployeeService', ['$resource', function($resource){
  console.log($resource)
  return $resource('/api/employees/:employeeId', {}, {
    'get': {
      isArray: true
    },
    'delete': {
      isArray: true,
      method: 'DELETE'
    },
    'post': {
      method: 'POST'
    }
  })

}])