'use strict';

describe('Service: emailExistValidate', function () {

  // load the service's module
  beforeEach(module('myAppApp'));

  // instantiate service
  var emailExistValidate;
  beforeEach(inject(function (_emailExistValidate_) {
    emailExistValidate = _emailExistValidate_;
  }));

  it('should do something', function () {
    expect(!!emailExistValidate).toBe(true);
  });

});
