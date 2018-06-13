angular.module('tagFilter', [])
	.filter('tag', ['$sce', function($sce) {
		return function(data) {
			var anchors = document.querySelectorAll('a[href^="/wiki/"]');
			Array.prototype.forEach.call(anchors, function (element, index) {
				element.target = "_blank"
				element.href = "https://en.wikipedia.org"+element.href.replace(/^.*\/\/[^\/]+/, '');
			});
		return $sce.trustAsHtml(data);			
		};
	}])
