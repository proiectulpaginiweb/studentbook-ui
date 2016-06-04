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
      });
  }]);

  angular.element(document).ready(function() {
    angular.bootstrap(document, ['studentbook.ui']);
  });

})();
