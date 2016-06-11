(function(){
  'use strict';

  angular.module('studentbook.ui')
    .config(['cfpLoadingBarProvider', function(cfpLoadingBarProvider) {
      cfpLoadingBarProvider.includeSpinner = false;
    }]);

})();
