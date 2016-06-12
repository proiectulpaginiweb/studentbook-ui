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
            attended: 54,
            description: 'Lorem ipsum dolor sit amet.',
            userAttended: true
          },
          {
            id: 2,
            title: 'Curs 2',
            attended: 25,
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
            userAttended: true
          },
          {
            id: 3,
            title: 'Curs 3',
            attended: 9,
            description: 'Lorem ipsum dolor sit amet, consectetur.',
            userAttended: true
          },
          {
            id: 4,
            title: 'Curs 4',
            attended: 20,
            description: 'Lorem ipsum dolor sit amet, consectetur.',
            userAttended: false
          },
          {
            id: 5,
            title: 'Curs 5',
            attended: 30,
            description: 'Lorem ipsum dolor sit amet, consectetur.',
            userAttended: false
          },
          {
            id: 6,
            title: 'Curs 6',
            attended: 46,
            description: 'Lorem ipsum dolor sit amet, consectetur.',
            userAttended: false
          },
          {
            id: 7,
            title: 'Curs 7',
            attended: 58,
            description: 'Lorem ipsum dolor sit amet, consectetur.',
            userAttended: true
          },
          {
            id: 8,
            title: 'Curs 8',
            attended: 70,
            description: 'Lorem ipsum dolor sit amet, consectetur.',
            userAttended: true
          },
          {
            id: 9,
            title: 'Curs 9',
            attended: 71,
            description: 'Lorem ipsum dolor sit amet, consectetur.',
            userAttended: true
          }
        ];

        $scope.homeworks = [
          {
            id: 1,
            title: 'Homework 1',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, nesciunt!'
          },
          {
            id: 2,
            title: 'Homework 2',
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
