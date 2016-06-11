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
        .state('index.account.courses', {
            url: '/courses',
            templateUrl: 'views/account/courses.tpl.html'
        })
        .state('index.account.course', {
            url: '/courses/:courseId',
            templateUrl: 'views/account/courses/course.tpl.html'
        })
        .state('index.account.security', {
            url: '/security',
            templateUrl: 'views/account/security.tpl.html'
        });
    }]);

})();
