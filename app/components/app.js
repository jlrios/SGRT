var appSGRT = angular.module('sgrt', ['ngRoute']);

appSGRT.config(function($routeProvider) {

  $routeProvider
    .when('/localhost:8080/main', {
      templateUrl: '../views/dashboard/dashboard.jade',
      controller: 'mainController'
    })
});
