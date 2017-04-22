angular.module('tagFilter', [])

	.filter('tag', ['$sce', function($sce) {
		return function(data) {
			$('a').attr('target', '_blank')
				.attr('href', 'https://en.wikipedia.org');
			return $sce.trustAsHtml(data);
		};
	}])
