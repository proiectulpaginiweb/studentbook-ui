(function(){
  'use strict';

  angular.module('studentbook.ui', ['studentbook.ui.templateCache']);

  angular.element(document).ready(function() {
    angular.bootstrap(document, ['studentbook.ui']);
  });

})();
