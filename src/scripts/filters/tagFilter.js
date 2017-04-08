angular.module('tagFilter', [])
	
	.filter('tag', ['$sce', function($sce) {
		return function(data) {
			$('a').attr('target', '_blank');
			// $('a').attr('href', function(i, href) {
			// 	console.log(href);
			// 	return 'https://en.wikipedia.org' + href;
			// });
			return $sce.trustAsHtml(data);
		};
	}])