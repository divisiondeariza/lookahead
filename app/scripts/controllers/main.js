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

 	$scope.selected=undefined;
 	$scope.states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Dakota', 'North Carolina', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];
 	$http.get('/../../data/videos.csv').then(function(resp) {

 		//$scope.videos = fCsv.toJson(resp.data,",",false);
 		$scope.videos = resp.data.split("\n")
 							.map(function(row){
 								return row.split(",")
 							});
 		var rawTags = []
 		$scope.videos.forEach(function(row){
 			console.log(row);
 			rawTags = rawTags.concat(row.slice(1));
 		})
 		
 		$scope.tags = rawTags.filter(function(item, pos, self) {
 										console.log(item);
									    return item != "" && self.indexOf(item) == pos;
									});
 		console.log($scope.tags);
 	});


 }]);
