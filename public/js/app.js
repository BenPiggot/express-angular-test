var app = angular.module('app', ['ngRoute', 'ngResource'])

app.run(['$rootScope', function($rootScope) {
   console.log("news app up and running")
}])

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

  $locationProvider.html5Mode(true);

  $routeProvider
  .when('/', {
    templateUrl: '/views/home.html',
    controller: 'MainCtrl'
  })
  .when('/employees/:employeeId', {
    templateUrl: '/views/employees.html',
    controller: 'EmployeeCtrl'
  })
  .when('/about', {
    templateUrl: '/views/about.html',
    controller: 'StaticCtrl'
  })
  .otherwise({
    templateUrl: '/views/404.html'
  })

}])