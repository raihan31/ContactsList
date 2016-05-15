'use strict';

/**
 * @ngdoc overview
 * @name myAppApp
 * @description
 * # myAppApp
 *
 * Main module of the application.
 */
angular
  .module('myAppApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngSanitize',
    'ngTouch',
    'ui.router',
    'ui.bootstrap',
    'pascalprecht.translate',
    'tmh.dynamicLocale',
    'remoteValidation'
  ])
  .config(function ($compileProvider, DEBUG_MODE) {
      if (!DEBUG_MODE) {
          $compileProvider.debugInfoEnabled(false);// disables AngularJS debug info
      }
  })
  .config(function ($translateProvider, DEBUG_MODE, LOCALES) {
      if(DEBUG_MODE){
          $translateProvider.useMissingTranslationHandlerLog();
      }
      
      $translateProvider.useStaticFilesLoader({
          prefix: 'i18n/locale-',// path to translations files
          suffix: '.json'// suffix, currently- extension of the translations
      });
      $translateProvider.preferredLanguage(LOCALES.preferredLocale);// is applied on first load
      $translateProvider.useLocalStorage();// saves selected language to localStorage
  })
  .config(function (tmhDynamicLocaleProvider) {
      tmhDynamicLocaleProvider.localeLocationPattern('bower_components/angular-i18n/angular-locale_{{locale}}.js');
  })
  .config(function ($stateProvider,$urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
      .state('/', {
        url: '/',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        resolve :{
            TotalLists: function (TotalList, $q) {
                var deferred = $q.defer();
                TotalList.query({ $top:5},function (response) {
                    deferred.resolve(response);
                },function(response){
                    deferred.reject(response);
                });
                return deferred.promise;
            },
            Identify : function () {
                return false;
            }

        }
      })
      .state('add',{
          url: '/new',
          templateUrl: 'views/new.html',
          controller: 'AddCtrl',
          resolve:{
              DetailsOne: function () {
                  return null;
              }
          }
      })
      .state('details',{
          url: '/details/{Id}',
          templateUrl: 'views/details.html',
          controller: 'DetailsCtrl',
          resolve:{
              DetailsOne: function ($stateParams, details,$q) {
                  var deferred = $q.defer();
                  var guidId = "guid"+"'"+$stateParams.Id+"'";
                  details.detailsOne({},{Id: guidId},function (response) {
                      deferred.resolve(response);
                      console.log(response);
                  },function (response) {
                      deferred.reject(response);
                  });
                  return deferred.promise;
              }
          }
      })
      .state('edit',{
          url: '/Edit/{Id}',
          templateUrl: 'views/new.html',
          controller: 'AddCtrl',
          resolve:{
              DetailsOne: function ($stateParams, details,$q) {
                  var deferred = $q.defer();
                  var guidId = "guid"+"'"+$stateParams.Id+"'";
                  details.detailsOne({},{Id: guidId},function (response) {
                      deferred.resolve(response);
                      console.log(response);
                  },function (response) {
                      deferred.reject(response);
                  });
                  return deferred.promise;
              }
          }
      })
      .state('searchByLetter',{
         url: '/{name}',
         templateUrl: 'views/main.html',
         controller: 'MainCtrl',
         resolve: {
             TotalLists: function (SearchedLetter, $q, $stateParams) {
                 var deferred = $q.defer();
                 SearchedLetter.query({$top: 5, $filter: "startswith(Name,"+ "'"+$stateParams.name+"'"+")"},function (response) {
                     deferred.resolve(response);
                 },function(response){
                     deferred.reject(response);
                 });
                 return deferred.promise;
             },
             Identify : function () {
                 return true;
             }
         }
      })
  });
