(function(){
  'use strict';

  angular.module('studentbook.controllers', []);

  angular.module('studentbook.ui', [
    'ui.router',
    'studentbook.controllers',
    'studentbook-ui.templateCache',
    'angular-loading-bar',
    'ui.bootstrap',
    'ng-showdown'
  ]);

  angular.element(document).ready(function() {
    angular.element(document.body).prepend('<div ui-view></div>');
    angular.bootstrap(document, ['studentbook.ui']);
  });

})();
