(function(){
  'use strict';

  angular.module('studentbook.controllers')
    .controller('accountsCoursesLessonsController', [
      '$scope',
      'cfpLoadingBar',
      '$timeout',
      function($scope, cfpLoadingBar, $timeout) {
        $scope.dataIsLoaded = false;

        $scope.lesson = {
          id: 1,
          title: 'Curs 1',
          description: 'Lorem ipsum dolor sit amet.'
        };

        $scope.start = function() {
          cfpLoadingBar.start();
        };

        $scope.complete = function () {
          cfpLoadingBar.complete();
        };

        $scope.start();
        $timeout(function() {
          $scope.dataIsLoaded = true;
          $scope.complete();
        }, 1000);
      }
    ]);

})();
