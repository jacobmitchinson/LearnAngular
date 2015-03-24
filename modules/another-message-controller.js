angular.module('app')
  .controller('MyMessage', function($scope) { 
    $scope.message = 'Hi there';
  })
  .controller('MyMessage2', function($scope) {
    $scope.message = "This is another module";
  });