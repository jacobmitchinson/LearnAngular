function ScopeTest($scope) { 

  $scope.number = 0;
  $scope.add = function() { 
    $scope.number = (parseInt($scope.newValue));
  };
  $scope.number2 = 2 + $scope.number;
  $scope.$watch(function() { 
    $scope.number3 = $scope.number + $scope.number2;
  }, true);
}