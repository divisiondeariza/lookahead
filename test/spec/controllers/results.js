'use strict';

describe('Controller: ResultsCtrl', function () {

  // load the controller's module
  beforeEach(module('buscadorVideosApp'));
  var $httpBackend, authRequestHandler, mockResponse;
  var ResultsCtrl, scope;

  beforeEach(inject(function($injector) {
    mockResponse = "link1.com,tag1,tag2,\nlink2.com,tag1,tag3,tag4\nlink3.com,tag5,tag6,tag7";

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
    ResultsCtrl = $controller('ResultsCtrl', {
      $scope: scope,
      // place here mocked dependencies
      $routeParams: { 'q': "tag1" }
    });
  }));

  it('Find videos with some tag', function () {
    $httpBackend.expectGET('/../../data/videos.csv');
    $httpBackend.flush();
    expect(scope.videos).toEqual([{"url":"link1.com",
                                     "tags": ["tag1","tag2"]},
                                     {"url":"link2.com",
                                     "tags": ["tag1","tag3","tag4"]}]);
  });
});
