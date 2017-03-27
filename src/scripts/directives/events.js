angular.module('eventDirective', [])
	
	.directive('eventDirective', function() {
		return {
			restrict: 'E',
			templateUrl: './src/templates/eventTemplate.html'
		};
	})