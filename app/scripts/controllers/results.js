'use strict';

/**
 * @ngdoc function
 * @name buscadorVideosApp.controller:ResultsCtrl
 * @description
 * # ResultsCtrl
 * Controller of the buscadorVideosApp
 */
 angular.module('buscadorVideosApp')
 .controller('ResultsCtrl', ["$scope", "$routeParams", "$http", function ($scope, $routeParams, $http) {
 	console.log($routeParams);
 	$http.get('/../../data/videos.csv').then(function(resp) {
 		var tags = $routeParams["q"].split(",")
 									.filter(function(tag){
 										return tag != "";
 									});
 		console.log(tags);

 		$scope.videos = resp.data.split("\n")
 		.map(function(row){
 			return row.split(",")
 						.filter(function(tag){
 							return tag != "";
 						})
 		}).filter(function(row, pos, self) {
 			var hasTags = false;
 			tags.forEach(function(tag){
 				console.log(row.indexOf(tag));
 				if (row.indexOf(tag)!=-1)
 					hasTags = true;
 			})
 			return hasTags;
 		}).map(function(row){
 			return {"url":row[0],
 					"tags":row.slice(1)}
 		});


 		});
 	}]);
