angular.module('homeCtrl', [])
	.controller('homeCtrl', ['$scope', '$timeout', '$mdDialog', function($scope, $timeout, $mdDialog) {
		$scope.loaded = false;
		$mdDialog.show({
			templateUrl: './src/templates/spinnerDialog.html'
		});
		$timeout(function() {
			$scope.loaded = true;
			$mdDialog.hide('.spinner');
		}, 3000);
	}])