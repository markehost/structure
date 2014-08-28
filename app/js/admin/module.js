'use strict';
angular.module('admin.controllers', []);
angular.module('admin.services', []);
angular.module('admin', ['admin.controllers'])
  .config(['$stateProvider', '$urlRouterProvider',
      function ($stateProvider, $urlRouterProvider) {

          ///* Default page */
          //$urlRouterProvider.when('/', '/dashboard');
          //
          ///* else redirect to error */
          //$urlRouterProvider.otherwise('/error');

          $stateProvider.state('admin', {
              templateUrl: '',
              controller: 'adminCtrl'

          })
      }]);
