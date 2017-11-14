'use strict';

describe('Controller: MainCtrl', function () {
  var $httpBackend, authRequestHandler, mockResponse;
  var MainCtrl, scope;


  // load the controller's module
  beforeEach(module('buscadorVideosApp'));


  beforeEach(inject(function($injector) {
    mockResponse = "link1.com,tag1,tag2,\nlink2.com,tag1,tag3,tag4";

    $httpBackend = $injector.get('$httpBackend');
    authRequestHandler = $httpBackend
      .whenRoute('GET', '/../../data/videos.csv')
      .respond(function(method, url, data, headers, params) {
        return [200, mockResponse];
      });
  }));
  afterEach(function() {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });


  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('Populates scope,tags with the tags', function () {
    $httpBackend.expectGET('/../../data/videos.csv');
    $httpBackend.flush();
    expect(scope.tags).toEqual(["tag1", "tag2", "tag3", "tag4"]);
  });
});
