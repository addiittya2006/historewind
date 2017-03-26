angular.module('homeCtrl', [])
	.controller('homeCtrl', ['$scope', '$timeout', '$mdDialog', '$mdToast', 'dataService', function($scope, $timeout, $mdDialog, $mdToast, dataService) {
		
		// start spinner
		$scope.loaded = false;
		$mdDialog.show({
			templateUrl: './src/templates/spinnerDialog.html'
		});

		var months = [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ];
		$scope.date = new Date();
		var todayDate = months[$scope.date.getMonth()] + '_' + $scope.date.getDate();
		
		dataService.getData(todayDate)
			.success(function(res, status, header, scope) {
				$scope.loaded = true;
				$mdDialog.hide('.spinner');
				console.log(res);
			})
			.error(function() {
				$timeout(function() {
					$mdToast.show({
						hideDelay: 99999999999,
						templateUrl: './src/templates/networkErrorToast.html',
						position: 'bottom center',
						controller: 'networkErrorToastCtrl'
					})
				}, 2000);
				console.log('error occured');
			})
	}])