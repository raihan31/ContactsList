'use strict';

angular.module('myAppApp')
  .factory('details', function ($resource, endpoint) {
      return  $resource( endpoint+'(:Id)',{Id: '@Id'},{
          detailsOne: {method:'Get', header: {Accept: 'application/json;odata=verbose'}},
          deleteOne: {method:'DELETE', header: {Accept: 'application/json;odata=verbose'}}
      });
  });
