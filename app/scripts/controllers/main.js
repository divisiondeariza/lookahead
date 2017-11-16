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
 	$http.get('/../../data/videos.csv').then(function(resp) {

 		//$scope.videos = fCsv.toJson(resp.data,",",false);
 		$scope.videos = resp.data.split("\n")
 							.map(function(row){
 								return row.split(",")
 							});
 		var rawTags = []
 		$scope.videos.forEach(function(row){
 			rawTags = rawTags.concat(row.slice(1));
 		})
 		
 		$scope.tags = rawTags.filter(function(item, pos, self) {
									    return item != "" && self.indexOf(item) == pos;
									});
 	});


 }]);
