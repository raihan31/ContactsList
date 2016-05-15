'use strict';

describe('Directive: ngTranslateLanguageSelect', function () {

  // load the directive's module
  beforeEach(module('myAppApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<ng-translate-language-select></ng-translate-language-select>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the ngTranslateLanguageSelect directive');
  }));
});
