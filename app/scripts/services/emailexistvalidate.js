'use strict';

/**
 * @ngdoc service
 * @name myAppApp.emailExistValidate
 * @description
 * # emailExistValidate
 * Factory in the myAppApp.
 */
angular.module('myAppApp')
  .factory('emailExistValidate', function (endpoint, $resource) {
    return $resource(endpoint,{},{
          query:{method:'GET', header: {Accept: 'application/json;odata=verbose','Content-Type': 'application/json'}}
      });
  });
