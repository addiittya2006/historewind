angular.module('dataService', [])

	.factory('morningService', ['$http', function($http) {
		return {
			getData: function(todayDate) {
				return $http.get('https://history.addiittya.xyz/' + todayDate + '/morn_digest.json');
				// return todayDate;
			}
		}
	}])

	.factory('eveningService', ['$http', function($http) {
		return {
			getData: function(todayDate) {
				return $http.get('https://history.addiittya.xyz/' + todayDate + '/eve_digest.json')
			}
		}
	}])

	.service('headColor', function($window) {
		this.setMetaTag = function( tagData ) {
			$window.document.getElementsByName('theme-color')[0].content = tagData.color;
		}
	})
