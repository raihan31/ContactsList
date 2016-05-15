'use strict';

angular.module('myAppApp')
  .factory('Add', function ($resource, endpoint) {
    return $resource(endpoint,{},{
        save:{method:'POST', header:{'Content-Type': 'application/json'}},
        update: {method:'PUT', header: {Accept: 'application/json;odata=verbose'}}
    });
  });
