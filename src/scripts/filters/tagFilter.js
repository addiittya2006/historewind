angular.module('tagFilter', [])

	.filter('tag', ['$sce', function($sce) {
		return function(data) {
			$('a').attr('target', '_blank');
			// console.log($('a').attr('href'));
			return $sce.trustAsHtml(data);
		};
	}])
