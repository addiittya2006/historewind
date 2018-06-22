angular.module('networkErrorToastCtrl', [])
	.controller('networkErrorToastCtrl', ['$scope', '$mdToast', '$window', function($scope, $mdToast, $window) {
		$scope.reload = function() {
			$mdToast.hide();
			$window.location.reload();
		}
	}])