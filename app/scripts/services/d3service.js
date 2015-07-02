'use strict';

/**
 * @ngdoc service
 * @name testyApp.d3Service
 * @description
 * # d3Service
 * Factory in the testyApp.
 */
angular.module('testyApp')
  .factory('d3Service', function () {
    // Service logic
    // ...

    var meaningOfLife = 42;
    //test

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
  });
