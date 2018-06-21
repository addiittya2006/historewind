angular.module('anchorFilter', [])
	.filter('anchor', ['$sce', function($sce) {
		return function(data) {
			var tmp = document.createElement("p");
			tmp.innerHTML = data;
			var anchors = tmp.querySelectorAll("a\[href\^\=\"\/wiki\/\"\]");
			NodeList.prototype.forEach.call(anchors, function (anchor) {
				anchor.target = "_blank";
				anchor.href = "https://en.wikipedia.org"+anchor.pathname;
			});
			data = tmp.innerHTML
		return $sce.trustAsHtml(data);
		};
	}])
