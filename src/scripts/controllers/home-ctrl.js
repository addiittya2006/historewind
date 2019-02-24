angular.module('homeCtrl', [])

	.controller('homeCtrl', ['$scope', '$timeout', '$mdDialog', '$mdToast', '$rootScope', 'anchorFilter', 'morningService', 'eveningService', function($scope, $timeout, $mdDialog, $mdToast, $rootScope, amchorFilter, morningService, eveningService, event) {

		// registering serviceWorker
		if ("serviceWorker" in navigator) {
			navigator.serviceWorker.register("./sw.js")
		}

		// start spinner
		$scope.loaded = false;
		$mdDialog.show({
			targetEvent: event,
			bindToController: true,
			clickOutsideToClose: false,
			templateUrl: './src/templates/spinnerDialog.html'
		});

		var months = [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ];
		$scope.date = new Date();
		var todayDate = months[$scope.date.getMonth()] + '_' + $scope.date.getDate();
		var time = $scope.date.getHours() + ':' + $scope.date.getMinutes() + ':' + $scope.date.getSeconds();
		var phase = 8 < $scope.date.getHours() < 6 ? 'AM' : 'PM';
		var fullTime = time + ':' + phase;

		// between 4AM and 4PM
		if ( $scope.date.getHours() >= 4 && $scope.date.getHours() < 16) {
			morningService.getDownloadUrl(todayDate).then(function(url) {
				morningService.getData(url).then(function(res, status, header, scope) {
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
			})
		} else {
			eveningService.getDownloadUrl(todayDate).then(function(url) {
				eveningService.getData(url).then(function(res, status, header, scope) {
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
					var eveningColor = {
						"color" : "#9E9E9E"
					}
					$rootScope.$broadcast('setDefaultEveningColor', eveningColor);
					$scope.loaded = true;
					$mdDialog.hide('.spinner');
				});
			})
		}
	}
])
