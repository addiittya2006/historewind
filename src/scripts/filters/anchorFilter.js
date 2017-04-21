angular.module('anchorFilter', [])

	.filter('anchor', function() {
		return function(data) {
			var a_href = $('a').attr('href');
			// console.log(data);
		}
	})
