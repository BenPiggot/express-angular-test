

app.controller('MainCtrl',['$scope', '$http', '$rootScope', function($scope, $http, $rootScope){
  console.log('main controller online')

  $scope.employees = [];

  $scope.firstName = '';
  $scope.lastName = '';
  $scope.id = ''

  $http.get('/api/employees').success(function(data) {
    $scope.employees = data;
  });



  $scope.add = function() {
    $http.post('/api/employees', {
      id: $scope.id,
      first: $scope.firstName,
      last: $scope.lastName}).success(function(data) {
        $scope.employees.push(data);
        $scope.firstName = '';
        $scope.lastName = '';
        $scope.id = '';
    })
  }

  $scope.remove = function(employee) {
    $http.delete('/api/employees/' + employee.id).success(function(data) {
      $scope.employees = data;
    })
  }
}])