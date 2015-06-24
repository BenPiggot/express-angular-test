app.controller('EmployeeCtrl',['$scope', '$http', '$rootScope', '$routeParams',
 function($scope, $http, $rootScope, $routeParams){

  console.log('employee service working')
  console.log($routeParams.employeeId)

  $scope.show = function(employee) {
    $http.get('/api/employees/' + $routeParams.employeeId).success(function(data) {
      $scope.employee = data;
      console.log(data)
    })
  }
  $scope.show()

}]);