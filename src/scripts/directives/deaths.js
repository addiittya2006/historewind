angular.module('deathDirective', [])
	.directive('deathDirective', function() {
		return {
			restrict: 'E',
			templateUrl: './src/templates/deathTemplate.html'
		};
	})