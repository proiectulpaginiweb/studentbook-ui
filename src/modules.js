(function(){
  'use strict';

  angular.module('studentbook.ui', [
    'ui.router',
    'studentbook-ui.templateCache'
  ])
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
      .state('index.account.security', {
          url: '/security',
          templateUrl: 'views/account/security.tpl.html'
      });
  }]);

  angular.element(document).ready(function() {
    angular.bootstrap(document, ['studentbook.ui']);
  });

})();
