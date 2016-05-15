'use strict';

describe('Service: LOCALES', function () {

  // load the service's module
  beforeEach(module('myAppApp'));

  // instantiate service
  var LOCALES;
  beforeEach(inject(function (_LOCALES_) {
    LOCALES = _LOCALES_;
  }));

  it('should do something', function () {
    expect(!!LOCALES).toBe(true);
  });

});
