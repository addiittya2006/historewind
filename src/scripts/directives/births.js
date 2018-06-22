angular.module('birthDirective', [])
	.directive('birthDirective', function() {
		return {
			restrict: 'E',
			templateUrl: './src/templates/birthTemplate.html'
		};
	})