angular.module('calcApp', [])
.controller('calcCtrl', ['$scope', function($scope){
  $scope.title = 'JScalculator';
  $scope.previous;
  $scope.current;
  $scope.total = '';
  $scope.entry = '';

  $scope.button = function(val){
    $scope.entry = $scope.entry += val;
    console.log($scope.entry);
  }

  $scope.addition = function(){

  }

  $scope.subtraction = function(){

  }

  $scope.multiplication = function(){

  }

  $scope.division = function(){

  }

  $scope.clearEntry = function(){
    $scope.entry = '';
  }

  $scope.clearAll = function(){
    $scope.total = '';
  }

  $scope.equals = function(){

  }

  $scope.decimal = function(){

  }

}]);