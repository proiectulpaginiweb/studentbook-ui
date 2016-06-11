(function(){
  'use strict';

  angular.module('studentbook.controllers')
    .controller('usersCoursesController', ['$scope', 'cfpLoadingBar', '$timeout', function($scope, cfpLoadingBar, $timeout) {
      $scope.dataIsLoaded = false;

      $scope.course = {
        title: 'Aplicatii Web cu suport Java',
        years: '2016-2017',
        isUserEnrolled: true,
        description: 'Cursul este alcatuit din urmatoarele componente: Spring(Java), AngularJS(Javascript), utilitarul Git(GitHub), elemente de HTML si CSS(Twitter Bootstrap).'
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
      }, 2000);

    }]);

})();
