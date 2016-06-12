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
          attended: 1,
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet saepe in qui adipisci, optio aliquam culpa, excepturi repellendus, id numquam delectus magnam sequi non ratione. Minus unde ab assumenda, beatae minima eaque expedita at tempora voluptatem quisquam. Commodi ratione quia tempora nobis debitis, minus voluptatum voluptates dolorum assumenda aliquid, ipsam.',
          userAttended: false
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
