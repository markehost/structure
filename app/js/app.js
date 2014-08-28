'use strict';


// Declare app level module which depends on filters, and services
angular.module('structure', [
    'ui.router',
    'admin',
    'admin.controllers',
    'admin.services',

    'dashboard',
    'dashboard.controllers',
    'dashboard.services',
    'dashboard.directives'
]);
