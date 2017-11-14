'use strict';

/**
 * @ngdoc function
 * @name buscadorVideosApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the buscadorVideosApp
 */
angular.module('buscadorVideosApp')
  .controller('MainCtrl', ["$scope", "$http", "fCsv", function ($scope, $http, fCsv) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
	    $scope.selected=undefined;
	    $scope.states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Dakota', 'North Carolina', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];
		$http.get('../../data/videos.csv').then(function(resp) {
		$scope.videos = fCsv.toJson(resp.data);
	});
 

  }]);
