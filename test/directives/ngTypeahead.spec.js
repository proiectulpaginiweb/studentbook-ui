(function(){
  'use strict';

  describe('A suite', function() {

    var compile,
        scope,
        directiveElem,
        inputElem,
        template = '<div ng-typeahead my-directive-var="myDirectiveVar"></div>';

    beforeEach(function(){
      module('ngComponents');

      inject(function($compile, $rootScope){
        compile     = $compile;
        scope       = $rootScope.$new();
      });

      directiveElem = getCompiledElement();
      inputElem     = directiveElem.find('input');
    });

    function getCompiledElement(){
      var compiledElem = compile(angular.element(template))(scope);

      scope.$digest();

      return compiledElem;
    }

    it('should have an input element tag', function() {
      var inputElement = directiveElem.find('input');

      expect(inputElement).toBeDefined();
    });

    it('should have the ng-touched class on input blur', function() {
      inputElem.triggerHandler('blur');

      scope.$digest();

      expect(inputElem.hasClass('ng-touched')).toBe(true);
    });

    it('should update the scoped myDirectiveVar model', function() {
      inputElem.val('My value').triggerHandler('input');

      scope.$digest();

      expect(scope.myDirectiveVar).toBe('My value');
    });
  });
})();
