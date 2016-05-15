'use strict';

/**
 * @ngdoc function
 * @name myAppApp.controller:DetailsCtrl
 * @description
 * # DetailsCtrl
 * Controller of the myAppApp
 */
angular.module('myAppApp')
  .controller('DetailsCtrl', function ($scope,DetailsOne) {
        $scope.details = DetailsOne;
  });
