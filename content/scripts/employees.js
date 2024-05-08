var employeesApp = angular.module('employeesApp', ['ngRoute']);

employeesApp.config(['$routeProvider', '$locationProvider',
                    function($routeProvider, $locationProvider){

  $locationProvider.html5Mode(true);

  $routeProvider
    .when('/home', {
      templateUrl : 'content/views/home.html',
      controller : 'EmployeesController'
    })
    .when('/list', {
      templateUrl : 'content/views/list.html',
      controller : 'EmployeesController'
    })
    .otherwise({
      redirectTo : '/home'
    });

}]);

employeesApp.directive('randomEmployee',[function(){

  return {
    restrict : 'E',
    scope : {
      employees : '=',
      title : '='
    },
    templateUrl : 'content/views/random_employee.html',
    replace : true,
    transclude : true,
    controller : function($scope){
      $scope.random = Math.floor(Math.random() * 4);
      console.log($scope.random);
    }
  };

}]);

employeesApp.controller('EmployeesController',['$scope', '$http', function($scope, $http){

  $http.get('data/employees.json')
        .then(function(response){

          $scope.employees = response.data;

        }, function(error){

          console.log(error);

        });

  $scope.addEmployee = ()=>{

    $scope.employees.push({
      name : $scope.newEmployee.name,
      age : $scope.newEmployee.age,
      salary : $scope.newEmployee.salary,
      available : true
    });

    $scope.newEmployee.name = '';
    $scope.newEmployee.age = '';
    $scope.newEmployee.salary = '';

  };

  $scope.deleteEmployee = function(employee){

    var index = $scope.employees.indexOf(employee);
    $scope.employees.splice(index, 1);

  }

}]);
