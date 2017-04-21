angular.module('homeCtrl', [])

	.controller('homeCtrl', ['$scope', '$timeout', '$mdDialog', '$mdToast', '$rootScope', 'tagFilter', 'morningService', 'eveningService', function($scope, $timeout, $mdDialog, $mdToast, $rootScope, tagFilter, morningService, eveningService) {

		// registering serviceWorker
		if ("serviceWorker" in navigator) {
			navigator.serviceWorker.register("./sw.js")
				.then(function(registtation) {
				}).catch(function(err) {
					console.log(err);
				});
		}

		// start spinner
		$scope.loaded = false;
		$mdDialog.show({
			targetEvent: event,
			bindToController: true,
			clickOutsideToClose: false,
			templateUrl: './src/templates/spinnerDialog.html'
		});
		// $('a').attr('href', function(i, href) {
		// 	console.log(href);
		// 	return 'https://en.wekipedia.org/' + href;
		// });

		var months = [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ];
		$scope.date = new Date();
		var todayDate = months[$scope.date.getMonth()] + '_' + $scope.date.getDate();
		var time = $scope.date.getHours() + ':' + $scope.date.getMinutes() + ':' + $scope.date.getSeconds();
		var phase = 8 < $scope.date.getHours() < 6 ? 'AM' : 'PM';
		var fullTime = time + ':' + phase;

		// between 12AM and 4PM
		if ( $scope.date.getHours() >= 0 && $scope.date.getHours() < 16) {
			console.log('morning digest');
			morningService.getData(todayDate)
			.then(function(res, status, header, scope) {
				$scope.births = res.data.births;
				$scope.deaths = res.data.deaths;
				$scope.events = res.data.events;
			}, function errorCallback(err) {
				$timeout(function() {
					$mdToast.show({
						hideDelay: 99999999999,
						templateUrl: './src/templates/networkErrorToast.html',
						position: 'bottom center',
						controller: 'networkErrorToastCtrl'
					})
				}, 2000);
				console.log(err);
			})
			.finally(function() {
				$scope.loaded = true;
				$mdDialog.hide('.spinner');
			});
		}else {
			console.log('evening digest');
			eveningService.getData(todayDate)
			.then(function(res, status, header, scope) {
				$scope.births = res.data.births;
				$scope.deaths = res.data.deaths;
				$scope.events = res.data.events;
			}, function errorCallback(err) {
				$timeout(function() {
					$mdToast.show({
						hideDelay: 99999999999,
						templateUrl: './src/templates/networkErrorToast.html',
						position: 'bottom center',
						controller: 'networkErrorToastCtrl'
					})
				}, 2000);
				console.log(err);
			})
			.finally(function() {
				$scope.loaded = true;
				$mdDialog.hide('.spinner');
				console.log('spinner stops');
				var eveningColor = {
					"color" : "#9e9e9e"
				}
				console.log(evening.color);
				$rootScope.$emit('setDefaultEveningColor', eveningColor);
			});
		}

		console.log(fullTime);
	}])
