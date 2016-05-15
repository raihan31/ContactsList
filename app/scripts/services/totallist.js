'use strict';

angular.module('myAppApp')
  .factory('TotalList', function ($resource,endpoint) {
        return $resource( endpoint+'?$orderby=Name&$filter=UserId eq 4',{},{
            query: {method: 'Get', isArray: false, header: {Accept: 'application/json;odata=verbose'}}
        });
  });
