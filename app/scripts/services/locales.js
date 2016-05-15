'use strict';

/**
 * @ngdoc service
 * @name myAppApp.LOCALES
 * @description
 * # LOCALES
 * Constant in the myAppApp.
 */
angular.module('myAppApp')
  .constant('LOCALES', {
      'locales': {
          'bn_BD': 'Bangla',
          'en_US': 'English'
      },
      'preferredLocale': 'en_US'
  })
  .constant('DEBUG_MODE', /*DEBUG_MODE*/true/*DEBUG_MODE*/)
  .constant('VERSION_TAG', /*VERSION_TAG_START*/new Date().getTime()/*VERSION_TAG_END*/);
