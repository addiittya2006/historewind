angular.module('head-ctrl', [])
	.controller('head-ctrl', ['$rootScope', 'headColor', function($rootScope, headColor) {
		$rootScope.$on('send', function(resp) {
			// $rootScope.data = resp;
			headColor.setColor(resp)
				.then(function(resp) {
					console.log('hurrey', resp);
				}, function errorCallback(err) {
					console.log(err);
				})
		})
	}])
