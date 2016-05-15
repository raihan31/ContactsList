'use strict';

/**
 * @ngdoc service
 * @name myAppApp.SearchedLetter
 * @description
 * # SearchedLetter
 * Factory in the myAppApp.
 */
angular.module('myAppApp')
  .factory('SearchedLetter', function (endpoint, $resource) {
    return $resource(endpoint,{},{
        query:{method: 'Get', isArray: false}
    });

  });
