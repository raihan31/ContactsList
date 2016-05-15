'use strict';

describe('Service: Add', function () {

  // load the service's module
  beforeEach(module('myAppApp'));

  // instantiate service
  var Add;
  beforeEach(inject(function (_Add_) {
    Add = _Add_;
  }));

  it('should do something', function () {
    expect(!!Add).toBe(true);
  });

});
