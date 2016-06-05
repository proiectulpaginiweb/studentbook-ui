(function(){
  'use strict';

  angular.module('studentbook.ui', [
    'ui.router',
    'studentbook-ui.templateCache'
  ])
  .config(['$stateProvider', function($stateProvider) {
    $stateProvider
      .state('null', {
        url: '/',
        templateUrl: 'views/index.tpl.html'
      })
      .state('contact', {
        url: '/contact',
        templateUrl: 'views/contact.tpl.html'
      })
      .state('account', {
        url: '/account',
        templateUrl: 'views/account.tpl.html'
      })
      .state('account.settings', {
          url: '/settings',
          templateUrl: 'views/account/settings.tpl.html'
      })
      .state('account.security', {
          url: '/security',
          templateUrl: 'views/account/security.tpl.html'
      });
  }]);

  angular.element(document).ready(function() {
    angular.bootstrap(document, ['studentbook.ui']);
  });

})();
