(function(){
  'use strict';

  angular.module('studentbook.ui')
    .config(['$stateProvider', function($stateProvider) {
      $stateProvider
        .state('root', {
          url: '',
          templateUrl: 'views/index.tpl.html'
        })
        .state('index', {
          url: '/',
          templateUrl: 'views/index.tpl.html'
        })
        .state('index.courses', {
          url: 'courses',
          templateUrl: 'views/courses.tpl.html'
        })
        .state('index.contact', {
          url: 'contact',
          templateUrl: 'views/contact.tpl.html'
        })
        .state('index.account', {
          url: 'account',
          templateUrl: 'views/account.tpl.html'
        })
        .state('index.account.settings', {
            url: '/settings',
            templateUrl: 'views/account/settings.tpl.html'
        })
        .state('index.account.profile', {
            url: '/profile',
            templateUrl: 'views/account/profile.tpl.html'
        })
        .state('index.account.security', {
            url: '/security',
            templateUrl: 'views/account/security.tpl.html'
        })

        /*
         * Courses
         */
        .state('index.account.courses', {
            abstract: true,
            url: '/courses',
            templateUrl: 'views/ui-view.tpl.html'
        })
        .state('index.account.courses.index', {
            url: '',
            templateUrl: 'views/account/courses/index.tpl.html'
        })
        .state('index.account.courses.show', {
            url: '/:courseId',
            templateUrl: 'views/account/courses/show.tpl.html'
        })

        /*
         * Courses lessons
         */
        .state('index.account.courses.lessons', {
            abstract: true,
            url: '/:courseId/lessons',
            templateUrl: 'views/ui-view.tpl.html'
        })
        .state('index.account.courses.lessons.show', {
            url: '/:lessonId',
            templateUrl: 'views/account/courses/lessons/show.tpl.html'
        })

        /*
         * Courses homeworks
         */
        .state('index.account.courses.homeworks', {
            abstract: true,
            url: '/:courseId/homeworks',
            templateUrl: 'views/ui-view.tpl.html'
        })
        .state('index.account.courses.homeworks.show', {
            url: '/:homeworkId',
            templateUrl: 'views/account/courses/homeworks/show.tpl.html'
        });
    }]);

})();
