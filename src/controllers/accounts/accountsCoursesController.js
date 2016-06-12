(function(){
  'use strict';

  angular.module('studentbook.controllers')
    .controller('accountsCoursesController', [
      '$scope',
      'cfpLoadingBar',
      '$timeout',
      '$uibModal',
      function($scope, cfpLoadingBar, $timeout, $uibModal) {
        $scope.dataIsLoaded = false;

        $scope.lessons = [
          {
            id: 1,
            title: 'Curs 1',
            description: 'Lorem ipsum dolor sit amet.'
          },
          {
            id: 2,
            title: 'Curs 2',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing.'
          },
          {
            id: 3,
            title: 'Curs 3',
            description: 'Lorem ipsum dolor sit amet, consectetur.'
          }
        ];

        $scope.course = {
          id: 1,
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

        $scope.openLesson = function(lessonId) {
          $uibModal.open({
            templateUrl: 'views/account/courses/lesson.tpl.html',
            resolve: {
              lessonId: function() {
                return lessonId;
              }
            }
          });
        };

        $scope.start();
        $timeout(function() {
          $scope.dataIsLoaded = true;
          $scope.complete();
        }, 1000);
      }
    ]);

})();
