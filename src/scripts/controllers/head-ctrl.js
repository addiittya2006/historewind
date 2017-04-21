angular.module('head-ctrl', [])
	.controller('head-ctrl', ['$rootScope', function($rootScope) {
		$rootScope.$on('send', function(resp) {
			$rootScope.data = resp;
		})
	}])