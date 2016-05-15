'use strict';

/**
 * @ngdoc function
 * @name myAppApp.controller:AddCtrl
 * @description
 * # AddCtrl
 * Controller of the myAppApp
 */
angular.module('myAppApp')
  .controller('AddCtrl', function ($scope, Add,details, $rootScope,$q,$state,DetailsOne,$stateParams,emailExistValidate) {
    var deferred = $q.defer();
    $scope.ValidationChecked = false;
    $scope.FormData = DetailsOne;
    console.log(DetailsOne);
    if($scope.FormData!=null){
      $scope.Org1 = $scope.FormData.Organization;
    }
    
    $scope.Emailcheck = function (data) {
      emailExistValidate.query({$filter:'Email eq '+"'"+data+"'", $select: 'Email'},function (response) {
        console.log(response);
        if(response.value.length>0){
          $scope.ValidationChecked = true;
        }
       else {
          $scope.ValidationChecked = false;
        }

      },function (response) {
        $scope.ValidationChecked = false;
      })
    }
    
    
    $scope.Save = function () {
      if($scope.FormData.Id)
      {
        console.log($scope.FormData);
        Add.update($scope.FormData,
            function (response) {
              $state.go('/',{},{reload: true});
            },function (response) {
              console.log('Error in savig');
            });
      }
      else {
        $scope.FormData.Organization = $scope.Org1+' '+ $scope.Org2;
        $scope.FormData.UserId = 4;
        $scope.FormData.Id = guid();
        console.log($scope.FormData);
        Add.save($scope.FormData,
            function (response) {
              $state.go('/',{},{reload: true});
            },function (response) {
                console.log('Error in savig');
            });
      }

    }

    $scope.Cancel = function () {
      if($scope.FormData.Id){
        $state.go('/',{},{reload: true});
      }
      else {
        $scope.FormData = null;
      }
    }
    
    function guid() {
      function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
      }
      return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
          s4() + '-' + s4() + s4() + s4();
    }
  });
