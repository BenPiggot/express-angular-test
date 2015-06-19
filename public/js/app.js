var app = angular.module('app', ['ngRoute'])

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
  .when('/employees', {
    templateUrl: '/views/employees.html',
    controller: 'MainCtrl'
  })
  // .when('/about', {
  //   templateUrl: '/views/about.html',
  //   controller: 'StaticCtrl'
  // })
  // .otherwise({
  //   templateUrl: '/views/404.html'
  // })

}])