'use strict';

describe('Service: TotalList', function () {

  // load the service's module
  beforeEach(module('myAppApp'));

  // instantiate service
  var TotalList;
  beforeEach(inject(function (_TotalList_) {
    TotalList = _TotalList_;
  }));

  it('should do something', function () {
    expect(!!TotalList).toBe(true);
  });

});
