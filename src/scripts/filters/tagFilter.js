angular.module('tagFilter', [])
	
	.filter('tag', ['$sce', function($sce) {
		return function(data) {
			return $sce.trustAsHtml(data);
		};
	}])