'use strict';

describe('Controller: TrabalhoctrlCtrl', function () {

  // load the controller's module
  beforeEach(module('nerdgradeApp'));

  var TrabalhoctrlCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TrabalhoctrlCtrl = $controller('TrabalhoctrlCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
