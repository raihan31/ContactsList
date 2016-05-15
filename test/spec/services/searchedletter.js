'use strict';

describe('Service: SearchedLetter', function () {

  // load the service's module
  beforeEach(module('myAppApp'));

  // instantiate service
  var SearchedLetter;
  beforeEach(inject(function (_SearchedLetter_) {
    SearchedLetter = _SearchedLetter_;
  }));

  it('should do something', function () {
    expect(!!SearchedLetter).toBe(true);
  });

});
