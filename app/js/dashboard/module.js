'use strict';

angular.module('dashboard.controllers', []);
angular.module('dashboard.services', []);
angular.module('dashboard.directives', []);
angular.module('dashboard', ['dashboard.controllers', 'dashboard.services', 'dashboard.directives'])
  .config(['$stateProvider', '$urlRouterProvider',
      function ($stateProvider, $urlRouterProvider) {

          ///* Default page */
          //$urlRouterProvider.when('/', '/dashboard');
          //
          ///* else redirect to error */
          //$urlRouterProvider.otherwise('/error');

          $stateProvider.state('dashboard', {
              url: '/dashboard',
              templateUrl: '',
              controller: 'dashboardCtrl'
          })
      }]);
