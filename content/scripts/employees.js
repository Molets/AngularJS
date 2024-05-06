var employeesApp = angular.module('employeesApp', ['ngRoute']);

employeesApp.config(['$routeProvider', function($routeProvider){

  $routeProvider
    .when('/home', {
      templateUrl : 'content/views/home.html'
    })
    .when('/employees', {
      templateUrl : 'content/views/list.html',
      controller : 'EmployeesController'
    })
    .otherwise({
      redirectTo : '/home'
    })

}]);

employeesApp.controller('EmployeesController',['$scope', function($scope){

  $scope.employees = [
    {
      name : "Palesa",
      age : 34,
      salary : 3000,
      available : true
    },
    {
      name : "Lerato",
      age : 27,
      salary : 2500,
      available : false
    },
    {
      name : "Liteboho",
      age : 41,
      salary : 5000,
      available : true
    },
    {
      name : "Lenka",
      age : 23,
      salary : 3800,
      available : true
    }
  ];

  $scope.deleteEmployee = function(employee){

    var index = $scope.employees.indexOf(employee);
    $scope.employees.splice(index, 1);

  }

}]);
