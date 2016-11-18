angular.module('calcApp', [])
.controller('calcCtrl', ['$scope', function($scope){
  $scope.title = 'JS Calculator';
  $scope.total = 0;
  $scope.entries = '';
  $scope.opperator = '';

  $scope.button = function(val){
    console.log(typeof(val));
    if(val !== '+' && val !== '-' && val !== '*' && val !== '/'){
      console.log('inside if: ', val);
      $scope.entries += val; 
    }
    if(val === '+' || val === '-' || val === '*' || val === '/'){
      if($scope.opperator){
        $scope.total = eval($scope.entries);
        $scope.entries = $scope.total;
        $scope.entries += val;
        $scope.opperator = val;
      } else {
        $scope.entries += val;
        $scope.opperator = val;
      }
    }    
  }

  $scope.clearEntry = function(){
    $scope.opperator = '';
    $scope.entries = '';
  }

  $scope.clearAll = function(){
    $scope.entries = '';
    $scope.total = 0;
    $scope.opperator = '';
  }

  $scope.equals = function(){
    $scope.total = eval($scope.entries);
    $scope.entries = $scope.total;
    $scope.opperator = '';
  }
}]);