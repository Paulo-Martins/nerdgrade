'use strict';

/**
 * @ngdoc function
 * @name nerdgradeApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the nerdgradeApp
 */
angular.module('nerdgradeApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
