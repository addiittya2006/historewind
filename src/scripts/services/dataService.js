angular.module('dataService', [])

	.factory('morningService', ['$http', function($http) {
		return {
			getData: function(todayDate) {
				return $http.get('https://history.aditya.science/' + todayDate + '/morn_digest.json');
			}
		}
	}])

	.factory('eveningService', ['$http', function($http) {
		return {
			getData: function(todayDate) {
				return $http.get('https://history.aditya.science/' + todayDate + '/eve_digest.json')
			}
		}
	}])

	.service('headColor', function($window) {
		this.setMetaTag = function( tagData ) {
			$window.document.getElementsByName('theme-color')[0].content = tagData.color;
			$window.document.getElementsByName('apple-mobile-web-app-status-bar-style')[0].content = tagData.color;			
		}
	})
