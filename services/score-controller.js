angular.module('app')
  .controller('ScoreController', function($scope, score, randomScore, hey) {
    $scope.score = score;
    $scope.increment = function() {
      $scope.score.points += randomScore();
    };
    $scope.hey = hey; 
  });