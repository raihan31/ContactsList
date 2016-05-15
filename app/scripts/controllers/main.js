'use strict';

/**
 * @ngdoc function
 * @name myAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the myAppApp
 */
angular.module('myAppApp')
  .controller('MainCtrl', function ($scope, TotalLists, TotalList, Identify,SearchedLetter,$stateParams) {
      $scope.letters = [{"name": "A"},{"name": "B"},{"name": "C"},{"name": "D"},{"name": "E"},{"name": "F"},{"name": "G"},{"name": "H"},{"name": "I"},{"name": "J"},{"name": "K"},{"name": "L"},{"name": "M"},{"name": "N"},{"name": "O"},{"name": "P"},{"name": "Q"},{"name": "R"},{"name": "S"},{"name": "T"},{"name": "U"},{"name": "V"},{"name": "W"},{"name": "X"},{"name": "Y"},{"name": "Z"}];
      
      $scope.totallists = TotalLists.value;
      $scope.top = 5;
      $scope.skip = 0;
      
      $scope.NextButton = function () {
          $scope.skip = $scope.skip + $scope.top;
          if(Identify){
              SearchedLetter.query({$top: $scope.top, $skip: $scope.skip,$filter: "startswith(Name,"+ "'"+$stateParams.name+"'"+")"},function (response) {
                  $scope.totallists = response.value;
              });
          }
          else {
              TotalList.query({$top: $scope.top, $skip: $scope.skip},function (response) {
                  $scope.totallists = response.value;
              });
          }

      };
      $scope.PreButton = function () {
          if($scope.skip > 1)
          {
              $scope.skip = $scope.skip - $scope.top;
              if(Identify){
                  SearchedLetter.query({$top: $scope.top, $skip: $scope.skip,$filter: "startswith(Name,"+ "'"+$stateParams.name+"'"+")"},function (response) {
                      $scope.totallists = response.value;
                  });
              }
              else {
                  TotalList.query({$top: $scope.top, $skip: $scope.skip},function (response) {
                      $scope.totallists = response.value;
                  });
              }
          }


      }
  });
