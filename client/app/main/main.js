'use strict';

angular.module('testyApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      });
  });

  //resolve http get for job and store it in scope